import React, { useEffect, useState } from 'react';
import jblBoombox from '../assets/images/jbl_boombox.png';

export default function MusicExperience() {
  // Set the target date (e.g., 5 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 5);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);

  const timerData = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full bg-black rounded-xl overflow-hidden p-4 md:p-6 my-8" style={{background: 'radial-gradient(circle at 70% 50%, #222 60%, #000 100%)'}}>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[400px]">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6 px-4 md:px-10 py-8">
          <span className="text-green-400 font-semibold text-base mb-2">Categories</span>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
            Enhance Your<br />Music Experience
          </h1>
          {/* Timer */}
          <div className="flex gap-6 mb-6">
            {timerData.map((t, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex flex-col items-center justify-center shadow-lg">
                  <span className="text-black text-xl md:text-2xl font-bold">{t.value}</span>
                  <span className="text-xs text-gray-700 font-medium mt-1">{t.label}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-md text-lg shadow-lg transition">
            Buy Now!
          </button>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex items-center justify-center relative w-full h-[400px] md:h-[400px]">
          {/* Glowing Light Effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[500px] md:h-[500px] rounded-full z-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 40%, rgba(255,255,255,0.08) 70%, rgba(0,0,0,0.0) 100%)',
              filter: 'blur(48px)',
            }}
          />
          <img
            src={jblBoombox}
            alt="JBL Boombox Speaker"
            className="relative z-10 object-contain w-full h-full drop-shadow-2xl"
            style={{ maxWidth: '500px' }}
          />
        </div>
      </div>
    </div>
  );
} 