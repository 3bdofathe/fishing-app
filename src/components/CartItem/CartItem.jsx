// @ts-nocheck
/* eslint-disable react/prop-types */
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, Rating, Typography } from "@mui/material";
import { useShoppingcart } from "../../context/SoppingCartContext";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartItem({
  id,
  title,
  rate,
  price,
  img,
  hotOffer,
  offer,
  category,
}) {

  const {
    loveItem,
      increaseLoveQuantity,
      removeLoveFromCart,
    } = useShoppingcart();

    const isLoved = loveItem.some(item => item.id === id);
    const toggleLoveItem = () => {
      if(isLoved){
        removeLoveFromCart(id);
      }else {
        increaseLoveQuantity(id);
      }
    }


    const navigate = useNavigate();


  return (
    <Box
    key={id}
      sx={{
        width: "298px",
        height: "440px",
        borderRadius: "30px",
        border: "1.5px solid rgba(214, 214, 214, 1)",
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
    >
      {hotOffer === true ? (
        <Box
          sx={{
            width: "97px",
            height: "40px",
            top: "1px",
            borderTopLeftRadius: "30px",
            borderBottomRightRadius: "20px",
            backgroundColor: "rgba(111, 72, 211, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--fontQuicksand)",
              fontWeight: "700",
              fontSize: "12px",
              lineHeight: "15px",
              color: "rgba(255, 255, 255, 1)",
            }}
            variant="body1"
          >
            Hot Offer
          </Typography>
        </Box>
      ) : (
        <Box width={"100%"} height={"40px"} top={"1px"}></Box>
      )}
      <Box width={"200px"} height={"200px"} ml={"50px"}>
        <img
          src={img}
          alt="photo"
          draggable="false"
          width={"100%"}
          height={"100%"}
        />
      </Box>

      <Box sx={{ px: 2 }}>
        <Typography
        className="titleOfItem"
          sx={{
            fontFamily: "var(--fontQuicksand)",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22.5px",
            color: "rgba(39, 39, 39, 1)",
          }}
          variant="body1"
        >
          {title}
        </Typography>
      </Box>

      <Box sx={{ px: 2, mt: 1, display: "flex", alignItems: "center" }}>
        <Rating
          name="size-medium"
          defaultValue={rate}
          precision={0.5}
          readOnly
        />
        <Typography
          ml={1}
          sx={{
            fontFamily: "var(--fontQuicksand)",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "17.5px",
            color: "rgba(191, 191, 191, 1)",
          }}
          variant="body1"
        >
          ({rate})
        </Typography>
      </Box>

      <Box sx={{ px: 2, mt: 1, display: "flex", alignItems: "center", gap: 2 }}>
        <Typography
          sx={{
            fontFamily: "var(--fontQuicksand)",
            fontWeight: "700",
            fontSize: "26px",
            lineHeight: "36px",
            color: "rgba(105, 84, 213, 1)",
          }}
          variant="body1"
        >
          {price} EGP
        </Typography>
        {hotOffer === true ? (
          <Typography
            sx={{
              fontFamily: "var(--fontQuicksand)",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "17.5px",
              textDecoration: "line-through",
              color: "rgba(220, 22, 22, 1)",
            }}
            variant="body1"
          >
            {offer} EGP
          </Typography>
        ) : null}
      </Box>

      <Box
        sx={{
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Button
          sx={{
            width: "165px",
            height: "45px",
            borderRadius: "50px",
            background: "var(--btnBg)",
            fontFamily: "var(--fontQuicksand)",
            fontSize: "14px",
            lineHeight: "16px",
            fontWeight: "700",
            color: "rgba(255, 255, 255, 1)",
            ":hover": { background: "var(--btnhover)" },
          }}
          onClick={()=> {
            localStorage.setItem('item', JSON.stringify({id, title, rate, price, img, hotOffer, offer, category}));
            navigate('/product');
          }}
        >
          <ShoppingCartOutlined sx={{ mr: 1, fontSize: "18px" }} />
          Add To Cart
        </Button>
        <IconButton
          onClick={() => {
            // toggleLove();
            // toogleLoveEvent();
            toggleLoveItem();
          }}
          className={`love-button ${isLoved ? "loved" : ""}`}
          sx={{
            height: "45px",
            width: "77px",
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
  );
}
