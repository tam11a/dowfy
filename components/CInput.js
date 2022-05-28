import { styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";

const CInput = styled(InputBase)(({ theme }) => ({
  // border: "1.5px solid " + theme.palette.primary.light,
  background: "#ffffff10",
  borderRadius: "100px",
  padding: "7px 20px",
  fontSize: "0.9rem",
  // letterSpacing: "1px",
  fontWeight: "300",
}));

export default CInput;
