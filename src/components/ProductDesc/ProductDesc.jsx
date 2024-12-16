/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
import {
  Box,
  Button,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import {
  AddShoppingCartOutlined,
  BackupTable,
  CreditScore,
  LocalShippingOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import StoreItems from "../../data/StoreItems.json";
import { useShoppingcart } from "../../context/SoppingCartContext";
import CartItem from "../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";

export default function ProductDesc() {
  const [clickImg, setClickImg] = useState(0);

  // ده بجيب الداتا من localStorage
  const formData = JSON.parse(localStorage.getItem("item"));
  const ImagesProduct = StoreItems.find((i) => i.id === formData.id);
  if (ImagesProduct == null) return null;

  const {
    getItemsQuantity,
    increaseCartQuantity,
    increaseLoveQuantity,
    removeLoveFromCart,
    loveItem,
    userDetails,
  } = useShoppingcart();
  const quantity = getItemsQuantity(formData.id);

  // دول الفانكشن الي بتتحكم في الكمية بتاع النمنتجات
  const [QuantityValue, setdecreaseValue] = useState(quantity);
  const handeleDecreseQuantity = () => {
    setdecreaseValue((prevalue) => prevalue - 1);
  };
  const handeleIncreaseQuantity = () => {
    setdecreaseValue((prevalue) => prevalue + 1);
  };

  // ده الي بيدل اللون بين الصور
  const buttonImg = document.querySelectorAll(".imgProduct");
  buttonImg.forEach((button) => {
    button.addEventListener("click", () => {
      buttonImg.forEach((btn) => btn.classList.remove("activeImg"));
      button.classList.add("activeImg");
    });
  });

  // ده بتاع القلب الي بتضغط عليه يزود عنصر ويغير اللون ولما تضغط عليه تاني يشيله و يغير لونه للطبيعي
  const isLoved = loveItem.some((item) => item.id === formData.id);
  const toggleLoveItem = () => {
    if (isLoved) {
      removeLoveFromCart(formData.id);
    } else {
      increaseLoveQuantity(formData.id);
    }
  };

  // دي الي بتعرضلي البيانات المرتبطه بالعنصر الي اختارته بناءا علي catecory
  const [relatedItems, setRelatedItem] = useState([]);
  useEffect(() => {
    const catecoryToFilter = formData.category;
    const result = StoreItems.filter(
      (item) => item.category === catecoryToFilter
    );
    setRelatedItem(result);
  }, [formData.category]);

  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >

      <Box
        sx={{
          width: { xs: "90%", sm: "90%", md: "85%" },
          display: "flex",
          alignItems: "center",
          mt: "150px",
          flexDirection: "column",
        }}
      >
        {/* shopping cart */}
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "space-between",
            },
            alignItems: "start",
            flexWrap: "wrap",
          }}
          width={"100%"}
        >
          {/* Box of Images */}
          <Box
            height={"500px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
              mr: {xs: 0, md: 3, lg: 0}
            }}
          >
            <Box
              sx={{
                width: "370px",
                height: "370px",
                borderRadius: "30px",
                border: "2px solid rgba(236, 236, 236, 1)",
              }}
            >
              <img
                src={ImagesProduct.images[clickImg]}
                alt="photo"
                width={"100%"}
                height={"100%"}
                draggable="false"
                style={{ borderRadius: "30px" }}
              />
            </Box>
            <Stack
              flexDirection={"row"}
              width={"100%"}
              height={"100px"}
              sx={{ justifyContent: "space-evenly", mt: 2 }}
            >
              {ImagesProduct.images.map((item, index) => (
                <img
                  onClick={() => setClickImg(index)}
                  className="imgProduct"
                  key={index}
                  src={item}
                  width={"100px"}
                  height={"100%"}
                  style={{ borderRadius: "15px", cursor: "pointer" }}
                />
              ))}
            </Stack>
          </Box>

          {/* Box of Description */}
          <Box width={"500px"} height={"500px"} pl={1} mb={3}>
            <Box
              sx={{
                backgroundColor: "rgba(1, 65, 64, 0.1)",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              width={"140px"}
              height={"52px"}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "rgba(1, 65, 64, 1)",
                }}
              >
                Available
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "700",
                fontSize: { xs: "26px", sm: "28px", md: "30px" },
                lineHeight: "37px",
                color: "rgba(41, 41, 41, 1)",
                my: 2,
              }}
              variant="body1"
            >
              {formData.title}
            </Typography>

            <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
              <Rating
                name="size-large"
                defaultValue={formData.rate}
                precision={0.5}
                readOnly
              />
              <Typography
                ml={1}
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "17.5px",
                  color: "rgba(191, 191, 191, 1)",
                }}
                variant="body1"
              >
                ({formData.rate})
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "end",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "700",
                  fontSize: "40px",
                  lineHeight: "36px",
                  color: "rgba(105, 84, 213, 1)",
                }}
                variant="body1"
              >
                {formData.price} EGP
              </Typography>
              {formData.hotOffer === true ? (
                <Typography
                  sx={{
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "17.5px",
                    textDecoration: "line-through",
                    color: "rgba(220, 22, 22, 1)",
                  }}
                  variant="body1"
                >
                  {formData.offer} EGP
                </Typography>
              ) : null}
            </Box>

            <Box display={"flex"} flexDirection={"column"} mt={2}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "600",
                  fontSize: "22px",
                  color: "rgba(130, 130, 130, 1)",
                }}
              >
                Quantity :
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  mt: 1,
                }}
              >
                <Button
                  className="btnQuantity"
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    fontSize: "40px",
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "600",
                    color: "rgba(105, 105, 105, 1)",
                    backgroundColor: "rgb(215, 215, 215)",
                  }}
                  onClick={handeleDecreseQuantity}
                >
                  -
                </Button>
                <Box
                  sx={{
                    width: "100px",
                    height: "50px",
                    borderRadius: "50px",
                    border: "2px solid rgba(99, 96, 215, 1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "rgba(99, 96, 215, 1)",
                    mx: 2,
                  }}
                >
                  {QuantityValue}
                </Box>
                <Button
                  className="btnQuantity"
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    fontSize: "35px",
                    fontFamily: "var(--fontQuicksand)",
                    fontWeight: "600",
                    color: "rgba(255, 255, 255, 1)",
                    backgroundColor: "rgba(99, 96, 215, 1)",
                  }}
                  onClick={handeleIncreaseQuantity}
                >
                  +
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 5,
                gap: 2,
              }}
            >
              <Button
                sx={{
                  width: "220px",
                  height: "60px",
                  borderRadius: "50px",
                  background: "var(--btnBg)",
                  fontFamily: "var(--fontQuicksand)",
                  fontSize: "16px",
                  lineHeight: "16px",
                  fontWeight: "700",
                  color: "rgba(255, 255, 255, 1)",
                  ":hover": { background: "var(--btnhover)" },
                }}
                onClick={() =>
                  increaseCartQuantity(
                    formData.id,
                    QuantityValue,
                    ImagesProduct.images[clickImg]
                  )
                }
              >
                <ShoppingCartOutlined sx={{ mr: 1, fontSize: "18px" }} />
                Add To Cart
              </Button>
              <IconButton
                onClick={() => {
                  toggleLoveItem();
                }}
                className={`love-button ${isLoved ? "loved" : ""}`}
                sx={{
                  height: "60px",
                  width: "100px",
                  borderRadius: "50px",
                  backgroundColor: "rgba(1, 65, 64, 0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "27px",
                }}
              >
                ❤
              </IconButton>
            </Box>
          </Box>

          {/* Box of price */}
          <Box
            sx={{
              width: "350px",
              height: "400px",
              borderRadius: "30px",
              border: "1px solid rgba(206, 206, 206, 1)",
              textAlign: "center",
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <BoxIcon
                  title={"In Stock"}
                  icon={
                    <BackupTable
                      sx={{
                        color: "rgba(1, 65, 64, 1)",
                        mr: 1,
                        fontSize: "25px",
                      }}
                    />
                  }
                />
                <BoxIcon
                  title={"Guaranteed"}
                  icon={
                    <CreditScore
                      sx={{
                        color: "rgba(1, 65, 64, 1)",
                        mr: 1,
                        fontSize: "25px",
                      }}
                    />
                  }
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <BoxIcon
                  title={"Cash on Delivery"}
                  icon={
                    <LocalShippingOutlined
                      sx={{
                        color: "rgba(1, 65, 64, 1)",
                        mr: 1,
                        fontSize: "25px",
                      }}
                    />
                  }
                />
                <BoxIcon
                  title={"Cash Online"}
                  icon={
                    <CreditScore
                      sx={{
                        color: "rgba(1, 65, 64, 1)",
                        mr: 1,
                        fontSize: "25px",
                      }}
                    />
                  }
                />
              </Box>
            </Box>
            <Box
              sx={{ width: "100%", border: "1px solid rgba(204, 204, 204, 1)" }}
            />

            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={2}
            >
              <Box
                display={"flex"}
                alignItems={"start"}
                flexDirection={"column"}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "var(--fontQuicksand)",
                    color: "rgba(115, 115, 115, 1)",
                  }}
                  variant="body1"
                >
                  Product Price
                </Typography>
                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: "700",
                    fontFamily: "var(--fontQuicksand)",
                    color: "rgba(99, 96, 215, 1)",
                  }}
                  variant="body1"
                >
                  {formData.price} EGP
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"start"}
                flexDirection={"column"}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "var(--fontQuicksand)",
                    color: "rgba(115, 115, 115, 1)",
                  }}
                  variant="body1"
                >
                  Delivery Price
                </Typography>
                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: "700",
                    fontFamily: "var(--fontQuicksand)",
                    color: "rgba(99, 96, 215, 1)",
                  }}
                  variant="body1"
                >
                  50 EGP
                </Typography>
              </Box>
            </Box>

            <Box
              mt={2}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "var(--fontQuicksand)",
                    color: "rgba(115, 115, 115, 1)",
                  }}
                  variant="body1"
                >
                  Quantity
                </Typography>
                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: "700",
                    fontFamily: "var(--fontQuicksand)",
                    color: "rgba(99, 96, 215, 1)",
                  }}
                  variant="body1"
                >
                  {QuantityValue}
                </Typography>
              </Box>

              <Box
                display={"flex"}
                alignItems={"start"}
                flexDirection={"column"}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "var(--fontQuicksand)",
                    color: "rgba(115, 115, 115, 1)",
                  }}
                  variant="body1"
                >
                  Total Price
                </Typography>
                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: "700",
                    fontFamily: "var(--fontQuicksand)",
                    color: "rgba(99, 96, 215, 1)",
                  }}
                  variant="body1"
                >
                  {formData.price * QuantityValue + 50} EGP
                </Typography>
              </Box>
            </Box>

            <Button
              sx={{
                width: "90%",
                height: "45px",
                borderRadius: "50px",
                background: "var(--btnBg)",
                border: "none",
                mt: 2,
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "500",
                fontSize: "18px",
                color: "rgba(255, 255, 255, 1)",
                ":hover": { background: "var(--btnhover)" },
              }}
              onClick={() => {userDetails ? (navigate('/payment1')) : (navigate('/login'))}}
            >
              Buy Now
            </Button>

            <Button
              sx={{
                width: "90%",
                height: "45px",
                borderRadius: "50px",
                border: "1.5px solid rgba(132, 34, 205, 1)",
                mt: 1.5,
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "600",
                fontSize: "18px",
                color: "rgba(79, 133, 221, 1)",
                ":hover": { background: "rgb(230, 230, 230)" },
              }}
              onClick={() =>
                increaseCartQuantity(
                  formData.id,
                  QuantityValue,
                  ImagesProduct.images[clickImg]
                )
              }
            >
              <AddShoppingCartOutlined sx={{ mr: 1 }} />
              Add To Cart
            </Button>
          </Box>
        </Box>

        {/* related data by catecory */}
        <Box width={"100%"} mt={3} mb={7}>
          <Box
            display={"flex"}
            alignItems={"start"}
            flexDirection={"column"}
            mb={5}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "700",
                fontSize: "28px",
                lineHeight: "56px",
                color: "rgba(37, 61, 78, 1)",
              }}
            >
              Related products
            </Typography>
            <Box
              sx={{ width: "70%", border: "1px solid rgba(205, 205, 205, 1)" }}
            />
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            flexWrap={"wrap"}
            sx={{
              justifyContent: { xs: "center", sm: "space-evenly" },
              gap: 3,
            }}
          >
            {relatedItems.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </Box>
        </Box>
      </Box>

      {/* section of footer */}
      {/* <Footer /> */}
    </Box>
  );
}

// eslint-disable-next-line react/prop-types
function BoxIcon({ title, icon }) {
  return (
    <Box display={"flex"} alignItems={"center"}>
      {icon}
      <Typography
        variant="body1"
        sx={{
          fontWeight: "500",
          fontFamily: "var(--fontQuicksand)",
          fontSize: "16px",
          color: "rgba(107, 107, 107, 1)",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
