import PageLayout from '@/shared-components/PageLayout/PageLayout';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  HowToParticipateData,
  RegisterParticipateData,
  RegisterTitle,
} from '@/db/participateData';

function HowToParticipate() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = RegisterParticipateData[currentIndex];

  return (
    <PageLayout>
      <div className="max-content">
        <div className="container mt-[50px] py-[80px]">
          <div className="flex justify-center">
            <div>
              <p className="text-[40px] font-[Raleway] text-center font-[700] leading-[53px] text-[#393A4A]">
                How to Participate
              </p>
              <div className="flex gap-[20px] justify-center flex-wrap mt-[30px]">
                {HowToParticipateData?.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#EBFFF0] w-[360px] xlsm:w-full p-[24px] rounded-[10px]"
                  >
                    <div className="w-[64px] h-[64px]">
                      <Image
                        src={item?.img}
                        blurDataURL={item?.img}
                        priority
                        unoptimized={false}
                        alt="hero"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                    <p className="text-[20px] mt-[20px] font-[Raleway] font-[700] leading-[27px] text-[#393A4A]">
                      {item?.title}
                    </p>
                    <p className="text-[18px] mt-[10px] font-[Raleway] font-[600] leading-[27px] text-[#393A4A]">
                      {item?.subTitle}
                    </p>
                    <div className="mt-[10px]   xlsmMin:h-[403px]">
                      {item?.rules?.map((list, i) => (
                        <div key={i} className="flex gap-[20px] mt-[10px]">
                          <div className="w-[21px] h-[21px]">
                            <Image
                              src={list?.icon}
                              blurDataURL={list?.icon}
                              priority
                              unoptimized={false}
                              alt="hero"
                              objectFit="contain"
                              layout="fill"
                            />
                          </div>
                          <p className="text-[16px] w-[284px] xlsm:w-full tracking-normal font-[Ubuntu] font-[400] leading-[24px] text-[#393A4A]">
                            {list?.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <a href="http://tech4dev.deltalms.prunedge.org/register">
                        <button className="btn-primary-min w-full text-center mt-[20px]">
                          Register
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              {/* Section B */}
              <div className="mt-[50px] py-[40px] px-[96px] lg:px-[30px] bg-[#083A55] rounded-[10px]">
                <p className="text-[40px] font-[Raleway] text-center font-[700] leading-[53px] text-[#FFFFFF]">
                  Register
                </p>
                <p className="text-[18px] mt-[10px] font-[Ubuntu] text-center font-[400] leading-[27px] text-[#FFFFFF]">
                  Join the challenge!
                </p>
                <div className="flex justify-center md:flex-col gap-[40px] mt-[30px]">
                  <div className="w-[360px] xlsm:w-full">
                    {RegisterTitle?.map((item, index) => (
                      <div key={index}>
                        <p
                          onClick={() => setCurrentIndex(index)}
                          className={`mt-[20px] text-[#FFFFFF] transition-transform cursor-pointer rounded-[10px] ${
                            currentIndex === index
                              ? 'bg-[#3CAE5C] px-[24px] py-[10px] ease-in-out transition-transform duration-500'
                              : 'ease-in-out transition-transform duration-700'
                          }`}
                        >
                          {item?.title}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="bg-[#EBFFF0] w-[504px] lg:w-[500px] xlsm:w-full p-[24px] rounded-[10px]">
                      <p className="text-[20px] font-[Raleway] font-[700] leading-[27px] text-[#393A4A]">
                        {cardData?.title}
                      </p>

                      <div className="h-[300px] lg:h-full">
                        {cardData?.text?.map((list, i) => (
                          <div key={i} className="flex gap-[10px] mt-[10px]">
                            <p className="text-[16px] tracking-normal font-[Ubuntu] font-[400] leading-[24px] text-[#393A4A]">
                              {list?.num}
                            </p>
                            <p className="text-[16px] tracking-normal font-[Ubuntu] font-[400] leading-[24px] text-[#393A4A]">
                              {list?.text}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div>
                        <a href="http://tech4dev.deltalms.prunedge.org/register">
                          <button className="btn-primary-min w-full text-center mt-[40px]">
                            Register
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default HowToParticipate;
