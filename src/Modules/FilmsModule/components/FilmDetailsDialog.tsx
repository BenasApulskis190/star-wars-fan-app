import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  fullScreen: boolean;
  header: ReactNode;
};

export const FilmDetailsDialog = ({
  children,
  onClose,
  open,
  fullScreen,
  header
}: Props) => (
  <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={onClose}
    PaperProps={{
      style: {
        width: '100%',
        maxWidth: '800px',
        borderRadius: '12px'
      }
    }}
  >
    <DialogTitle>
      <Stack direction="row" justifyContent="space-between">
        {header}
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Stack>
    </DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
);
