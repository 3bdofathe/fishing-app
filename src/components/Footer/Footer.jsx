import { FacebookOutlined, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "90%", md: "85%", lg: "85%" },
        mb: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          border: "1px solid rgb(225, 225, 225)",
          mb: 5,
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: { xs: "1150px", sm: "1100px", md: "1100px", lg: "600px" },
          mb: 5,
          position: "relative",
        }}
      >
        <img
          src="\image\Group 1258.png"
          alt="photo"
          width={"100%"}
          height={"100%"}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            position: "absolute",
            top: { xs: "100px", lg: "0px" },
            width: "100%",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 5, lg: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", md: "65%", lg: "40%" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "700",
                fontSize: "45px",
                lineHeight: "50px",
                color: "rgba(255, 255, 255, 1)",
              }}
              variant="body1"
            >
              ABOUT US
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "30px",
                color: "rgba(255, 255, 255, 1)",
                mt: 2,
              }}
              variant="body1"
            >
              DUEL has been making quality lures, and fishing lines for over 50
              years in Japan. Our quality of products has stood the test of time
              and continues to be most sought after. DUEL has two brands,
              &quot;DUEL&quot; and &quot;YO-ZURI&quot;.
            </Typography>
            <Box
              sx={{
                width: "70%",
                height: "5px",
                borderRadius: "50px",
                backgroundColor: "rgba(255, 255, 255, 1)",
                my: 2,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "25px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Address :{" "}
              <span
                style={{
                  fontFamily: "var(--fontQuicksand)",
                  fontWeight: "500",
                }}
              >
                FUKUOKA GION DAIICHI SEIMEI BLDG. 8F 5-35 REISEN-MACHI,
                HAKATA-KU, FUKUOKA 812-0039 JAPAN .
              </span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "20px",
                color: "rgba(255, 255, 255, 1)",
                my: 2,
              }}
            >
              Email :{" "}
              <span style={{ fontWeight: "500", textDecoration: "underline" }}>
                overseas@duel.co.jp
              </span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--fontQuicksand)",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "20px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Phone Number :{" "}
              <span style={{ fontWeight: "500" }}>+20 1011043078</span>
            </Typography>
          </Box>
          <Box
            className="footer"
            sx={{
              width: { xs: "90%", sm: "80%", md: "65%", lg: "40%" },
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 1)",
              borderRadius: "50px",
            }}
          >
            <form
              className="foot"
              style={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                gap: "2",
                padding: "30px",
                width: "100%",
              }}
            >
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Phone Number" />
              <textarea placeholder="Your Message" rows={6} />
              <button type="submit">Send Message</button>
            </form>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: {xs:'center', md:"space-between"},
          flexDirection:{xs: 'column', md:'row'},
          gap: 2

        }}
      >
        <Box width={"120px"}>
          <Typography
            className="logo"
            sx={{
              fontFamily: "var(--fontQuicksand)",
              fontWeight: "700",
              fontSize: "40px",
            }}
            variant="body1"
          >
            Logo
          </Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center'}} width="400px">
          <Typography
            sx={{
              fontFamily: "var(--fontQuicksand)",
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "25px",
              paragraph: "10px",
              color: "rgba(10, 20, 47, 1)",
            }}
            variant="body1"
          >
            © 2024 FISHER CAMP. All rights reserved.
          </Typography>
        </Box>
        <Box
          sx={{
            width:'200px',
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        
        >
          <LinkedIn fontSize="small" sx={{color:'rgba(10, 20, 47, 1)'}}/>
          <FacebookOutlined fontSize="large" color="primary"/>
          <Instagram fontSize="small" sx={{color:'rgba(10, 20, 47, 1)'}}/>
          <YouTube fontSize="small" sx={{color:'rgba(10, 20, 47, 1)'}}/>
        </Box>
      </Box>
    </Box>
  );
}
