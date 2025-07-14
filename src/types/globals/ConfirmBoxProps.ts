interface ConfirmBoxProps {
  open: boolean,
  title?: string,
  message?: string,
  onConfirm?: () => void,
  onCancel?: () => void
};

export default ConfirmBoxProps;