import { Box } from "@mui/material";

const Loader: React.FC = () => {
    return (
        <>
            <Box className="container-outer">
                <Box className="style-scope community-question-set x-scope paper-spinner-0">
                    <Box className="active loaderContainer style-scope paper-spinner">
                        <Box className="spinner-layer layer-1 style-scope paper-spinner">
                            <Box className="circle-clipper left style-scope paper-spinner"></Box>
                            <Box className="circle-clipper right style-scope paper-spinner"></Box>
                        </Box>
                        <Box className="spinner-layer layer-2 style-scope paper-spinner">
                            <Box className="circle-clipper left style-scope paper-spinner"></Box>
                            <Box className="circle-clipper right style-scope paper-spinner"></Box>
                        </Box>
                        <Box className="spinner-layer layer-3 style-scope paper-spinner">
                            <Box className="circle-clipper left style-scope paper-spinner"></Box>
                            <Box className="circle-clipper right style-scope paper-spinner"></Box>
                        </Box>
                        <Box className="spinner-layer layer-4 style-scope paper-spinner">
                            <Box className="circle-clipper left style-scope paper-spinner"></Box>
                            <Box className="circle-clipper right style-scope paper-spinner"></Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
};

export default Loader;