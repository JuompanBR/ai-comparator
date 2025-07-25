import { useState, useRef, useEffect } from "react";
import { AIModelItemType, ComparismCriteriaItem, ComparismResponseItem } from "../types";
import { TagInput } from ".";
import { ConfirmBox } from ".";
import { Loader, Ban, ExternalLink } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, addModel, removeModel, setIsLoading } from "../stores/appStore";
import { TextField, Button, Autocomplete, Link, Box } from "@mui/material";
import { GENAIs, USERCRITERIA } from "../constands";
import FeedbackForm from "./FeedbackForm";
import { useTranslation, Trans } from "react-i18next";
import { useAddPostQuery, useCompareQuery } from "../hooks";
import { compareApiResourceMapping } from "../services/api/CompareAPI";

const CompareSection = () => {

  const selectedCriteria: ComparismCriteriaItem[] = useSelector(
    (state: any) => state.comparismCriteria.comparismCriteria,
  );

  const jsonPlaceholderUrl = import.meta.env.VITE_JSON_SERVER_URL;
  const isLoadingGlobalState: boolean = useSelector((state: any) => state.isLoading.isLoading);
  const selectedModels = useSelector((state: any) => state.aiModels.aiModels);
  const storeDispatcher = useDispatch();
  const [tagInputs, enableAnimations] = useAutoAnimate();
  const [modelsInput, enableModelsAnimations] = useAutoAnimate();
  const [selectionsBox, enableSelectionsBoxAnimations] = useAutoAnimate();
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [feedbackOpen, setFeedbackOpen] = useState<boolean>(false);
  const [criteria, setCriteria] = useState<string>("");
  const [aiProduct, setAIs] = useState<string>("");
  const [comparism, setComparism] = useState<ComparismResponseItem[] | null>(null);
  const criteriaInputFieldRef = useRef<HTMLInputElement>(null);
  const modelsInputFieldRef = useRef<HTMLInputElement>(null);
  const { t, i18n } = useTranslation();
  const [submittedData, setSubmittedData] = useState<object[] | null>(null);
  const [postQueryData, setPostQueryData] = useState<ComparismCriteriaItem | null>(null);
  const { data: comparisonResult, isLoading, error } = useCompareQuery(jsonPlaceholderUrl + compareApiResourceMapping.posts, submittedData);
  const postQuery = useAddPostQuery(jsonPlaceholderUrl + compareApiResourceMapping.posts, postQueryData);
  const currentLang = (i18n.language as "en" | "fr") ?? "en";

  useEffect(() => {
    if (error) {
      alert("An error occurred while getting the resource.");
      storeDispatcher(setIsLoading({ data: false }));
      return;
    }

    if (comparisonResult) {
      setOpenConfirm(false);
      storeDispatcher(setIsLoading({ data: false }));
      setComparism(comparisonResult);

      // Scroll to results
      setTimeout(() => {
        document
          .getElementById("comparismReport")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [comparisonResult, isLoading, error]);

  const handleClear = async () => {
    const response = confirm("Are you sure you want to clear ?");

    if (response == true) {
      setComparism(null);
    }
    return;
  };

  const handleSubmit = async (): Promise<void> => {

    const queryParams = [{
      number: Math.floor(Math.random() * 10) + 1
    }];

    setOpenConfirm(false);
    setSubmittedData(queryParams); // trigger the hook now her
    storeDispatcher(setIsLoading({ data: true }));
    setPostQueryData(selectedCriteria[0]);
    alert("Element added successfully !")
  };

  return (
    <>
      <ConfirmBox
        open={openConfirm}
        onConfirm={handleSubmit}
        onCancel={() => setOpenConfirm(false)}
        message={t("confirmBoxContentText")}
        title="Confirmation"
      />
      <FeedbackForm
        open={feedbackOpen}
        onCancel={() => setFeedbackOpen(false)}
        onConfirm={() => alert("Sent !")}
      />
      <Box className="w-full max-w-5xl mt-6 px-4 space-y-4 relative mx-auto">
        <Box
          ref={selectionsBox}
          className="w-full relative flex flex-wrap gap-y-5 justify-center items-start"
        >
          {selectedCriteria.length > 0 && (
            <Box
              className={`w-full lg:w-1/2 relative block text-center ${selectedModels.length > 0 ? "lg:border-r" : ""} lg:pe-9 border-slate-200`}
            >
              <h2 className="font-normal text-[17px] lg:text-lg my-9">
                {t("setCriteria")}
              </h2>
              <Box
                ref={tagInputs}
                className="relative flex flex-wrap gap-4 justify-center items-center transition-all"
              >
                {selectedCriteria.map((tag: ComparismCriteriaItem) => {
                  let label: string;

                  if (typeof tag.data === "string") {
                    label = tag.data;
                  } else {
                    label = tag.data[currentLang] ?? tag.data.en;
                  }

                  return (
                    <TagInput
                      id={tag.id}
                      key={tag.id}
                      onClickEvent={() =>
                        storeDispatcher(remove({ id: tag.id }))
                      }
                    >
                      {label}
                    </TagInput>
                  );
                })}
              </Box>
            </Box>
          )}
          {selectedModels.length > 0 && (
            <Box className="w-full lg:w-1/2 relative block text-center lg:ps-9">
              <h2 className="font-normal text-[17px] lg:text-lg my-9">
                {t("setModels")}
              </h2>
              <Box
                ref={modelsInput}
                className="relative flex flex-wrap gap-4 justify-center items-center transition-all"
              >
                {selectedModels.map((tag: AIModelItemType) => (
                  <TagInput
                    id={tag.id}
                    key={tag.id}
                    onClickEvent={() =>
                      storeDispatcher(removeModel({ id: tag.id }))
                    }
                  >
                    {tag.name}
                  </TagInput>
                ))}
              </Box>
            </Box>
          )}
        </Box>
        <Box
          className={`flex flex-col relative max-w-md w-full mx-auto ${selectedCriteria.length > 0 || selectedModels.length > 0 ? "mt-18" : "mt-12"}`}
        >
          <Autocomplete
            color="warning"
            className="mb-5"
            inputValue={criteria}
            onInputChange={(e, newValue) => {
              if (e?.type !== "change") return;
              setCriteria(newValue);
            }}
            options={USERCRITERIA}
            getOptionLabel={(option) => option.data[currentLang]}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
              <TextField
                {...params}
                inputRef={criteriaInputFieldRef}
                label={t("autoCompleteCriteriaLabel")}
              />
            )}
            renderOption={(props, option) => {
              const { key, ...rest } = props;

              return (
                <li
                  key={key}
                  {...rest}
                  className="text-sm px-2 py-2 my-2.5 hover:underline cursor-pointer select-none"
                >
                  <p>{option.data[currentLang]}</p>
                </li>
              );
            }}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": { borderColor: "#f8ba6d" },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": { color: "#f8ba6d" },
              },
            }}
            onChange={(event, value) => {
              if (
                value &&
                !selectedCriteria.some(
                  (c: ComparismCriteriaItem) => c.id === value.id,
                )
              ) {
                storeDispatcher(add({ data: value }));
                setCriteria("");
                criteriaInputFieldRef.current?.blur();
              }
            }}
          />
          <Autocomplete
            disablePortal
            className="mb-6"
            options={GENAIs}
            inputValue={aiProduct}
            onInputChange={(e, newValue) => {
              if (e?.type !== "change") return;
              setAIs(newValue);
            }}
            getOptionLabel={(option) => option.name} // Adjust based on your object shape
            isOptionEqualToValue={(option, value) => option.id === value.id} // Optional but recommended
            renderInput={(params) => (
              <TextField
                {...params}
                inputRef={modelsInputFieldRef}
                label={t("autoCompleteModelsLabel")}
              />
            )}
            renderOption={(props, option) => {
              const { key, ...rest } = props;

              return (
                <li
                  key={key}
                  {...rest}
                  className="flex flex-col px-3 py-3 my-2 text-sm space-y-2 hover:underline cursor-pointer select-none"
                >
                  <span className="w-fit relative inline-flex items-center space-x-2">
                    <a
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-amber-700 hover:underline decoration-1"
                    >
                      {option.name}
                    </a>
                    <ExternalLink
                      size={15}
                      className="text-amber-700"
                      strokeWidth={1.5}
                    />
                  </span>
                  <p>{option.description[currentLang]}</p>
                </li>
              );
            }}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": { borderColor: "#f8ba6d" },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": { color: "#f8ba6d" },
              },
            }}
            onChange={(event, value) => {
              if (
                value &&
                !selectedModels.some((m: AIModelItemType) => m.id === value.id)
              ) {
                setAIs("");
                storeDispatcher(addModel({ data: value }));
                modelsInputFieldRef.current?.blur();
              }
            }}
          />
          <Box className="w-full relative">
            <Button
              variant="contained"
              type="button"
              disabled={
                isLoadingGlobalState ||
                selectedCriteria.length <= 0 ||
                selectedModels.length <= 0
              }
              className="w-full !bg-[#e38716] hover:!bg-[#e38716]/80 disabled:!bg-gray-200/20"
              onClick={() => setOpenConfirm(true)}
            >
              {isLoadingGlobalState == true ? (
                <Loader className="animate-spin" />
              ) : (
                t("comparisonFormButton")
              )}
            </Button>
            <Box className="text-sm opacity-80 font-medium text-center mt-5 space-x-2">
              <Trans
                i18nKey="comparisonFormFeedbackText"
                components={{
                  Link: (
                    <Link
                      color="warning"
                      className="cursor-pointer"
                      onClick={() => setFeedbackOpen(true)}
                    />
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
        <br />
        <br />
        <br />
        {comparism && (
          <section
            id="comparismReport"
            className="w-full h-fit my-5 flex flex-col justify-center items-start p-8 max-w-[1046px] mx-auto"
          >
            <h2

              className="font-bold text-2xl"
            >
              Report: {comparism.length}
            </h2>
            <br />
            <Box className="overflow-x-auto w-full mt-5">
              <table className="min-w-full border border-transparent Boxide-y Boxide-gray-200/30 table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">Id</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Title</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Body</th>
                  </tr>
                </thead>
                <tbody className="Boxide-y Boxide-gray-200/30">
                  {comparism.map((item) => (
                    <tr key={item?.id}>
                      <td className="px-4 py-2 text-lg">{item?.id}</td>
                      <td className="px-4 py-2 text-lg">{item?.title}</td>
                      <td className="px-4 py-2 text-lg">{item?.body}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={4}>
                      <Box className="w-full flex justify-end p-2">
                        <button
                          type="button"
                          onClick={handleClear}
                          className="cursor-pointer opacity-70 hover:opacity-100 flex space-x-1 justify-center items-center text-sm text-amber-600 border border-gray-200 py-1.5 px-2.5 rounded-full"
                        >
                          <span>Clear</span> <Ban size={18} />
                        </button>
                      </Box>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </Box>
          </section>
        )}
      </Box>
    </>
  );
};

export default CompareSection;