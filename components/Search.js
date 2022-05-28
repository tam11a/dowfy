import React from "react";
import { IconButton, InputBase } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import handleSubmit from "../utilities/handleSubmit";

const Search = ({onSubmit, sx, ...others}) => {
  const [id, setID] = React.useState("");

  React.useEffect(() => {
    setID(Date.now());
  }, []);
  return (
    <form
      // id={"search-form-" + id}
      onSubmit={(e) => {
        const data = handleSubmit(e);
        if(typeof onSubmit === 'function'){
          onSubmit(e, data);
       }  
      }}
    >
      <InputBase
        sx={{
          background: "#171d23",
          borderRadius: "37px",
          color: "background.contrastText",
          fontWeight: "light",
          p: "5px 10px",
          paddingLeft: "15px",
          fontSize: "0.8rem",
          minWidth: { sm: "250px", md: "300px" },
          ...sx
        }}
        placeholder={"SEARCH.."}
        name={"search"}
        endAdornment={
          <IconButton type="submit" size={"small"} color={"white"}>
            <FiSearch />
          </IconButton>
        }
        {...others}
      />
    </form>
  );
};

export default Search;
