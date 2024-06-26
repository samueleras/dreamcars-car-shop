import { Box } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Box marginBottom="4.5rem">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
