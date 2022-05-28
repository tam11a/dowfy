import {
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import React from "react";

const ChangePassword = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "80vw",
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
    </Dialog>
  );
};

export default ChangePassword;
