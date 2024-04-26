import { Box, Flex } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const PageLayout = ({ children }) => {
  const path = useLocation();
  console.log("snjd", path);
  const [user, loading, error] = useAuthState(auth);
  const canRenderSideBar = path !== "/auth" && user;
  return (
    <Flex>
      {/* SidePanel */}
      {canRenderSideBar ? (
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

PageLayout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default PageLayout;
