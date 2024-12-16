
import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";

export default function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
      onClick={() => {
        window.scrollTo(0, 0);
      }}
        size="small"
        sx={{ position: "fixed", right: "30px", bottom: "30px" }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
}