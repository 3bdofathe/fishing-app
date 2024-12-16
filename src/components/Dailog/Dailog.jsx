// @ts-nocheck
import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import { useShoppingcart } from "../../context/SoppingCartContext";
import { Check, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Dailog() {
  const { open, handleClose } = useShoppingcart();
  const navigate = useNavigate();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        ".MuiPaper-root": {
          minWidth: { xs: "100%", sm: "100%", md: "450px" },
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            ":hover": { transition: ".7s", color: "red", rotate: "360deg" },
            borderRadius: "20px",
          }}
        >
          <Close />
        </IconButton>

        <Box
          width={"100%"}
          height={"100%"}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(104, 86, 214, 1)",
              borderRadius: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ml: "42%",
            }}
            width={"50px"}
            height={"50px"}
            mt={8}
          >
            <Check fontSize="large" sx={{ color: "white" }} />
          </Box>
          <Typography
            sx={{
              fontFamily: "var(--fontQuicksand)",
              fontWeight: "600",
              fontSize: "22px",
              color: "rgba(75, 75, 75, 1)",
              ml: "15%",
              mt: 2,
            }}
            variant="body1"
          >
            Order successfully created!
          </Typography>

          <Button
            sx={{
              width: "120px",
              height: "50px",
              borderRadius: "50px",
              backgroundColor: "rgba(104, 86, 214, 0.15)",
              mb: 6,
              mt: 4,
              ml: "34%",
              fontFamily: "var(--fontQuicksand)",
              fontWeight: "700",
              fontSize: "20px",
              ":hover": {
                border: "1px solid rgba(104, 86, 214, 1)",
              },
            }}
            onClick={() => {
                navigate("/");
                handleClose();
            }}
          >
            OK
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
