// hooks/useGetDate.js
import React,{ useState, useEffect } from "react";

const useGetDate = () => {
  const [time, setTime] = useState("");
  const [todaysDate, setTodaysDate] = useState("");

  const updateClock = () => {
    const now = new Date();
    setTodaysDate(now.toLocaleDateString());

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    const formatted = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

    setTime(formatted);
  };

  useEffect(() => {
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return { todaysDate, time };
};

export default useGetDate;
