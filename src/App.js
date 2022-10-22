import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "../src/pages/Blogs.jsx";
import CreateBlog from "../src/pages/CreateBlog.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
// import { purple } from "@mui/material/colors";
import "./index.css";
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#fefefe",
  //   },
  // },
  // secondary: {
  //   main: purple,
  // },
  typography: {
    fontFamily: "Comfortaa",
    fontWeightLight: 400,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Blogs />} />
          <Route exact path="/create" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
