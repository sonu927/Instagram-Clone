import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const path = useLocation();
  console.log("snjd", path);
  return (
    <Flex>
      {/* SidePanel */}
      {path.pathname !== "/auth" ? (
        <Box width={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* Page Content*/}
      <Box width={{ base: "calc(100% - 70px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
