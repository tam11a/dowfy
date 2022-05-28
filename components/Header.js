import {
  AppBar,
  Box,
  Button,
  Divider,
  Fab,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiMenuAltRight } from "react-icons/bi";
import React from "react";
import Signin from "./Signin";
import {
  RiFolderHistoryLine,
  RiYoutubeFill,
  RiFacebookFill,
} from "react-icons/ri";
import { BiHomeSmile } from "react-icons/bi";

const Header = () => {
  const router = useRouter();
  const [drawer, setDrawer] = React.useState(false);
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const handleSignIn = () => {
    setOpenSignIn(!openSignIn);
  };

  const actions = [
    { icon: <RiYoutubeFill />, name: "YouTube", to: "/youtube" },
    { icon: <BiHomeSmile />, name: "Home", to: "/" },
    // { icon: <RiFacebookFill />, name: 'Facebook' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ pt: 0.5, px: { xs: 1, md: 2 }, top: "auto", bottom: 0 }}
        color={"navbar"}
      >
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            maxWidth: "700px",
            mx: "auto",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box />
          <SpeedDial
            ariaLabel="SpeedDial"
            sx={{
              position: "absolute",
              bottom: "60%",
              right: "50%",
              transform: "translateX(50%)",
            }}
            icon={
              <Image
                src={"/long-icon.svg"}
                alt={"minecraft-serverlists"}
                height={"30px"}
                width={"30px"}
              />
            }
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => router.push(action.to)}
              />
            ))}
          </SpeedDial>

          <IconButton
            sx={{
              mx: { xs: 0.5, sm: 1 },
            }}
            onClick={() => setDrawer(!drawer)}
            color={"white"}
          >
            <BiMenuAltRight />
          </IconButton>
          <SwipeableDrawer
            open={drawer}
            onOpen={() => setDrawer(!drawer)}
            onClose={() => setDrawer(!drawer)}
            anchor={"right"}
            PaperProps={{
              sx: {
                width: "80vw",
                maxWidth: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              },
              onClick: () => setDrawer(!drawer),
            }}
          >
            <List>
              {/* <ListItemButton
                  sx={{
                    color: "white.main",
                    mt: 5,
                    px: 4
                  }}
                  onClick={() => router.push("/history")}
                >
                  <ListItemIcon sx={{
                    color: "white.main",
                  }}>
                    <RiFolderHistoryLine />
                  </ListItemIcon>
                  <ListItemText primary={"HISTORY"} />
                </ListItemButton>
                <Divider />
                <ListItem>
                  <Button
                    variant={"contained"}
                    color={"primary"}
                    sx={{
                      borderRadius: "100px",
                      mt: 3,
                    }}
                    fullWidth
                    onClick={handleSignIn}
                  >
                    sign in
                  </Button>
                </ListItem> */}
            </List>
            <Typography
              variant="caption"
              sx={{
                letterSpacing: "3px",
                textAlign: "center",
                mt: 3,
                mb: 6,
                "& a": {
                  textDecoration: "none",
                  color: "primary.main",
                },
              }}
            >
              FROM <a href={"#"}>TAM11A</a>
            </Typography>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
      <Signin open={openSignIn} handleClose={handleSignIn} />
    </>
  );
};

export default Header;
