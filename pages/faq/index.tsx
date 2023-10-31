import React, { useState } from 'react';
import { FaqQuestions } from '@/db/faqData';
import PageLayout from '@/shared-components/PageLayout/PageLayout';
import Image from 'next/image';
import { BiArrowToTop } from 'react-icons/bi';

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <PageLayout>
        <div className="container mt-[70px]  py-[50px]">
          <div className="text-center text-[#393A4A] font-[Raleway] font-[700] text-[40px] leading-[53px] md:text-[32px] md:leading-[43px]">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="max-content">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-[936px] lg:w-full pb-[80px]">
                <div className="space-y-[10px]">
                  {FaqQuestions?.map((item, index) => (
                    <div
                      key={index}
                      className={` p-[24px] cursor-pointer border-[#CDCED9]  rounded-[8px] ${
                        activeIndex === index
                          ? ' border-[1px] pb-[40px] ease-in duration-500 '
                          : 'border-[1px]  ease-out duration-500'
                      }`}
                    >
                      <div
                        className="flex items-center justify-between gap-[20px] cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                      >
                        <h3
                          className={`font-[500] font-[Ubuntu] text-[16px] leading-[24px] text-[#393A4A] ${
                            activeIndex === index && 'text-[#3CAE5C]'
                          }`}
                        >
                          {item.ques}
                        </h3>
                        <span className="transition-transform transform">
                          {activeIndex === index ? (
                            <div className="w-[12px] h-[12px] ">
                              <Image
                                src="/Assets/svg/closeIcon.svg"
                                blurDataURL="/Assets/svg/closeIcon.svg"
                                priority
                                unoptimized={false}
                                alt="hero"
                                objectFit="contain"
                                layout="fill"
                              />
                            </div>
                          ) : (
                            <div className="w-[12px] h-[12px] ">
                              <Image
                                src="/Assets/svg/openIcon.svg"
                                blurDataURL="/Assets/svg/openIcon.svg"
                                priority
                                unoptimized={false}
                                alt="hero"
                                objectFit="contain"
                                layout="fill"
                              />
                            </div>
                          )}
                        </span>
                      </div>
                      {activeIndex === index && (
                        <div className=" mt-[20px] ">
                          <p
                            dangerouslySetInnerHTML={{ __html: item.ans }}
                            className="font-[400] text-[16px] leading-[24px] text-[#32363D] ease-in-out duration-800"
                          >
                            {/* {item?.ans} */}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center justify-center mt-[30px]">
                  <p
                    onClick={scrollToTop}
                    className=" cursor-pointer flex items-center gap-[5px] text-[#393A4A] text-[12px] font-[500] leading-[24px]"
                  >
                    <span>Go back to the top</span>
                    <span>
                      <BiArrowToTop />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default FAQPage;
