import { Box, Typography } from "@mui/material";
import ModalMaterial from "@mui/material/Modal";

interface Props {
  open: boolean;
  handleChangeModal: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Modal = ({ open, handleChangeModal }: Props) => {
  return (
    <ModalMaterial
      onClose={handleChangeModal}
      open={open}
      aria-describedby="modal-modal-message"
    >
      <Box sx={style}>
        <Typography id="modal-modal-message" sx={{ mt: 2 }}>
          Post created successfully
        </Typography>
      </Box>
    </ModalMaterial>
  );
};
