import { Button, Stack } from "@mui/material";
import { FaDiscord } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Stack
        direction= "column" // {{ xs: "column", sm: "row" }}
        alignItems="center"
        minHeight={"300px"}
        justifyContent={"center"}
        spacing={2}
      >
        <Button
          variant={"contained"}
          color={"primary"}
          sx={{
            borderRadius: "100px",
          }}
        >
          sign in
        </Button>
        <Button
          variant={"contained"}
          color={"secondary"}
          startIcon={<AiFillLike />}
        >
          Vote
        </Button>
        <Button
          variant={"contained"}
          color={"tarnary"}
          startIcon={<FaDiscord />}
        >
          Discord
        </Button>
      </Stack>
    </>
  );
}
