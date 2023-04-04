import { toast } from "react-toastify";

export const sentMaginLinkMessage = () =>
  toast.success("Magic Link Sent! Checkout your Email", {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });

export const sendingMagicLinkMessage = () =>
  toast.info("Sending Magic Link!", {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });

export const failedMagicLink = () => {
  toast.error("Magic Link Failed, Please Try Again in a few seconds!", {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

export const notUserFound = () => {
  toast.error("No session found, Login first to buy!", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
