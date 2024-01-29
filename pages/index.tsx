'use client';
import logo from '@/public/assets/logo.png';
import linkedin from '@/public/assets/linkedin.svg';
import x from '@/public/assets/x.svg';
import instagram from '@/public/assets/instagram.svg';
import youtube from '@/public/assets/youTube.svg';
import elements from '@/public/assets/elements.svg';
import balls from '@/public/assets/balls.svg';
import { postRequest } from '../utils/apiCall';
import CountdownTimer from '@/pages/components/coundownTimer';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [savetext, setSaveTest] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string): boolean => {
    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: any) => {
    setSaveTest(e.target.value);
  };

  const handleBlur = () => {
    if (!isValidEmail(savetext)) {
      alert('Invalid Email');
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!isValidEmail(savetext)) {
      alert('Invalid Email');
      return;
    }
    setLoading(true);
    const url = '/api/submit';
    const res = await postRequest({
      url,
      data: { email: savetext },
    });

    if (res?.status === 200) {
      alert('Email saved successfully');
    }

    setLoading(false);
    setSaveTest('');
  };

  return (
    <div className=" relative overflow-hidden ">
      {/* Balls and star background */}
      <div className="z-[0] absolute bottom-0">
        <div className="h-screen w-screen">
          <Image
            src={elements}
            blurDataURL={elements as any}
            priority
            unoptimized={false}
            alt="hero"
            objectFit="cover"
            fill={true}
          />
        </div>
      </div>
      <div className="z-[1] absolute top-0">
        <div className="">
          <div className="w-screen h-[702px]">
            <Image
              src={balls}
              blurDataURL={balls as any}
              priority
              unoptimized={false}
              alt="hero"
              objectFit="contain"
              fill={true}
            />
          </div>
        </div>
      </div>
      {/* Balls and star background ...*/}

      <div className="">
        <div className="max-content z-[999]">
          <div className="container">
            <div className="xxlA:pt-[40px] pt-[20px]">
              <div className="w-[168px] h-[70px]">
                <Image
                  src={logo}
                  blurDataURL={logo as any}
                  priority
                  unoptimized={false}
                  alt="hero"
                  objectFit="contain"
                  fill={true}
                />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between items-center xxlA:mt-[80px] mt-[44px] md:flex-col md:gap-[120px] xlsm:gap-[60px]">
                <div className="text-[#FFFFFF]">
                  <p className="font-primary font-[400] max-w-[600px]  text-[40px] leading-[48px] mb-[32px] xlsm:mb-[24px] lg:text-[40px] xlsm:text-[28px] sm:text-[25px] sm:leading-[32px] xlsm:leading-[37px]">
                    The learning portal opens soon
                  </p>
                  <div className="max-w-[480px]">
                    <p className="font-primary font-[400] text-[44px] xlsm:text-[25px] leading-[58px]">
                      Welcome to the
                    </p>
                    <p className="font-primary  font-[800] text-[40px] xlsm:text-[25px] leading-[39px]">
                      Digital For All Challenge
                    </p>
                    <p className="font-secondary whitespace-nowrap font-[700] text-[14px] leading-[21px] mt-[16px]">
                      Up to{' '}
                      <span className="decoration-double line-through text-[18px] text-[red]">
                        N
                      </span>
                      <span className="text-[18px] text-[red]">
                        150 Million
                      </span>{' '}
                      {''}
                      to be won in cash and consolation prizes. T&Cs apply.
                    </p>
                    <p className="font-secondary  font-[400] text-[14px] leading-[21px] mt-[16px]">
                      Join the waitlist to be notified when the platform goes
                      live
                    </p>
                  </div>
                  <div className="mt-[24px] flex gap-[16px] xlsm:flex-col items-center">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      onChange={(e) => handleChange(e)}
                      onBlur={handleBlur}
                      value={savetext}
                      className="p-[12px] w-[290px] xlsm:w-full  rounded-[5px] border-[1px] border-[#000000] text-black font-[400] text-[16px] leading-[24px] outline-none focus:outline-none focus:border-none "
                    />
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="rounded-[5px] cursor-pointer w-[30%]  xlsm:w-full py-[12px] px-[12px] bg-[#3CAE5B] text-[16px] leading-[24px] font-[400] text-white font-secondary"
                    >
                      {loading ? 'Loading...' : 'Join the Waitlist'}
                    </button>
                  </div>
                  <p className="font-secondary font-[400] text-[11px] leading-[17px] mt-[16px]">
                    By submitting your email address, you are confirming that
                    you agree with our {''}
                    <a
                      href="https://tech4dev.com/privacyPolicy.html"
                      target="blank"
                    >
                      <span className="underline cursor-pointer">
                        Terms and Conditions
                      </span>
                    </a>
                  </p>
                  <div>
                    {/* <div className="mt-[32px] cursor-pointer rounded-[16px] py-[16px] px-[24px] bg-[#FFFFFF1A] shadow-md flex gap-[18px] max-w-[200px]">
                      <div>
                        <a
                          href="https://www.linkedin.com/school/tech4dev/mycompany/"
                          target="blank"
                        >
                          <div className="w-[24px] h-[24px]">
                            <Image
                              src={linkedin}
                              blurDataURL={linkedin as any}
                              priority
                              unoptimized={false}
                              alt="hero"
                              objectFit="contain"
                              fill={true}
                            />
                          </div>
                        </a>
                      </div>
                      <div>
                        <a href="https://twitter.com/tech4devhq" target="blank">
                          <div className="w-[24px] h-[24px]">
                            <Image
                              src={x}
                              blurDataURL={x as any}
                              priority
                              unoptimized={false}
                              alt="hero"
                              objectFit="contain"
                              fill={true}
                            />
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.instagram.com/tech4dev"
                          target="blank"
                        >
                          <div className="w-[24px] h-[24px]">
                            <Image
                              src={instagram}
                              blurDataURL={instagram as any}
                              priority
                              unoptimized={false}
                              alt="hero"
                              objectFit="contain"
                              fill={true}
                            />
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.youtube.com/@tech4devhq618"
                          target="blank"
                        >
                          <div className="w-[28px] h-[24px]">
                            <Image
                              src={youtube}
                              blurDataURL={youtube as any}
                              priority
                              unoptimized={false}
                              alt="hero"
                              objectFit="cover"
                              fill={true}
                            />
                          </div>
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* Hero Part B */}
                <div className="relative">
                  <CountdownTimer />
                </div>
              </div>
            </div>
            <div className="mt-[32px] cursor-pointer rounded-[16px] py-[16px] px-[24px] bg-[#FFFFFF1A] shadow-md flex gap-[18px] max-w-[200px]">
              <div>
                <a
                  href="https://www.linkedin.com/school/tech4dev/mycompany/"
                  target="blank"
                >
                  <div className="w-[24px] h-[24px]">
                    <Image
                      src={linkedin}
                      blurDataURL={linkedin as any}
                      priority
                      unoptimized={false}
                      alt="hero"
                      objectFit="contain"
                      fill={true}
                    />
                  </div>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/tech4devhq" target="blank">
                  <div className="w-[24px] h-[24px]">
                    <Image
                      src={x}
                      blurDataURL={x as any}
                      priority
                      unoptimized={false}
                      alt="hero"
                      objectFit="contain"
                      fill={true}
                    />
                  </div>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/tech4dev" target="blank">
                  <div className="w-[24px] h-[24px]">
                    <Image
                      src={instagram}
                      blurDataURL={instagram as any}
                      priority
                      unoptimized={false}
                      alt="hero"
                      objectFit="contain"
                      fill={true}
                    />
                  </div>
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/@tech4devhq618" target="blank">
                  <div className="w-[28px] h-[24px]">
                    <Image
                      src={youtube}
                      blurDataURL={youtube as any}
                      priority
                      unoptimized={false}
                      alt="hero"
                      objectFit="cover"
                      fill={true}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
