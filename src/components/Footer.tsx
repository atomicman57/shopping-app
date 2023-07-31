import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { themeColors } from "../utils/constants";

const Footer: React.FC = () => {
  return (
    <Box
      bg={themeColors.darkContainer}
      py={4}
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
    >
      <Text color={themeColors.darkText} textAlign="center" fontSize="sm">
        &copy; {new Date().getFullYear()} Prismic Supermarket. All rights
        reserved.
      </Text>
    </Box>
  );
};

export default Footer;
