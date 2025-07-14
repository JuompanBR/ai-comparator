import { useState } from "react";
import { CompareAPI } from "../services";
import TagInput from "./TagInput";
import { AIModelItemType, ComparismCriteriaItem, ComparismResponseItem } from "../types";
import { Loader, Ban, ExternalLink } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, addModel, removeModel, setIsLoading } from "../stores/appStore";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { GENAIs, USERCRITERIA } from "../constands";

const CompareSection = () => {
  const selectedCriteria: ComparismCriteriaItem[] = useSelector(
    (state: any) => state.comparismCriteria.comparismCriteria
  );
  const isLoading: boolean = useSelector(
    (state: any) => state.isLoading.isLoading
  )
  const selectedModels = useSelector((state: any) => state.aiModels.aiModels);
  const storeDispatcher = useDispatch();

  const [tagInputs, enableAnimations] = useAutoAnimate();
  const [modelsInput, enableModelsAnimations] = useAutoAnimate();
  const [selectionsBox, enableSelectionsBoxAnimations] = useAutoAnimate();

  const [criteria, setCriteria] = useState<string>("");
  const [aiProduct, setAIs] = useState<string>("");
  const [comparism, setComparism] = useState<ComparismResponseItem>({});

  const handleClear = async () => {
    const response = confirm("Are you sure you want to clear ?");

    if (response == true) {
      setComparism({});
    }
    return;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const response = confirm("Do you confirm these selections ?");

    if (response == true) {
      storeDispatcher(setIsLoading({ data: true }));
      const fakeData: ComparismCriteriaItem[] = [
        {
          id: "1",
          data: "This is just test data",
        },
      ];

      try {
        // fetch using the mock server
        const result = await CompareAPI.compare(fakeData);
        setComparism(result[0]);

        // Scroll to the results
        setTimeout(() => {
          document
            .getElementById("comparismReport")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } catch (e) {
        alert("An error occured while getting the resource.");
      }

      storeDispatcher(setIsLoading({ data: false }));
    }
  };
  return (
    <>
      <div className="w-full max-w-5xl mt-6 px-4 space-y-4 relative mx-auto">
        <div
          ref={selectionsBox}
          className="w-full relative flex flex-wrap gap-y-5 justify-center items-start"
        >
          {selectedCriteria.length > 0 && (
            <div
              className={`w-full lg:w-1/2 relative block text-center ${selectedModels.length > 0 ? "lg:border-r" : ""} lg:pe-9 border-slate-200`}
            >
              <h2 className="font-normal text-lg text-slate-700 my-9">
                Set your Criteria
              </h2>
              <div
                ref={tagInputs}
                className="relative flex flex-wrap gap-4 justify-center items-center transition-all"
              >
                {selectedCriteria.map((tag: ComparismCriteriaItem) => (
                  <TagInput
                    id={tag.id}
                    key={tag.id}
                    onClickEvent={() => storeDispatcher(remove({ id: tag.id }))}
                  >
                    {tag.data}
                  </TagInput>
                ))}
              </div>
            </div>
          )}
          {selectedModels.length > 0 && (
            <div className="w-full lg:w-1/2 relative block text-center lg:ps-9">
              <h2 className="font-normal text-lg text-slate-700 my-9">
                Set your Models
              </h2>
              <div
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
              </div>
            </div>
          )}
        </div>
        <div
          className={`flex flex-col relative max-w-md w-full mx-auto ${selectedCriteria.length > 0 || selectedModels.length > 0 ? "mt-15" : "mt-12"}`}
        >
          <Autocomplete
            color="warning"
            disablePortal
            className="mb-5"
            inputValue={criteria}
            onInputChange={(e, newValue) => setCriteria(newValue)}
            options={USERCRITERIA}
            getOptionLabel={(option) => option.data}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
              <TextField {...params} label="Criteria, e.g. Price" />
            )}
            renderOption={(props, option) => {
              const { key, ...rest } = props;

              return (
                <li
                  key={key}
                  {...rest}
                  className="text-sm p-2 hover:bg-gray-200 cursor-pointer select-none"
                >
                  <p>{option.data}</p>
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
              if (value && !selectedCriteria.some((c: ComparismCriteriaItem) => c.id === value.id)) {
                setCriteria("");
                storeDispatcher(add({ data: value }));
              }
            }}
          />

          <Autocomplete
            className="mb-6"
            options={GENAIs}
            inputValue={aiProduct}
            onInputChange={(e, newValue) => setAIs(newValue)}
            getOptionLabel={(option) => option.name} // Adjust based on your object shape
            isOptionEqualToValue={(option, value) => option.id === value.id} // Optional but recommended
            renderInput={(params) => (
              <TextField {...params} label="AI, e.g. ChatGPT" />
            )}
            renderOption={(props, option) => {
              const { key, ...rest } = props;

              return (
                <li
                  key={key}
                  {...rest}
                  className="flex flex-col p-2 py-3 my-2 text-sm space-y-2 hover:bg-gray-200 cursor-pointer select-none"
                >
                  <span className="w-fit relative inline-flex items-center space-x-2">
                    <a href={option.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-700">{option.name}</a>
                    <ExternalLink size={15} className="text-amber-700" strokeWidth={1.5} />
                  </span>
                  <p>{option.description}</p>
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
              if (value && !selectedModels.some((m: AIModelItemType) => m.id === value.id)) {
                setAIs("");
                storeDispatcher(addModel({ data: value }));
              }
            }}
          />
          <div className="w-full relative">
            <Button
              variant="contained"
              type="button"
              disabled={
                isLoading ||
                selectedCriteria.length <= 0 ||
                selectedModels.length <= 0
              }
              className="w-full !bg-[#e38716] hover:!bg-[#e38716]/80 disabled:!bg-gray-200"
              onClick={handleSubmit}
            >
              {isLoading == true ? (
                <Loader className="animate-spin" />
              ) : (
                "Compare"
              )}
            </Button>
          </div>
        </div>
        <br />
        <br />
        <br />
        {comparism.id && (
          <section
            id="comparismResult"
            className="w-full h-fit my-5 flex flex-col justify-center items-start p-8 max-w-[1046px] mx-auto"
          >
            <h2
              id="comparismReport"
              className="font-bold text-2xl text-slate-700"
            >
              Report
            </h2>
            <br />
            <table className="min-w-full border border-gray-300 divide-y divide-gray-200 table-fixed">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Id
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Text
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-lg text-gray-800">
                    {comparism.id}
                  </td>
                  <td className="px-4 py-2 text-lg text-amber-700">
                    {comparism.text}
                  </td>
                </tr>
              </tbody>
              <tfoot className="relative">
                <div className="relative float-right p-2 w-full flex flex-row-reverse">
                  <button
                    type="button"
                    onClick={handleClear}
                    className="cursor-pointer opacity-70 hover:opacity-100 flex space-x-1 justify-center items-center text-sm text-amber-600 border border-gray-200 py-1.5 px-2.5 rounded-full"
                  >
                    <span>Clear</span> <Ban size={18} />
                  </button>
                </div>
              </tfoot>
            </table>
          </section>
        )}
      </div>
    </>
  );
};

export default CompareSection;
