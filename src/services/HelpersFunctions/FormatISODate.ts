function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', options).format(date);
}

export default formatDate;
