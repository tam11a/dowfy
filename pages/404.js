import { Box, Button, Stack, Typography } from "@mui/material";
import { AiOutlineLink } from "react-icons/ai";

// no page found
export default function noPage() {
  return (
    <Stack
      direction={"column"}
      alignItems="center"
      minHeight={"calc(100vh - 70px)"}
      justifyContent={"center"}
      spacing={2}
    >
      <Box sx={{ "& img": { width: "70vw", maxWidth: "450px" }, mb: 3 }}>
        <img src={"/404.svg"} alt={"404"} />
      </Box>
      {/* <Button color={"secondary"} startIcon={<AiOutlineLink />}>
        Go To Home Page
      </Button> */}
    </Stack>
  );
}
