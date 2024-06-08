const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const now = new Date();
const dayOfWeek = dayNames[now.getDay()];
const dayOfMonth = now.getDate();
const monthName = monthNames[now.getMonth()];
const year = now.getFullYear();

export const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthName} ${year}`;
 
