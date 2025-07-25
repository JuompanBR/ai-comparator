import { Box } from "@mui/material";

const CustomDivider: React.FC = () => {
  return (
    <>
      <Box
        id="shapeRegion"
        className="w-[150%] -ms-[25%] lg:w-[80%] h-[100px] lg:mx-auto block rounded-t-[1200%] border-t border-amber-400"
        style={{
          boxShadow: "0 -20px 30px -10px rgba(251, 191, 36, 0.2)",
        }}
      ></Box>
    </>
  );
};
export default CustomDivider;