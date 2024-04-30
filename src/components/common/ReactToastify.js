// // components/NotificationContainer.js

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { hideNotification, selectNotification } from '../slices/notificationSlice';

// const NotificationContainer = () => {
//   const message = useSelector(selectNotification);
//   const dispatch = useDispatch();

//   React.useEffect(() => {
//     if (message) {
//       toast(message);
//       dispatch(hideNotification());
//     }
//   }, [message, dispatch]);

//   return (
//     <ToastContainer
//       position="bottom-right"
//       autoClose={5000}
//       hideProgressBar={false}
//       newestOnTop
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//     />
//   );
// };

// export default NotificationContainer;

// import { toast, ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";


// function ToastifyExample() {
//   const notify = () => {
//     toast("Default Notification !");

//     toast.success("Success Notification !", {
//       position: "top-center"
//     });

//     toast.error("Error Notification !", {
//       position: "top-left"
//     });

//     toast.warn("Warning Notification !", {
//       position: "bottom-left"
//     });

//     toast.info("Info Notification !", {
//       position: "bottom-center"
//     });

//     toast("Custom Style Notification with css class!", {
//       position: "bottom-right",
//       className: 'foo-bar'
//     });
//   };

//    return (
//       <>
//         <button onClick={notify}>Notify</button>;
//         <ToastContainer />
//       </>
//     );
// }


// services/notificationService.js

import { toast } from 'react-toastify';

export const showDefaultNotification = (message) => {
  toast(message);
};

export const showSuccessNotification = (message) => {
  toast.success(message, {
    position: "top-center"
  });
};



