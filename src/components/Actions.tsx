import { IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const Actions: React.FC<{
  onEdit?: Function;
  onDelete: Function;
}> = ({ onEdit, onDelete }) => (
  <>
    {onEdit && (
      <IconButton
        aria-label={"Edit"}
        icon={<EditIcon />}
        onClick={() => onEdit()}
        size="sm"
        colorScheme="whiteAlpha"
        mr={5}
      />
    )}
    <IconButton
      aria-label={"Delete"}
      icon={<DeleteIcon />}
      onClick={() => onDelete()}
      size="sm"
      colorScheme="red"
    />
  </>
);

export default Actions;
