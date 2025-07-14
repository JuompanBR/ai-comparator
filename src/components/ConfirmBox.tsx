import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { ConfirmBoxProps } from '../types';
import { useTranslation } from 'react-i18next';

const ConfirmBox: React.FC<ConfirmBoxProps> = ({ open, title, message, onConfirm, onCancel }) => {

  const { t } = useTranslation();

  return (
    <>
      <Dialog
        open={open}
        onClose={onCancel}
        aria-labelledby="Confirm Action"
        aria-describedby="Are you sure you want to continue?"
        maxWidth={'sm'}
        fullWidth={true}
        >
        <DialogTitle>{title || "Confirm Action"}</DialogTitle>
        <DialogContent>
          <Typography>{message || "Are you sure you want to continue?"}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="inherit">{t("confirmBoxCancel")}</Button>
          <Button onClick={onConfirm} color="warning" variant="contained">{t("confirmBoxButton")}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ConfirmBox;