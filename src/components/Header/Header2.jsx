// @ts-nocheck
import { Box, Container, Stack } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { FavoriteBorder, ShoppingCartOutlined } from "@mui/icons-material";

// import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingcart } from "../../context/SoppingCartContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  border: "1px solid rgba(193, 193, 193, 1)",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  minWidth: "200px",
  width: "100%",
  flexGrow: 1,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  color: "rgba(193, 193, 193, 1)",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// eslint-disable-next-line react/prop-types
export default function Header2({ search, setSearch }) {
  const navigate = useNavigate();
  const { cartQuantity, LoveQuantity, userDetails } = useShoppingcart();


  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      // console.log("User logged out successfully!");
      toast.success("User logged out Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{ "&:hover": { background: "none" } }}
          onClick={() => navigate("/favourite")}
        >
          <Badge badgeContent={LoveQuantity} color="primary">
            <FavoriteBorder sx={{ color: "rgba(124, 48, 207, 1)" }} />
          </Badge>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              fontFamily: "var(--fontItem)",
              ml: 1,
              color: "rgba(126, 126, 126, 1)",
            }}
            variant="body1"
            color="initial"
          >
            Wishlist
          </Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{ "&:hover": { background: "none" } }}
          onClick={() => navigate("/cart")}
        >
          <Badge badgeContent={cartQuantity} color="primary">
            <ShoppingCartOutlined sx={{ color: "rgba(124, 48, 207, 1)" }} />
          </Badge>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              fontFamily: "var(--fontItem)",
              ml: 1,
              color: "rgba(126, 126, 126, 1)",
            }}
            variant="body1"
            color="initial"
          >
            Cart
          </Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <button
          onClick={handleLogout}
          className="btn1"
          style={{
            fontFamily: "var(--fontQuicksand)",
            fontSize: "18px",
            fontWeight: "600",
            width: "110px",
            height: "40px",
            background: "none",
            color: "rgba(79, 133, 221, 1)",
            border: "1px solid rgba(79, 133, 221, 1)",
            borderRadius: "50px",
            cursor: "pointer",
            lineHeight: "16px",
          }}
        >
          Log Out
        </button>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      {userDetails ? (
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            top: "0px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            zIndex: "1000",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: { xs: 0, sm: 1 },
              gap: { xs: 5, sm: 10, md: "outo" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "600",
                fontSize: { xs: "15px", sm: "18px", md: "18px", lg: "20px" },
                color: "rgba(126, 126, 126, 1)",
              }}
              variant="body1"
            >
              100% Secure delivery without contacting the courier
            </Typography>

            <Typography
              sx={{
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "500",
                fontSize: { xs: "15px", sm: "18px", md: "18px", lg: "20px" },
                lineHeight: "30px",
                color: "rgba(126, 126, 126, 1)",
              }}
              variant="body1"
            >
              Need help? Call Us:
              <span
                style={{
                  fontWeight: "600",
                  color: "rgba(79, 133, 221, 1)",
                  cursor: "pointer",
                }}
              >
                + 1800 900
              </span>
            </Typography>
          </Container>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              color: "black",
              px: 5,
              boxShadow: "none !important",
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography
                  className="logo"
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "700",
                    fontSize: "35px",
                    color: "rgba(128, 41, 205, 1)",
                    mr: { xs: 3, md: 1, lg: 10 },
                    mb: 1,
                  }}
                  variant="h6"
                >
                  Logo
                </Typography>
              </Link>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Search>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  ml: { md: 1, lg: 10 },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  sx={{ "&:hover": { background: "none" } }}
                  onClick={() => navigate("/favourite")}
                >
                  <Badge badgeContent={LoveQuantity} color="primary">
                    <FavoriteBorder sx={{ color: "rgba(124, 48, 207, 1)" }} />
                  </Badge>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      fontFamily: "var(--fontItem)",
                      ml: 1,
                      color: "rgba(126, 126, 126, 1)",
                    }}
                    variant="body1"
                    color="initial"
                  >
                    Wishlist
                  </Typography>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  sx={{ "&:hover": { background: "none" } }}
                  onClick={() => navigate("/cart")}
                >
                  <Badge badgeContent={cartQuantity} color="primary">
                    <ShoppingCartOutlined
                      sx={{ color: "rgba(124, 48, 207, 1)" }}
                    />
                  </Badge>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      fontFamily: "var(--fontItem)",
                      ml: 1,
                      color: "rgba(126, 126, 126, 1)",
                    }}
                    variant="body1"
                    color="initial"
                  >
                    Cart
                  </Typography>
                </IconButton>

                <Stack
                  sx={{ ml: { sm: 2, md: 2, lg: 5 } }}
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"row"}
                  gap={2}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--fontItem)",
                      fontWeight: "500",
                      fontSize: "20px",
                      width: "120px",
                      overflow: "hidden",
                      color: "rgba(126, 126, 126, 1)",
                      whiteSpace: "normal",
                      textOverflow: "ellipsis",
                      cursor: "pointer",
                    }}
                    variant="body1"
                  >
                    {userDetails.email}
                  </Typography>

                  <button
                    onClick={handleLogout}
                    className="btn1"
                    style={{
                      fontFamily: "var(--fontQuicksand)",
                      fontSize: "16px",
                      fontWeight: "600",
                      width: "110px",
                      height: "40px",
                      background: "none",
                      color: "rgba(79, 133, 221, 1)",
                      border: "1px solid rgba(79, 133, 221, 1)",
                      borderRadius: "50px",
                      cursor: "pointer",
                      lineHeight: "16px",
                    }}
                  >
                    Log Out
                  </button>
                </Stack>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              width: { xs: "77%", sm: "80%", md: "85%", lg: "92%" },
              border: ".5px solid rgb(227, 227, 227)",
            }}
          />
          {renderMobileMenu}
        </Box>
      ) : (
        <Box>
          <h1>...looding</h1>
        </Box>
      )}
    </>
  );
}
