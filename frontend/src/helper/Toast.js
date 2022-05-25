import { useToast } from "vue-toastification";
const _toast = useToast();

const options = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
};

const toast = {
  success: (message) => _toast.success(message, options),
  info: (message) => _toast.info(message, options),
  warn: (message) => _toast.warning(message, options),
  error: (message) => _toast.error(message, options),
};
export default toast;
