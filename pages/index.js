import { Button, Paper, Stack, Typography } from "@mui/material";
import { FaDiscord } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { RiYoutubeFill, RiShareFill } from "react-icons/ri";
import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../utilities/db";
import { useRouter } from "next/router";

export default function Home() {
  // const history = useLiveQuery(() => db.history.toArray((x) => console.log(x)));
  const router = useRouter();

  return (
    <>
      <Stack
        direction="column" // {{ xs: "column", sm: "row" }}
        alignItems="center"
        minHeight={"300px"}
        justifyContent={"center"}
        spacing={2}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          Download Youtube Video's in Mp3 or Mp4 format.
        </Typography>
        <Button
          variant={"contained"}
          color={"secondary"}
          startIcon={<RiYoutubeFill />}
          sx={{
            maxWidth: "150px",
          }}
          fullWidth
          onClick={() => router.push("/youtube")}
        >
          Download
        </Button>
        {/* <Button
          variant={"contained"}
          color={"tarnary"}
          startIcon={<RiShareFill />}
          sx={{
            maxWidth: "150px",
          }}
          fullWidth
        >
          Share
        </Button> */}
        {/* <Paper>
          {history?.map((item) => (
            <Stack>
              <img src={item.url} />
              <Stack>
                <Typography>{item.title}</Typography>
                <Typography>{item.url}</Typography>
              </Stack>
            </Stack>
          ))}
        </Paper> */}
        {/* <Button
          variant={"contained"}
          color={"tarnary"}
          startIcon={<FaDiscord />}
        >
          Discord
        </Button> */}
      </Stack>
    </>
  );
}
