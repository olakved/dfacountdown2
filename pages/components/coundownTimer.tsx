/* eslint-disable react-hooks/exhaustive-deps */
// components/CountdownTimer.tsx
import { useEffect, useState } from 'react';
// import lineH from '../../public/assets/lineH.svg';
import lineH from '@/public/assets/lineH.svg';
import lineV from '@/public/assets/lineV.svg';
import Image from 'next/image';

const CountdownTimer: React.FC = () => {
  const countdownDate = new Date(
    'February 5, 2024 12:00:00 GMT+0000'
  ).getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = countdownDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return {
      days: formatNumber(days),
      hours: formatNumber(hours),
      minutes: formatNumber(minutes),
    };
  }

  function formatNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }

  return (
    <div>
      <div className="w-[447px] xlsm:w-[400px] xlsm:hidden h-[1px] bg-white absolute  left-1/2 transform -translate-x-1/2 -top-[65px] xlsm:-top-[40px]">
        <Image
          src={lineH}
          blurDataURL={lineH as any}
          priority
          unoptimized={false}
          alt="hero"
          objectFit="contain"
          fill={true}
        />
      </div>
      <div className="w-[1px] h-[400px]  xlsm:h-[350px] xlsm:hidden  bg-white absolute -top-[80px] -left-[50px] xlsm:-left-[20px] ">
        <Image
          src={lineV}
          blurDataURL={lineV as any}
          priority
          unoptimized={false}
          alt="hero"
          objectFit="contain"
          fill={true}
        />
      </div>
      <div className="w-[1px] h-[400px] xlsm:h-[350px] xlsm:hidden bg-white absolute -top-[80px] -right-[50px] xlsm:-right-[20px] ">
        <Image
          src={lineV}
          blurDataURL={lineV as any}
          priority
          unoptimized={false}
          alt="hero"
          objectFit="contain"
          fill={true}
        />
      </div>
      <div className="w-[447px] xlsm:w-[400px] xlsm:hidden  h-[1px] bg-white absolute  left-1/2 transform -translate-x-1/2 -bottom-[70px] xlsm:-bottom-[20px] ">
        <Image
          src={lineH}
          blurDataURL={lineH as any}
          priority
          unoptimized={false}
          alt="hero"
          objectFit="contain"
          fill={true}
        />
      </div>
      <div className=" text-white xlsm:pb-[50px]">
        <p className="font-tertiary font-[700] text-[32px] xlsm:text-[25px] leading-[32px] mb-[30px] max-w-[325px]">
          Days left before the opening
        </p>
        <div className="max-w-[317px]">
          <div className="flex justify-between items-center">
            <div>
              <div className="rounded-[16px] w-[83px] h-[96px] xlsm:w-[60px] xlsm:h-[73px] xlsm:text-[25px] py-[32px] px-[24px] bg-[#FFFFFF1A] shadow-[0px 8px 6px 0px #0000000D] flex justify-center items-center text-[32px] leading-[32px] text-[#3CAE5C] font-[400] font-tertiary ">
                {timeRemaining.days}
              </div>
            </div>
            <p className="font-tertiary font-[400] text-[32px] leading-[32px] text-[#3CAE5C]">
              :
            </p>
            <div>
              <div className="rounded-[16px] w-[83px] h-[96px] xlsm:w-[60px] xlsm:h-[73px] xlsm:text-[25px] py-[32px] px-[24px] bg-[#FFFFFF1A] shadow-[0px 8px 6px 0px #0000000D] flex justify-center items-center text-[32px] leading-[32px] text-[#3CAE5C] font-[400] font-tertiary ">
                {timeRemaining.hours}
              </div>
            </div>
            <p className="font-tertiary font-[400] text-[32px] leading-[32px] text-[#3CAE5C]">
              :
            </p>
            <div>
              <div className="rounded-[16px] w-[83px] h-[96px] xlsm:w-[60px] xlsm:h-[73px] xlsm:text-[25px] py-[32px] px-[24px] bg-[#FFFFFF1A] shadow-[0px 8px 6px 0px #0000000D] flex justify-center items-center text-[32px] leading-[32px] text-[#3CAE5C] font-[400] font-tertiary ">
                {timeRemaining.minutes}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center px-[10px]">
            <p className="mt-[11px] text-center text-[32px] xlsm:text-[25px] leading-[32px] text-[#3CAE5C] font-[400] font-tertiary">
              Days
            </p>
            <p className="mt-[11px] text-center text-[32px] xlsm:text-[25px] leading-[32px] text-[#3CAE5C] font-[400] font-tertiary">
              Hour
            </p>
            <p className="mt-[11px] text-center text-[32px] xlsm:text-[25px] leading-[32px] text-[#3CAE5C] font-[400] font-tertiary">
              Min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
