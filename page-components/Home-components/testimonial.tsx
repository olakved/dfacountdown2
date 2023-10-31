import { testimonyData } from '@/db/testimonialMockData';
import Image from 'next/image';
import React, { useState } from 'react';

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = testimonyData[currentIndex];

  const handleNextImage = () => {
    setCurrentIndex((currentIndex + 1) % testimonyData?.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonyData?.length) % testimonyData?.length
    );
  };

  return (
    <div className="max content bg-[#D4F7DC]">
      <div className="container py-[80px]">
        <div className="flex justify-center">
          <div>
            <div className="flex flex-col items-center">
              <p className="font-[Raleway] font-[600] text-[32px] leading-[43px] text-[#083A55] text-center">
                Testimonial
              </p>
              <p className="font-[Ubuntu] max-w-[744px] font-[400] text-[18px] leading-[27px] text-[#6B6C7E] text-center">
                We believe and are driven by the fact that every Nigerian
                deserves the right to digital literacy and skills for the future
                of work!{' '}
              </p>
            </div>
            <div className="mt-[30px] bg-[#3CAE5C] p-[24px] max-w-[936px] rounded-[10px]">
              <div className="flex items-center gap-[20px]">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <Image
                    src={cardData?.img}
                    blurDataURL={cardData?.img}
                    priority
                    unoptimized={false}
                    alt="hero"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <div>
                  <p className="font-[Ubuntu] font-[500] text-[18px] leading-[27px] text-[#FFFFFF]">
                    {cardData?.personName}
                  </p>
                  <p className="font-[Ubuntu] font-[400] text-[16px] leading-[24px] text-[#FFFFFF]">
                    {cardData?.title}
                  </p>
                </div>
              </div>
              <p className="font-[Ubuntu] font-[500] mt-[10px] text-[16px] leading-[24px] text-[#FFFFFF]">
                {cardData?.comment}
              </p>
            </div>
            {/* Next and Prev */}
            <div className="">
              <div className="flex justify-center cursor-pointer mt-[30px]">
                <div className="flex items-center p-[8px]  gap-[5px]">
                  {testimonyData?.map((item, index) => (
                    <p
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={` ${
                        currentIndex === index
                          ? 'h-[4px] w-[40px] rounded-[3px] bg-[#3CAE5C]'
                          : 'h-[4px] w-[22px] rounded-[3px] bg-[#9C9C9C]'
                      }`}
                    ></p>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-[10px] items-center gap-[20px] cursor-pointer">
                <div
                  className={`w-[40px] h-[40px] rounded-full flex justify-center items-center  ${
                    currentIndex === 0 ? 'bg-[#FFFFFF]' : 'bg-[#3CAE5C]'
                  }`}
                >
                  <div onClick={handlePrevImage} className="w-[20px] h-[20px]">
                    <Image
                      src={`${
                        currentIndex === 0
                          ? '/Assets/svg/prev.svg'
                          : '/Assets/svg/prevWhite.svg'
                      }`}
                      blurDataURL="/Assets/svg/prev.svg"
                      priority
                      unoptimized={false}
                      alt="hero"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>

                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#3CAE5C]">
                  <div onClick={handleNextImage} className="w-[24px] h-[20px]">
                    <Image
                      src="/Assets/svg/next.svg"
                      blurDataURL="/Assets/svg/next.svg"
                      priority
                      unoptimized={false}
                      alt="hero"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
