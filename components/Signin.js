import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import React from "react";
import CInput from "./CInput";

const Signin = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "80vw",
          maxWidth: "400px",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "25px",
          }}
        />
        <Typography variant={"button"}>Sign In</Typography>
        <IconButton size={"small"} color={"primary"} onClick={handleClose}>
          <MdClose />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          "& > *": {
            my: 0.5,
          },
        }}
      >
        <CInput
          fullWidth
          placeholder="EMAIL"
          sx={{
            mt: "20px",
          }}
        />
        
        <Button
          fullWidth
          variant={"contained"}
          sx={{ borderRadius: "70px", my: 0.5, mt: 1 }}
          size={"medium"}
        >
          Sign In
        </Button>
        
      </DialogContent>
    </Dialog>
  );
};

export default Signin;
