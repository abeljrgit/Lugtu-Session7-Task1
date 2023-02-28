import React from 'react';
import { Box, Typography, Modal, Card } from '@mui/material';

export const ModalComponent = ({
  isOpen,
  onCloseHandler,
  title,
  description,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onCloseHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box>
        <Card sx={{ p: 2 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            variant="body2"
          >
            {description}
          </Typography>
        </Card>
      </Box>
    </Modal>
  );
};
