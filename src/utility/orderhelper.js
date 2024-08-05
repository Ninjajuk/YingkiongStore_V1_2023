import { FaBoxOpen, FaCheckCircle, FaHourglassHalf, FaQuestion, FaTimesCircle, FaTruck } from "react-icons/fa";

export function getDate(data) {
  const date = new Date(data);
  const day = date.getUTCDate();
  const month = date.toLocaleString("default", {
    month: "long",
    timeZone: "UTC",
  });
  const year = date.getUTCFullYear();
  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}

export const chooseColor = (status) => {
  switch (status) {
    case 'pending':
      return 'bg-purple-200 text-purple-600';
    case 'dispatched':
      return 'bg-yellow-200 text-yellow-600';
    case 'delivered':
      return 'bg-green-200 text-green-600';
    case 'received':
      return 'bg-green-200 text-green-600';
    case 'cancelled':
      return 'bg-red-200 text-red-600';
    default:
      return 'bg-purple-200 text-purple-600';
  }
};
export const chooseStyle = (status) => {
  switch (status) {
    case 'pending':
      return {
        colorClass: 'bg-purple-200 text-purple-600',
        icon: <FaHourglassHalf/> 
      };
    case 'dispatched':
      return {
        colorClass: 'bg-yellow-200 text-yellow-600',
        icon: <FaTruck/>
      };
    // case 'delivered':
    //   return {
    //     colorClass: 'bg-green-200 text-green-600',
    //     iconClass: <FaBoxOpen />
    //   };
    // case 'received':
    //   return {
    //     colorClass: 'bg-green-200 text-green-600',
    //     iconClass: <FaCheckCircle /> 
    //   };
    case 'cancelled':
      return {
        colorClass: 'bg-red-200 text-red-600',
        icon: <FaTimesCircle/> 
      };
    default:
      return {
        colorClass: 'bg-purple-200 text-purple-600',
        icon: <FaQuestion/>
      };
  }
};



