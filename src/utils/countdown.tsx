import React, { useEffect, useState } from 'react';
//date format: 2023-06-30T00:00:00
function Countdown({ date }: any) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const countdownDate = new Date(date).getTime(); // Replace with your desired countdown date and time

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft('Event Started!');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{timeLeft}</>;
}

export default Countdown;
