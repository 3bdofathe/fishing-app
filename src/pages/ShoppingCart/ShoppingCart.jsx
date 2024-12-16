// @ts-nocheck
import { Box, Button, IconButton, Typography } from "@mui/material";
// import Footer from "../../components/Footer/Footer";
// import Header1 from "../../components/Header/Header1";
import { useShoppingcart } from "../../context/SoppingCartContext";
import StoreItems from "../../data/StoreItems.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DeleteForever } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const { cartItem, removeItemFromCart, total, supTotal, userDetails } = useShoppingcart();

  const getProductDetails = (id) => {
    return StoreItems.find((product) => product.id === id);
  };

  const navigate = useNavigate();

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
            Shopping Cart
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
                  width: "70px",
                  backgroundColor: "rgba(35, 214, 235, 1)",
                  borderRadius: "50px",
                }}
              />
            </Box>
          </Box>

          <Box mt={6} mb={8}>
            {/* table view item */}
            <Box>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{
                          fontFamily: "var(--fontQuicksand)",
                          fontWeight: "500",
                          lineHeight: "35px",
                          fontSize: "25px",
                          color: "rgba(165, 165, 165, 1)",
                        }}
                      >
                        Product Details
                      </TableCell>
                      <TableCell
                        style={{
                          fontFamily: "var(--fontQuicksand)",
                          fontWeight: "500",
                          lineHeight: "35px",
                          fontSize: "25px",
                          color: "rgba(165, 165, 165, 1)",
                        }}
                        align="center"
                      >
                        Price
                      </TableCell>
                      <TableCell
                        style={{
                          fontFamily: "var(--fontQuicksand)",
                          fontWeight: "500",
                          lineHeight: "35px",
                          fontSize: "25px",
                          color: "rgba(165, 165, 165, 1)",
                        }}
                        align="center"
                      >
                        Quantity
                      </TableCell>
                      <TableCell
                        style={{
                          fontFamily: "var(--fontQuicksand)",
                          fontWeight: "500",
                          lineHeight: "35px",
                          fontSize: "28px",
                          color: "rgba(165, 165, 165, 1)",
                        }}
                        align="center"
                      >
                        Total Price
                      </TableCell>
                      <TableCell align="center"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody style={{ height: "150px" }}>
                    {cartItem.map((item, index) => {
                      const product = getProductDetails(item.id);
                      return (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              width={"370px"}
                            >
                              <img
                                style={{
                                  borderRadius: "20px",
                                  border: "1.5px solid rgba(27, 27, 27, 1)",
                                }}
                                src={item.image}
                                alt="photo"
                                height={"100px"}
                                draggable="false"
                              />
                              <Typography
                                className="titleOfItem"
                                ml={3}
                                sx={{
                                  fontFamily: "var(--fontQuicksand)",
                                  fontWeight: "700",
                                  fontSize: "24px",
                                  lineHeight: "30px",
                                }}
                                variant="body1"
                              >
                                {product.title}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontFamily: "var(--fontQuicksand)",
                              fontWeight: "700",
                              fontSize: "25px",
                              lineHeight: "30px",
                              color: "rgba(27, 27, 27, 1)",
                            }}
                          >
                            {product.price} EGP
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "var(--fontQuicksand)",
                              fontWeight: "700",
                              fontSize: "25px",
                              lineHeight: "30px",
                              color: "rgba(27, 27, 27, 1)",
                            }}
                            align="center"
                          >
                            {item.quantity}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontFamily: "var(--fontQuicksand)",
                              fontWeight: "700",
                              fontSize: "25px",
                              lineHeight: "30px",
                              color: "rgba(27, 27, 27, 1)",
                            }}
                          >
                            {product.price * item.quantity} EGP
                          </TableCell>
                          <TableCell align="center">
                            <IconButton
                              onClick={() => removeItemFromCart(item.id)}
                              className="border"
                              sx={{
                                backgroundColor: "rgba(220, 22, 22, 0.08)",
                              }}
                            >
                              <DeleteForever fontSize="large" color="error" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    <Box position={"relative"} mt={5} mb={4} height={"300px"}>
                      <Box
                        sx={{
                          position: "absolute",
                          top: "0px",
                          width: "380px",
                          left: "100%",
                        }}
                      >
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Typography
                            sx={{
                              fontFamily: "var(--fontQuicksand)",
                              fontWeight: "500",
                              fontSize: "25px",
                              color: "rgba(165, 165, 165, 1)",
                            }}
                            variant="body1"
                          >
                            Subtotal
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "var(--fontQuicksand)",
                              fontWeight: "700",
                              fontSize: "25px",
                              color: "rgba(27, 27, 27, 1)",
                              mr: { xs: 1 },
                            }}
                            variant="body1"
                          >
                            {supTotal}{" "} EGP
                          </Typography>
                        </Box>

                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          mt={2}
                        >
                          <Typography
                            sx={{
                              fontFamily: "var(--fontQuicksand)",
                              fontWeight: "500",
                              fontSize: "25px",
                              color: "rgba(165, 165, 165, 1)",
                            }}
                            variant="body1"
                          >
                            Shipping
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "var(--fontQuicksand)",
                              fontWeight: "700",
                              fontSize: "25px",
                              color: "rgba(27, 27, 27, 1)",
                              mr: { xs: 1 },
                            }}
                            variant="body1"
                          >
                            50 EGP
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            width: "100%",
                            border: "1px solid rgba(199, 199, 199, 1)",
                            mt: 2,
                          }}
                        />

                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          mt={2}
                          mb={7}
                        >
                          <Typography
                            sx={{
                              fontFamily: "var(--fontQuicksand)",
                              fontWeight: "700",
                              fontSize: "25px",
                              color: "rgba(27, 27, 27, 1)",
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
                              mr: { xs: 1 },
                            }}
                            variant="body1"
                          >
                            
                            {total}{" "} EGP
                          </Typography>
                        </Box>

                        <Button
                          sx={{
                            width: "80%",
                            height: "60px",
                            borderRadius: "50px",
                            background: "var(--btnBg)",
                            left: "10%",
                            fontFamily: "var(--fontQuicksand)",
                            fontWeight: "700",
                            fontSize: "22px",
                            color: "rgba(255, 255, 255, 1)",
                          }}
                          onClick={() => {userDetails ? (navigate('/payment1')) : (navigate('/login'))}}
                        >
                          Check Out
                        </Button>
                      </Box>
                    </Box>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* price */}
          </Box>
        </Box>
      </Box>

    </Box>
  );
}
