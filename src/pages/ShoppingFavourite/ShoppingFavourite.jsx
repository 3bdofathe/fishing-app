// @ts-nocheck
import { Box, Typography } from "@mui/material";
// import Header1 from "../../components/Header/Header1";
import { useShoppingcart } from "../../context/SoppingCartContext";
import CartItem from "../../components/CartItem/CartItem";
import StoreItems from "../../data/StoreItems.json";
// import Footer from "../../components/Footer/Footer";

export default function ShoppingFavourite() {
  const { loveItem } = useShoppingcart();

  const getProductDetails = (id) => {
    return StoreItems.find((product) => product.id === id);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      {/* <Header1 /> */}
      <Box mt={"150px"} sx={{ width: { xs: "90%", sm: "90%", md: "85%" } }}>
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "var(--fontQuicksand)",
              fontWeight: "700",
              fontSize: "45px",
              lineHeight: "60px",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            Shopping Favourite
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Box
              sx={{
                width: "200px",
                height: "10px",
                backgroundColor: "rgba(99, 96, 215, 1)",
                borderRadius: "50px",
                mt: 2,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  height: "10px",
                  width: "80px",
                  backgroundColor: "rgba(35, 214, 235, 1)",
                  borderRadius: "50px",
                }}
              />
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexWrap={"wrap"}
            width={"100%"}
            mt={6}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            gap={2}
            mb={5}
          >
            
            {loveItem.map((item) => {
              const product = getProductDetails(item.id);
              return <CartItem key={item.id} {...product} />;
            })}
          </Box>

        </Box>
      </Box>

      {/* <Footer /> */}
    </Box>
  );
}
