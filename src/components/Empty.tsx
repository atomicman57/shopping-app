import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { EmptyProps } from "../types";

const Empty: React.FC<EmptyProps> = ({ message }) => (
  <Box>
    <Text fontWeight="bold" textAlign="center" fontSize="xl">
      {message}
    </Text>
  </Box>
);

export default Empty;
