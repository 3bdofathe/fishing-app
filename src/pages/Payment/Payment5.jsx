// @ts-nocheck
import { Box, Button, IconButton, Typography } from "@mui/material";
// import Header1 from "../../components/Header/Header1";
import { Check, DeleteForeverOutlined } from "@mui/icons-material";
import "./Payment.css";
import { useShoppingcart } from "../../context/SoppingCartContext";
import StoreItems from "../../data/StoreItems.json";
// import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Payment5() {
  const { cartItem, removeItemFromCart, total, supTotal , handleClickOpen} = useShoppingcart();

  const getProductDetails = (id) => {
    return StoreItems.find((product) => product.id === id);
  };
  const navigate = useNavigate();

  const [digits, setDigits] = useState(["", "", "", ""]);
  const handleChange = (index, event) => {
    const newDigits = [...digits];
    newDigits[index] = event.target.value;
    setDigits(newDigits);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      {/* <Header1 /> */}

      <Box
        mt={"150px"}
        sx={{ width: { xs: "90%", sm: "90%", md: "85%" }, mb: 6 }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
        >
          {/* form input */}
          <Box
            sx={{
              width: { xs: "420px", sm: "480px", md: "650px" },
              display: "flex",
              flexDirection: "column",
              mb: 3,
            }}
          >
            {/* Contct info */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "700",
                  fontSize: { xs: "16px", sm: "18px" },
                  color: "rgba(99, 96, 215, 1)",
                }}
                variant="body1"
              >
                Contact Info
              </Typography>
              <Box
                sx={{
                  width: "80px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    border: "1px solid rgba(104, 86, 214, 1)",
                  }}
                />
                <Check
                  fontSize="small"
                  sx={{
                    backgroundColor: "rgba(104, 86, 214, 1)",
                    color: "white",
                    borderRadius: "20px",
                    mx: 1,
                  }}
                />
                <Box
                  sx={{
                    width: "20px",
                    border: "1px solid rgba(104, 86, 214, 1)",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "700",
                  fontSize: { xs: "16px", sm: "18px" },
                  color: "rgba(104, 86, 214, 1)",
                  ml: 1,
                }}
                variant="body1"
              >
                Shipping Details
              </Typography>

              <Box
                sx={{
                  width: "80px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    border: "1px solid rgba(104, 86, 214, 1)",
                  }}
                />
                <Check
                  fontSize="small"
                  sx={{
                    backgroundColor: "rgba(104, 86, 214, 1)",
                    color: "white",
                    borderRadius: "20px",
                    mx: 1,
                  }}
                />
                <Box
                  sx={{
                    width: "20px",
                    border: "1px solid rgba(104, 86, 214, 1)",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "700",
                  fontSize: { xs: "16px", sm: "18px" },
                  color: "rgba(104, 86, 214, 1)",
                  ml: 1,
                }}
                variant="body1"
              >
                Shipping Details
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 4,
                borderRadius: "30px",
                border: "1px solid rgba(205, 205, 205, 1)",
                p: 4,
                width: "100%",
              }}
            >
              <form
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "var(--fontQuicksand)",
                      fontWeight: "700",
                      fontSize: {xs:'23px', sm:"25px"},
                      color: "rgba(0, 0, 0, 1)",
                    }}
                    variant="body1"
                  >
                    OTP VERIFICATION NUMBER
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "var(--fontQuicksand)",
                      fontWeight: "500",
                      fontSize: {xs:'14px', sm:"16px"},
                      color: "rgba(0, 0, 0, 1)",
                    }}
                    variant="body1"
                  >
                    Enter the 4-digit sent to your phone number
                  </Typography>
                </Box>

                <Box mt={3}>
                  <div style={{ display: "flex", gap: "12px" }}>
                    {" "}
                    {digits.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(index, e)}
                        required
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "10px",
                          border: digit
                            ? "2px solid rgba(104, 86, 214, 1)"
                            : "none",
                          textAlign: "center",
                          color: digit ? "rgba(104, 86, 214, 1)" : null,
                          backgroundColor: "rgb(233, 233, 233)",
                          fontSize: "25px",
                          fontWeight: "700",
                          fontFamily: "var(--fontQuicksand)",
                        }}
                      />
                    ))}{" "}
                  </div>
                </Box>

                <Box mt={3}>
                  <Typography
                    sx={{
                      fontFamily: "var(--fontQuicksand)",
                      fontWeight: "500",
                      fontSize: "15px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                    variant="body1"
                  >
                    If you don’t receive any code.{" "}
                    <span
                      style={{
                        fontWeight: "700",
                        color: "rgba(104, 86, 214, 1)",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      Click Resend
                    </span>
                  </Typography>
                </Box>

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"100%"}
                  mt={5}
                >
                  <Button
                    className="btnContactBack"
                    onClick={() => navigate("/payment4")}
                    sx={{ mt: "0px ! important" }}
                  >
                    Back
                  </Button>

                  <Button
                    sx={{ mt: "0px ! important", textTransform:'capitalize' }}
                    className="btnContact"
                    onClick={handleClickOpen}
                  >
                    Confirm
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
          {/* product info */}
          <Box
            sx={{
              width: { xs: "420px", sm: "500px" },
              height: "outo",
              padding: 3,
              borderRadius: "20px",
              border: "1px solid rgba(205, 205, 205, 1)",
            }}
          >
            {cartItem.map((item, index) => {
              const product = getProductDetails(item.id);
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1.5,
                  }}
                >
                  <img
                    src={item.image}
                    alt="photo"
                    draggable="false"
                    width={"100px"}
                    style={{
                      borderRadius: "20px",
                      border: "1px solid rgba(45, 45, 45, 1)",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    width={"330px"}
                  >
                    <Box width={"190px"}>
                      <Typography
                        className="titleOfProduct"
                        sx={{
                          fontFamily: "var(--fontQuicksand)",
                          fontWeight: "700",
                          fontSize: "20px",
                          color: "rgba(45, 45, 45, 1)",
                        }}
                        variant="body1"
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "var(--fontQuicksand)",
                          fontWeight: "500",
                          fontSize: "20px",
                          color: "rgba(156, 156, 156, 1)",
                          mt: 2,
                        }}
                        variant="body1"
                      >
                        Quantity x{item.quantity}
                      </Typography>
                    </Box>

                    <Box
                      width={"90px"}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                      }}
                    >
                      <Typography
                        className="titleOfProduct"
                        sx={{
                          fontFamily: "var(--fontQuicksand)",
                          fontWeight: "700",
                          fontSize: "20px",
                          color: "rgba(45, 45, 45, 1)",
                        }}
                        variant="body1"
                      >
                        {product.price} EGP
                      </Typography>
                      <IconButton
                        sx={{
                          backgroundColor: "rgba(220, 22, 22, 0.08)",
                          mt: "10px",
                        }}
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        <DeleteForeverOutlined color="error" />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              );
            })}

            <Box mt={4}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "500",
                    fontSize: "20px",
                    color: "rgba(156, 156, 156, 1)",
                    ml: 1,
                  }}
                  variant="body1"
                >
                  Subtotal
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "700",
                    fontSize: "20px",
                    color: "rgba(0, 0, 0, 1)",
                    ml: 1,
                  }}
                  variant="body1"
                >
                  {supTotal} EGP
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={1}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "500",
                    fontSize: "20px",
                    color: "rgba(156, 156, 156, 1)",
                    ml: 1,
                  }}
                  variant="body1"
                >
                  Delivery
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "700",
                    fontSize: "20px",
                    color: "rgba(0, 0, 0, 1)",
                    ml: 1,
                  }}
                  variant="body1"
                >
                  50 EGP
                </Typography>
              </Box>

              <Box
                sx={{ border: "1px solid rgb(224, 224, 224)", ml: 1, mt: 2 }}
              />
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={1}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "700",
                    fontSize: "25px",
                    ml: 1,
                  }}
                  variant="body1"
                >
                  Total
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "700",
                    fontSize: "25px",
                    color: "rgba(99, 96, 215, 1)",
                    ml: 1,
                  }}
                  variant="body1"
                >
                  {total} EGP
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <Footer /> */}
    </Box>
  );
}
