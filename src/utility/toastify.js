// toastUtils.js
import { toast } from 'react-toastify';

export const showToast = (messageType, message) => {
  switch (messageType) {
    case 'success':
      toast.success(message);
      break;
    case 'info':
      toast.info(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast(message); // Default to basic toast
  }
};
