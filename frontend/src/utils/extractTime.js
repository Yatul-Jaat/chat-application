export function extractTime(dataString) {
  const date = new Date(dataString);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
}
