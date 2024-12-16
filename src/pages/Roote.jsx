import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header1 from "../components/Header/Header1";
import { Box } from "@mui/material";
import { useShoppingcart } from "../context/SoppingCartContext";
import Header2 from "../components/Header/Header2";

export default function Roote() {
  // @ts-ignore
  const { search, setSearch, userDetails } = useShoppingcart();

  return (
    <>
      {userDetails ? (
        <>
          <Header2 search={search} setSearch={setSearch} />

          <Box>
            <Outlet />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Footer />
          </Box>
        </>
      ) : (
        <>
          <Header1 search={search} setSearch={setSearch} />

          <Box>
            <Outlet />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Footer />
          </Box>
        </>
      )}
    </>
  );
}
