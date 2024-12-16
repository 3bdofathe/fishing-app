import "./Home1.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import OurCategory from "../../components/OurCategory/OurCategory";
import { useShoppingcart } from "../../context/SoppingCartContext";

export default function Home1() {
  const navigate = useNavigate();

  // @ts-ignore
  const { search , userDetails} = useShoppingcart();


  return (
    <div style={{ width: "100%" }}>
      {/* section of header */}
      <Box
        sx={{
          height: { sm: "140vh", md: "100vh", xs: "165vh" },
          width: "100%",
          position: "relative",
        }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <img
          src="\image\bg.png"
          alt="photo"
          width={"100%"}
          height={"100%"}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, rgb(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          }}
        ></div>

        <Box sx={{ width: "80%", position: "absolute", top: "140px" }}>
          <Box sx={{ width: { xs: "400px", sm: "500px", md: "768px" } }}>
            <Typography
              sx={{
                mt: { xs: 7, sm: 5, md: 0 },
                fontFamily: "var(--fontItem)",
                fontWeight: "400",
                fontSize: { xs: "80px", sm: "90px", md: "100px" },
                lineHeight: { xs: "70px", sm: "80px", md: "90px" },
                color: "rgba(244, 240, 244, 1)",
              }}
              variant="body1"
            >
              Fishing Equipment
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--fontItem)",
                fontWeight: "400",
                fontSize: "27px",
                lineHeight: "35px",
                color: "rgba(255, 255, 255, 0.66)",
                marginTop: "20px",
                textTransform: "capitalize",
              }}
              variant="body1"
            >
              lt&apos;s easy to imagine what life might be like when extraneous,
              terrifying sounds burst into it.
            </Typography>

            {userDetails ? (
              <Box mt={10} />
            ) : (
              <Button
                onClick={() => navigate("/login")}
                sx={{
                  width: { xs: "240px", sm: "300px", md: "350px" },
                  height: { xs: "60px", sm: "70px" },
                  borderRadius: "50px",
                  border: "2px solid rgba(79, 133, 221, 1)",
                  background: "none",
                  marginTop: "25px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: ".5s",
                  "&:hover": { backgroundColor: "rgba(79, 133, 221, 0.25)" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "400",
                    fontSize: { xs: "16px", sm: "18px", md: "22px" },
                    lineHeight: "27.5px",
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 1)",
                    ml: { xs: 1, sm: 2, md: 4 },
                  }}
                  variant="body1"
                >
                  Join Us To Buy
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "rgba(79, 133, 221, 0.25)",
                    height: "100%",
                    width: "60px",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ShoppingCartOutlined
                    sx={{
                      fontSize: { xs: "25px", sm: "27px", md: "30px" },
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  />
                </Box>
              </Button>
            )}
          </Box>

          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 4,
              flexWrap: "wrap",
            }}
            flexDirection={"row"}
            gap={3}
          >
            <Box
              sx={{
                width: { md: "30%", lg: "25%", sm: "45%", xs: "85%" },
                height: "200px",
                borderRadius: "25px",
                position: "relative",
                borderBottom: "3px solid rgba(79, 133, 221, 1)",
                cursor: "pointer",
                transition: ".5s",
                "&:hover": { scale: "1.05", rotate: "1deg" },
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.88))",
                  position: "absolute",
                  top: "0px",
                  zIndex: "2",
                  borderRadius: "25px",
                }}
              ></div>
              <img
                src="\image\img1.png"
                alt="photo"
                draggable="false"
                width={"100%"}
                height={"100%"}
                style={{
                  position: "absolute",
                  top: "0px",
                  borderRadius: "25px",
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "130px",
                  left: "20px",
                  width: "190px",
                  height: "55px",
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "700",
                  fontSize: "22.5px",
                  lineHeight: "27.5px",
                  color: "rgba(255, 255, 255, 1)",
                  zIndex: "3",
                }}
                variant="body1"
              >
                Amazing Fishing Equipment
              </Typography>
            </Box>

            <Box
              sx={{
                width: { md: "30%", lg: "25%", sm: "45%", xs: "85%" },
                height: "200px",
                borderRadius: "25px",
                position: "relative",
                cursor: "pointer",
                transition: ".5s",
                "&:hover": { scale: "1.05", rotate: "1deg" },
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.88))",
                  position: "absolute",
                  top: "0px",
                  zIndex: "2",
                  borderRadius: "25px",
                }}
              ></div>
              <img
                src="\image\img2.png"
                alt="photo"
                draggable="false"
                width={"100%"}
                height={"100%"}
                style={{
                  position: "absolute",
                  top: "0px",
                  borderRadius: "25px",
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "130px",
                  left: "20px",
                  width: "190px",
                  height: "55px",
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "700",
                  fontSize: "22.5px",
                  lineHeight: "27.5px",
                  color: "rgba(255, 255, 255, 1)",
                  zIndex: "3",
                }}
                variant="body1"
              >
                The Best Fishing Reels
              </Typography>
            </Box>

            <Box
              sx={{
                width: { md: "30%", lg: "25%", sm: "45%", xs: "85%" },
                height: "200px",
                borderRadius: "25px",
                position: "relative",
                cursor: "pointer",
                transition: ".5s",
                "&:hover": { scale: "1.05", rotate: "1deg" },
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.88))",
                  position: "absolute",
                  top: "0px",
                  zIndex: "2",
                  borderRadius: "25px",
                }}
              ></div>
              <img
                src="\image\img3.png"
                alt="photo"
                draggable="false"
                width={"100%"}
                height={"100%"}
                style={{
                  position: "absolute",
                  top: "0px",
                  borderRadius: "25px",
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "130px",
                  left: "20px",
                  width: "190px",
                  height: "55px",
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "700",
                  fontSize: "22.5px",
                  lineHeight: "27.5px",
                  color: "rgba(255, 255, 255, 1)",
                  zIndex: "3",
                }}
                variant="body1"
              >
                Aowsome Fishing Rods
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* main of the home */}
      <Box
        sx={{
          mt: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* First Section */}
        <Box
          sx={{
            width: { xs: "90%", sm: "90%", md: "85%", lg: "85%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "50px",
              alignItems: "center",
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
              <Typography
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "500",
                  fontSize: { xs: "18px", sm: "20px" },
                  lineHeight: "36px",
                  color: "rgba(7, 7, 7, 1)",
                  mb: { xs: 2, sm: 3, lg: 3, xl: 8 },
                }}
                variant="body1"
              >
                Fishing may have started out with nothing more than nets,
                spears, or a line tied to a stick, but today it&apos;s a complex
                industry that millions of people consider their passion.
                Specialized equipment is available for fishing in all types of
                aquatic environments and targeting specific fish.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "500",
                  fontSize: { xs: "18px", sm: "20px" },
                  lineHeight: "36px",
                  color: "rgba(7, 7, 7, 1)",
                }}
                variant="body1"
              >
                There&apos;s a huge variety of products you can choose to buy,
                and it&apos;s up to you whether you decide to focus on a few
                particular things or to sell everything an aspiring fishing
                champion needs. Each entry on the list below is representative
                of dozens to hundreds of products, covering different brands and
                manufacturers, different purposes.
              </Typography>
            </Box>
            <Box sx={{ width: { xs: "70%", sm: "65%", md: "60%", lg: "40%" } }}>
              <img
                src="\image\Mask group.png"
                alt="photo"
                width={"100%"}
                height={"outo"}
                draggable="false"
              />
            </Box>
          </Box>

          <Box
            sx={{
              mt: 8,
              width: "80%",
              display: "flex",
              flexDirection: "column",
              mb: 4,
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "700",
                fontSize: { xs: "25px", sm: "27px", md: "33px" },
                lineHeight: "50px",
                textAlign: "center",
              }}
              variant="body1"
            >
              FISHING TACKLE CATEGORY
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "start", md: "center" },
                mt: 4,
                flexDirection: { xs: "column", md: "row" },
                gap: "30px",
              }}
            >
              <Box>
                <Catogary title="Fishing Reels" />
                <Catogary title="Fishing Rods" />
                <Catogary title="Lures" />
                <Catogary title="Fishing Lines" />
              </Box>
              <Box>
                <Catogary title="Fishing Hooks" />
                <Catogary title="Metal JIG" />
                <Catogary title="Fishing Accessories" />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              border: "1px solid rgba(188, 188, 188, 1)",
              mb: 5,
            }}
          />
        </Box>

        {/* swiper of catogory*/}

        <Box
          sx={{
            width: { xs: "90%", sm: "90%", md: "85%", lg: "85%" },
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
            mb: 10,
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--fontQuicksand)",
              fontWeight: "700",
              fontSize: "35px",
              lineHeight: "45px",
              mb: 4,
            }}
            variant="body1"
          >
            Hot Offers
          </Typography>

          <Slider />
        </Box>

        <Box
          sx={{
            width: { xs: "90%", sm: "90%", md: "85%", lg: "85%" },
            border: "1px solid rgba(188, 188, 188, 1)",
            mb: 5,
          }}
        />

        {/* our Category */}
        <Box
          sx={{
            width: { xs: "90%", sm: "90%", md: "85%", lg: "85%" },
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
            mb: 6,
            mt: 1,
          }}
        >
          <OurCategory search={search} />
        </Box>

        {/* section of footer */}
        {/* <Footer /> */}
      </Box>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Catogary({ title }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.0229 22.2209L34.7125 8.53127C35.1437 8.10002 35.7437 7.87919 36.352 7.92919C36.9604 7.9771 37.5166 8.2896 37.875 8.78544C37.875 8.78544 37.927 8.86044 37.9312 8.8646C40.3854 12.2834 41.8333 16.4729 41.8333 21C41.8333 32.4979 32.4979 41.8334 21 41.8334C9.50204 41.8334 0.166626 32.4979 0.166626 21C0.166626 9.5021 9.50204 0.166687 21 0.166687C24.325 0.166687 27.4708 0.947937 30.2604 2.33752C31.2916 2.84794 31.7104 4.10002 31.1979 5.12919C30.6854 6.15835 29.4354 6.57919 28.4062 6.06669C26.175 4.95627 23.6583 4.33335 21 4.33335C11.802 4.33335 4.33329 11.8021 4.33329 21C4.33329 30.1979 11.802 37.6667 21 37.6667C30.1979 37.6667 37.6666 30.1979 37.6666 21C37.6666 18.2375 36.9937 15.6292 35.8 13.3354L22.4979 26.6396C21.6833 27.4542 20.3645 27.4542 19.55 26.6396L13.3 20.3896C12.4875 19.5771 12.4875 18.2563 13.3 17.4438C14.1145 16.6313 15.4333 16.6313 16.2479 17.4438L21.0229 22.2209Z"
          fill="#4F85DD"
        />
      </svg>
      <Typography
        sx={{
          fontFamily: "var(--fontQuicksand)",
          fontWeight: "600",
          fontSize: "28px",
          lineHeight: "35px",
          color: "rgba(0, 0, 0, 1)",
          ml: 2,
        }}
        variant="body1"
      >
        {title}
      </Typography>
    </Box>
  );
}
