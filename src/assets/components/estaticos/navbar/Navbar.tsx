import {
  AppBar,
  Button,
  Grid,
  Menu,
  MenuItem,
  Popover,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../../store/tokens/tokensReducer";
import { addToken } from "../../../../store/tokens/actions";
import React from "react";
import PopupState, {
  bindTrigger,
  bindMenu,
  bindPopover,
} from "material-ui-popup-state";
import { toast } from "react-toastify";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar(): JSX.Element {
  const navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.warn('Usuário Deslogado!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    navigate("/login");
  }

 

  let navbarComponent;

  if (token !== "") {
    navbarComponent = (
      <AppBar className="navbarContainer" >
        <Toolbar className="navbar">
          <Grid
            container
            className="navbarContainerGrid"
            alignItems="center"
            justifyContent="center"
            direction="row"
          >
            <Grid item xs={5} md={5}>
              <Box style={{ cursor: "pointer" }}>
                <img
                  className="IJlogo"
                  src="https://media.discordapp.net/attachments/1094735633810997421/1113462405985480824/logoIncluiJobs2_1atual.png?width=449&height=116"
                  alt="Logo da IncluiJobs"
                />
              </Box>
            </Grid>

            <Grid item xs={2} md={7} className="menuHamburguerContainer">
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <div className="menuHamburguer">
                    <React.Fragment>
                      <Button {...bindTrigger(popupState)}>
                        <MenuIcon />
                      </Button>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <Box className="navbarLinkBox">
                          <Link
                            className="navbarLink"
                            to={"/home"}
                            style={{
                              textDecoration: "none",
                              color: "#000000",
                            }}
                          >
                            <MenuItem onClick={popupState.close}>Home</MenuItem>
                          </Link>
                        </Box>
                        <Box className="navbarLinkBox">
                          <Link className="navbarLink" to={"/postagens"}>
                            <MenuItem onClick={popupState.close}>
                              Postagens
                            </MenuItem>
                          </Link>
                        </Box>
                        <Box className="navbarLinkBox">
                          <Link className="navbarLink" to={"/temas"}>
                            <MenuItem onClick={popupState.close}>
                              Temas
                            </MenuItem>
                          </Link>
                        </Box>
                        <Box className="navbarLinkBox">
                          <Link className="navbarLink" to={"/cadastrarTemas"}>
                            <MenuItem onClick={popupState.close}>
                              Cad. Tema
                            </MenuItem>
                          </Link>
                        </Box>
                        <Box className="navbarLinkBox">
                          <Link className="navbarLink" to={"/sobre"}>
                            <MenuItem onClick={popupState.close}>
                              Sobre
                            </MenuItem>
                          </Link>
                        </Box>
                        <Box className="navbarLinkBox">
                          <Link
                            className="navbarLink"
                            to={"/perfil"}
                            style={{
                              textDecoration: "none",
                              color: "#000000",
                            }}
                          >
                            <MenuItem onClick={popupState.close}>
                              Perfil
                            </MenuItem>
                          </Link>
                        </Box>
                        <Box className="navbarLinkBox">
                          <Link
                            className="navbarLink"
                            to={"/login"}
                            onClick={goLogout}
                          >
                            <MenuItem
                              className="logoutLink navbarLinks"
                              onClick={popupState.close}
                            >
                              Sair
                            </MenuItem>
                          </Link>
                        </Box>
                      </Popover>
                    </React.Fragment>
                  </div>
                )}
              </PopupState>
            </Grid>

            <Grid item xs={7} className="navbarLinksContainer">
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Box className="navbarLinks">
                  <Typography variant="h6" color="inherit">
                    <Link to={"/home"} className="navbarLink">
                      Home
                    </Link>
                  </Typography>
                </Box>
                <Box className="navbarLinks">
                  <Typography variant="h6" color="inherit">
                    <Link to={"/postagens"} className="navbarLink">
                      Postagens
                    </Link>
                  </Typography>
                </Box>
                <Box className="navbarLinks">
                  <Typography variant="h6" color="inherit">
                    <Link to={"/temas"} className="navbarLink">
                      Temas
                    </Link>
                  </Typography>
                </Box>
                <Link
                  to="/cadastrarTemas"
                  className="navbarLinks text-decorator-none"
                >
                  <Box
                    mx={1}
                    className="hover cursor text-decorator-none"
                    color="black"
                  >
                    <Typography variant="h6" color="inherit">
                      Cadastrar tema
                    </Typography>
                  </Box>
                </Link>
                <Box className="navbarLinks" borderRight={"none"}>
                  <Typography variant="h6" color="inherit">
                    <Link to={"/sobre"} className="navbarLink">
                      Sobre
                    </Link>
                  </Typography>
                </Box>

                <Box marginLeft={5} className="logoutLink navbarLinks">
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <Button {...bindTrigger(popupState)}>Conta</Button>

                        <Menu {...bindMenu(popupState)}>
                          <Link
                            to={"/perfil"}
                            style={{
                              textDecoration: "none",
                              color: "#000000",
                            }}
                          >
                            <MenuItem onClick={popupState.close}>
                              Perfil
                            </MenuItem>
                          </Link>
                          {/*<MenuItem onClick={popupState.close}>
                              Link adicional
                      </MenuItem>*/}
                          <Link
                            to={"/login"}
                            className="navbarLink"
                            onClick={goLogout}
                          >
                            <MenuItem
                              className="logoutLink navbarLinks"
                              onClick={popupState.close}
                            >
                              Sair
                            </MenuItem>
                          </Link>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;


