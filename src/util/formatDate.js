export function formatDate(dateString) {

  const date = new Date(dateString);
  
  const formattedDate = `${date.toLocaleDateString('en-US', {
     year: 'numeric',
     month: 'long',
     day: 'numeric',
  })} ${date.toLocaleTimeString('en-US', {
     hour: '2-digit',
     minute: '2-digit',
     hour12: true,
  })}`;
  return formattedDate;
 }
