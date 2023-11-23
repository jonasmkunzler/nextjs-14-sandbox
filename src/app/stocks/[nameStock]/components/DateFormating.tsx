import React from 'react';

interface DateProps {
  dateString: string
}

const DateFormating: React.FC<DateProps> = ({ dateString }) => {

  const formattedDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month ;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }
  return (
    <>
      {formattedDate(dateString)}
    </>
  )
}
export default DateFormating