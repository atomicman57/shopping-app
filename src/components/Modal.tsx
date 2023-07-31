import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { ModalComponentProps } from "../types";
import { themeColors } from "../utils/constants";

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) => {
  return (
    <Modal aria-hidden={!isOpen} isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent color={themeColors.darkBg}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton aria-label="Close Modal" />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
