import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Home from "./components/home/Home";
import Layout from "./components/Layout";
import ProductPage from "./components/products/ProductPage";
import { categories } from "./categories";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#5ECE7B",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#1D1F22",
      dark: "#444649",
    },
    info: {
      main: "#F1F2F3",
    },
  },
});

const routes = categories.map((category) => category.subCategories).flat();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route) => {
              const routeWithoutSlash = route.to.substring(1);
              return (
                <Route
                  path={routeWithoutSlash}
                  key={route.label}
                  element={<ProductPage category={routeWithoutSlash} />}
                />
              );
            })}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
