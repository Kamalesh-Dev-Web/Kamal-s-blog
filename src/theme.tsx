import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F2F2F2",
    },
    secondary: {
      main: "#95D830",
      light: "#F2B705",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: "DM Sans",
    h1: {
      fontSize: "1.875rem",
    },
    h4: {
      fontSize: "0.875rem",
    },
  },
  components: {},
});

export default theme;