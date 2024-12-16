import {
  Box,
  Checkbox,
  IconButton,
  Menu,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Segment } from "@mui/icons-material";
import Slider from "@mui/material/Slider";
import StoreItems from "../../data/StoreItems.json";
import CartItem from "../../components/CartItem/CartItem";

function valuetext(value) {
  return `${value}`;
}

// eslint-disable-next-line react/prop-types
export default function OurCategory({search}) {
  //pagination القيمة المتفلتره الاخيره الي هترجع في ال
  const [filterData, setFilterdata] = useState(StoreItems);

  // filter code of catetecory
  const allCategory = StoreItems;
  const reelsCatecory = StoreItems.filter(
    (category) => category.category === "reels"
  );
  const rodsCatecory = StoreItems.filter(
    (category) => category.category === "rods"
  );
  const luresCatecory = StoreItems.filter(
    (category) => category.category === "lures"
  );
  const linesCatecory = StoreItems.filter(
    (category) => category.category === "lines"
  );
  const hooksCatecory = StoreItems.filter(
    (category) => category.category === "hooks"
  );
  const [categoryFilter, setCategoryFilter] = useState(StoreItems);

  const handleAlignment = (event, newCatecory) => {
    if (newCatecory !== null) {
      setCategoryFilter(newCatecory);
    }
  };

  //  filter code of slider
  const [sliderValue, setValue] = useState([300, 1000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // filter code of checkBox for size
  const [selectedBrand, setSelectedBrand] = useState([]);
  const handleCheckedBox = (brand) => {
    if (selectedBrand.includes(brand)) {
      setSelectedBrand(selectedBrand.filter((c) => c !== brand));
    } else {
      setSelectedBrand([...selectedBrand, brand]);
    }
  };

  // دي بترجع اخر قيمة بناءا علي اختيار الفلتر
  // بمعني اني بربط جميع الفلاتر ببعض علشان يرجعولي قيمة واحده
  useEffect(() => {
    let result = categoryFilter;
    if (selectedBrand.length > 0) {
      result = result.filter((item) => selectedBrand.includes(item.brand));
    }
    result = result.filter(
      (item) => item.price >= sliderValue[0] && item.price <= sliderValue[1]
    );
    setFilterdata(result);
  }, [categoryFilter, selectedBrand, sliderValue]);

  //   code of pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const handlePagination = (event, value) => {
    setCurrentPage(value);
  };
  const currentItems = filterData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // search to filter
  const filterItem = currentItems.filter((item) =>
    // eslint-disable-next-line react/prop-types
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // ده الي بيدبل الالوان بين ال category
  const buttons = document.querySelectorAll(".myButton");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  //   toggle buttom in small size
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
      <ToggleButtonGroup
        value={categoryFilter}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          overflow: "hidden",
          gap: 1,
        }}
      >
        <ToggleButton
          sx={{
            width: "103px !important",
            height: "57px !important",
            backgroundColor: "rgba(99, 96, 215, 1)",
          }}
          value={allCategory}
          className="myButton myButton1"
        >
          <Typography
            sx={{ color: "rgba(255, 255, 255, 1) !important" }}
            className="ourButton"
            variant="body1"
          >
            All
          </Typography>
        </ToggleButton>
        <ToggleButton className="myButton btnHover" value={reelsCatecory}>
          <Typography className="ourButton" variant="body1">
            Reels
          </Typography>
        </ToggleButton>
        <ToggleButton className="myButton btnHover" value={rodsCatecory}>
          <Typography className="ourButton" variant="body1">
            Rods
          </Typography>
        </ToggleButton>
        <ToggleButton className="myButton btnHover" value={luresCatecory}>
          <Typography className="ourButton" variant="body1">
            Lures
          </Typography>
        </ToggleButton>
        <ToggleButton className="myButton btnHover" value={linesCatecory}>
          <Typography className="ourButton" variant="body1">
            Lines
          </Typography>
        </ToggleButton>
        <ToggleButton className="myButton btnHover" value={hooksCatecory}>
          <Typography className="ourButton" variant="body1">
            Hooks
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Menu>
  );

  return (
    <Box width={"100%"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
        width={"100%"}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--fontQuicksand)",
              fontWeight: "700",
              fontSize: { xs: "33px", sm: "38px" },
              lineHeight: "47px",
              color: "rgba(0, 0, 0, 1)",
            }}
            variant="body1"
          >
            Our Category
          </Typography>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Segment sx={{ fontSize: "27px", fontWeight: "bold" }} />
            </IconButton>
          </Box>
        </Box>

        <Stack mt={3} sx={{ display: { xs: "none", md: "flex" } }}>
          <ToggleButtonGroup
            value={categoryFilter}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              overflow: "hidden",
            }}
          >
            <ToggleButton
              sx={{
                width: "103px !important",
                height: "57px !important",
                backgroundColor: "rgba(99, 96, 215, 1)",
              }}
              value={allCategory}
              className="myButton myButton1"
            >
              <Typography
                sx={{ color: "rgba(255, 255, 255, 1) !important" }}
                className="ourButton"
                variant="body1"
              >
                All
              </Typography>
            </ToggleButton>
            <ToggleButton className="myButton btnHover" value={reelsCatecory}>
              <Typography className="ourButton" variant="body1">
                Reels
              </Typography>
            </ToggleButton>
            <ToggleButton className="myButton btnHover" value={rodsCatecory}>
              <Typography className="ourButton" variant="body1">
                Rods
              </Typography>
            </ToggleButton>
            <ToggleButton className="myButton btnHover" value={luresCatecory}>
              <Typography className="ourButton" variant="body1">
                Lures
              </Typography>
            </ToggleButton>
            <ToggleButton className="myButton btnHover" value={linesCatecory}>
              <Typography className="ourButton" variant="body1">
                Lines
              </Typography>
            </ToggleButton>
            <ToggleButton className="myButton btnHover" value={hooksCatecory}>
              <Typography className="ourButton" variant="body1">
                Hooks
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
            mt: 6,
            gap: 3,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* section for filter by */}
          <Box
            sx={{
              width: "300px",
              borderRadius: "30px",
              border: "1px solid rgba(159, 159, 159, 1)",
              pt: 3,
              px: 2,
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              height: "470px",
              position: { xs: "static", md: "sticky" },
              top: { xs: "0px", md: "110px" },
            }}
          >
            <Box width={"100%"}>
              <Typography
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "700",
                  fontSize: "30px",
                  lineHeight: "40px",
                  color: "rgba(0, 0, 0, 1)",
                  mb: 1,
                }}
                variant="body1"
              >
                Filter by:
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                border: "1px solid rgba(188, 188, 188, 1)",
                mb: 4,
              }}
            />

            <Box width={"100%"}>
              <Typography
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "rgba(114, 114, 114, 1)",
                }}
                variant="body1"
              >
                Price
              </Typography>
              <Box sx={{ width: "95%" }}>
                <Slider
                  sx={{ color: "rgba(99, 96, 215, 1)", my: 1 }}
                  min={100}
                  max={1500}
                  getAriaLabel={() => "price"}
                  value={sliderValue}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "17px",
                    lineHeight: "24px",
                    fontFamily: "var(--fontItem)",
                  }}
                  variant="body1"
                >
                  From:{" "}
                  <span
                    style={{ fontWeight: "800", color: "rgba(99, 96, 215, 1)" }}
                  >
                    {sliderValue[0]} EGP
                  </span>
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "17px",
                    lineHeight: "24px",
                    fontFamily: "var(--fontItem)",
                  }}
                  variant="body1"
                >
                  To:{" "}
                  <span
                    style={{ fontWeight: "800", color: "rgba(99, 96, 215, 1)" }}
                  >
                    {sliderValue[1]} EGP
                  </span>
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 2,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "rgba(114, 114, 114, 1)",
                  mb: 1,
                }}
                variant="body1"
              >
                Size
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "35px" }}
              >
                <Checkbox
                  sx={{ ml: -1.5, color: "rgba(189, 189, 189, 1)" }}
                  value={"small"}
                  onChange={() => handleCheckedBox("small")}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Typography
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                  variant="body1"
                >
                  Small
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", height: "35px" }}
              >
                <Checkbox
                  sx={{ ml: -1.5, color: "rgba(189, 189, 189, 1)" }}
                  value={"medium"}
                  onChange={() => handleCheckedBox("medium")}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Typography
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                  variant="body1"
                >
                  Medium
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", height: "35px" }}
              >
                <Checkbox
                  sx={{ ml: -1.5, color: "rgba(189, 189, 189, 1)" }}
                  value={"large"}
                  onChange={() => handleCheckedBox("large")}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Typography
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                  variant="body1"
                >
                  Large
                </Typography>
              </Box>
            </Box>

            <Box sx={{ width: "130px", height: "140px", ml: "150px", mt: -4 }}>
              <img
                src="\image\ph1.png"
                alt="photo"
                width={"100%"}
                height={"100%"}
                draggable="false"
              />
            </Box>
          </Box>
          {/* section of item */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {filterItem.map((item) => (
              // @ts-ignore
              <CartItem {...item} key={item.id} />
            ))}
          </Box>
        </Box>

        {renderMobileMenu}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Pagination
          size="large"
          color="primary"
          count={totalPages}
          variant="text"
          shape="rounded"
          page={currentPage}
          onChange={handlePagination}
        />
      </Box>
    </Box>
  );
}
