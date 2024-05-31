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
