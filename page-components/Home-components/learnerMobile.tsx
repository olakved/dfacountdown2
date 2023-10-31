import Image from 'next/image';

const LaernSectionMobile = () => {
  return (
    <div className="hidden md:block pb-[50px]">
      <div className="relative">
        <div className=" py-[40px] bg-white">
          <div className="flex flex-col items-center">
            <p className="font-[Raleway] font-[600] text-[32px] leading-[43px] text-[#3CAE5C] text-center">
              Win exciting prizes!
            </p>
            <p className="font-[Ubuntu] max-w-[792px] lg:max-w-[550px] xlsm:px-[20px] font-[400] text-[18px] leading-[27px] text-[#6B6C7E] text-center">
              The Challenge is back for its second year and is open to 3
              categories of participants across Nigeria
            </p>
          </div>
        </div>

        <div className="max-content">
          <div className="container">
            <div className=" mb-[20px] xlsm:mb-[50px] flex gap-[50px] justify-center items-center md:flex-col xlsm:items-start xlsm:gap-[30px] -z-10">
              <div className="w-[480px] md:w-[100%] md:h-[300px]  h-[500px] overflow-hidden rounded-[20px]">
                <Image
                  src="/Assets/png/youngLearner.png"
                  blurDataURL="/Assets/png/youngLearner.png"
                  priority
                  unoptimized={false}
                  alt="hero"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className="">
                <div className="h-[340px] w-[400px]  md:w-full md:h-full">
                  <p className="font-[Raleway] font-[600] text-[32px] leading-[43px] text-[#393A4A]">
                    Young Learners
                  </p>
                  <p className="font-[Raleway] mt-[10px] font-[500] text-[16px] leading-[21px] text-[#393A4A]">
                    Ages 12-18
                  </p>

                  <div className="mt-[20px] flex gap-[20px]">
                    <div className="w-[16px] h-[16px]">
                      <Image
                        src="/Assets/svg/checkbox.svg"
                        blurDataURL="/Assets/svg/checkbox.svg"
                        priority
                        unoptimized={false}
                        alt="hero"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                    <div className="w-full">
                      <p className="font-[Ubuntu] font-[700] text-[16px] leading-[24px] text-[#3CAE5C]">
                        <span>
                          10 million naira cash prize for the grand prize
                          winner!
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-[20px] flex gap-[20px]">
                    <div className="w-[16px] h-[16px]">
                      <Image
                        src="/Assets/svg/checkbox.svg"
                        blurDataURL="/Assets/svg/checkbox.svg"
                        priority
                        unoptimized={false}
                        alt="hero"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                    <div className="w-full text-[#6B6C7E]">
                      <p className="font-[Ubuntu] font-[400] text-[16px] leading-[24px] ">
                        <span>
                          7.5 million naira cash consolation prizes for first
                          runner up.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-[20px] flex gap-[20px]">
                    <div className="w-[16px] h-[16px]">
                      <Image
                        src="/Assets/svg/checkbox.svg"
                        blurDataURL="/Assets/svg/checkbox.svg"
                        priority
                        unoptimized={false}
                        alt="hero"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                    <div className="w-full text-[#6B6C7E]">
                      <p className="font-[Ubuntu] font-[400] text-[16px] leading-[24px] ">
                        5 million cash consolation prize for second runner up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-content mt-[50px]">
        <div className="container">
          <div className=" mb-[20px] xlsm:mb-[50px] flex gap-[50px] justify-center md:flex-col xlsm:items-start xlsm:gap-[30px] -z-10">
            <div className="w-[480px] md:w-[100%] md:h-[300px]  h-[500px] overflow-hidden rounded-[20px]">
              <Image
                src="/Assets/png/youth.png"
                blurDataURL="/Assets/png/youth.png"
                priority
                unoptimized={false}
                alt="hero"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="">
              <div className="h-[340px] w-[400px]  md:w-full md:h-full">
                <p className="font-[Raleway] font-[600] text-[32px] leading-[43px] text-[#393A4A]">
                  Youth Category
                </p>
                <p className="font-[Raleway] mt-[10px] font-[500] text-[16px] leading-[21px] text-[#393A4A]">
                  Ages 19-45
                </p>
                <div>
                  <p className="font-[Ubuntu] mt-[10px] font-[700] text-[16px] leading-[21px] text-[#393A4A]">
                    Basic
                  </p>
                  <div className="mt-[20px] flex gap-[20px]">
                    <div className="w-[16px] h-[16px]">
                      <Image
                        src="/Assets/svg/checkbox.svg"
                        blurDataURL="/Assets/svg/checkbox.svg"
                        priority
                        unoptimized={false}
                        alt="hero"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                    <div className="w-full">
                      <p className="font-[Ubuntu] font-[700] text-[16px] leading-[24px] text-[#3CAE5C]">
                        <span>
                          10 million naira cash prize for the grand prize
                          winner!
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-[10px] flex gap-[20px]">
                    <div className="w-[16px] h-[16px]">
                      <Image
                        src="/Assets/svg/checkbox.svg"
                        blurDataURL="/Assets/svg/checkbox.svg"
                        priority
                        unoptimized={false}
                        alt="hero"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                    <div className="w-full text-[#6B6C7E]">
                      <p className="font-[Ubuntu] font-[400] text-[16px] leading-[24px] ">
                        <span>
                          7.5 million naira cash consolation prizes for first
                          runner up.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-[10px] flex gap-[20px]">
                    <div className="w-[16px] h-[16px]">
                      <Image
                        src="/Assets/svg/checkbox.svg"
                        blurDataURL="/Assets/svg/checkbox.svg"
                        priority
                        unoptimized={false}
                        alt="hero"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                    <div className="w-full text-[#6B6C7E]">
                      <p className="font-[Ubuntu] font-[400] text-[16px] leading-[24px] ">
                        5 million cash consolation prize for second runner up.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-[Ubuntu] mt-[10px] font-[700] text-[16px] leading-[21px] text-[#393A4A]">
                    Intermediate
                  </p>
                  <div className="mt-[20px] flex gap-[20px]">
                    <div className="w-[16px] h-[16px]">
                      <Image
                        src="/Assets/svg/checkbox.svg"
                        blurDataURL="/Assets/svg/checkbox.svg"
                        priority
                        unoptimized={false}
                        alt="hero"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                    <div className="w-full">
                      <p className="font-[Ubuntu] font-[700] text-[16px] leading-[24px] text-[#3CAE5C]">
                        <span>
                          15 million naira cash prize for the grand prize
                          winner!
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-[10px] flex gap-[20px]">
                    <div className="w-[16px] h-[16px]">
                      <Image
                        src="/Assets/svg/checkbox.svg"
                        blurDataURL="/Assets/svg/checkbox.svg"
                        priority
                        unoptimized={false}
                        alt="hero"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                    <div className="w-full text-[#6B6C7E]">
                      <p className="font-[Ubuntu] font-[400] text-[16px] leading-[24px] ">
                        <span>
                          12.5 million naira cash consolation prizes for first
                          runner up.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-[10px] flex gap-[20px]">
                    <div className="w-[16px] h-[16px]">
                      <Image
                        src="/Assets/svg/checkbox.svg"
                        blurDataURL="/Assets/svg/checkbox.svg"
                        priority
                        unoptimized={false}
                        alt="hero"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                    <div className="w-full text-[#6B6C7E]">
                      <p className="font-[Ubuntu] font-[400] text-[16px] leading-[24px] ">
                        10 million cash consolation prize for second runner up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-content">
        <div className="container">
          <div className=" mb-[20px] mt-[50px] xlsm:mb-[50px] flex gap-[50px] justify-center items-center md:flex-col xlsm:items-start xlsm:gap-[30px] -z-10">
            <div className="w-[480px] md:w-[100%] md:h-[300px]  h-[500px] overflow-hidden rounded-[20px]">
              <Image
                src="/Assets/png/civilServant.png"
                blurDataURL="/Assets/png/civilServant.png"
                priority
                unoptimized={false}
                alt="hero"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="">
              <div className="h-[340px] w-[400px]  md:w-full md:h-full">
                <p className="font-[Raleway] font-[600] text-[32px] leading-[43px] text-[#393A4A]">
                  Civil Servants
                </p>

                {/* <p className="font-[Raleway] mt-[10px] font-[500] text-[16px] leading-[21px] text-[#393A4A]">
                      Catergory Prize
                    </p> */}
                <div className="mt-[20px] flex gap-[20px]">
                  <div className="w-[16px] h-[16px]">
                    <Image
                      src="/Assets/svg/checkbox.svg"
                      blurDataURL="/Assets/svg/checkbox.svg"
                      priority
                      unoptimized={false}
                      alt="hero"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <div className="w-full">
                    <p className="font-[Ubuntu] font-[700] text-[16px] leading-[24px] text-[#3CAE5C]">
                      <span>
                        10 million naira cash prize for the grand prize winner!
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-[20px] flex gap-[20px]">
                  <div className="w-[16px] h-[16px]">
                    <Image
                      src="/Assets/svg/checkbox.svg"
                      blurDataURL="/Assets/svg/checkbox.svg"
                      priority
                      unoptimized={false}
                      alt="hero"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <div className="w-full text-[#6B6C7E]">
                    <p className="font-[Ubuntu] font-[400] text-[16px] leading-[24px] ">
                      <span>
                        7.5 million naira cash consolation prizes for first
                        runner up.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-[20px] flex gap-[20px]">
                  <div className="w-[16px] h-[16px]">
                    <Image
                      src="/Assets/svg/checkbox.svg"
                      blurDataURL="/Assets/svg/checkbox.svg"
                      priority
                      unoptimized={false}
                      alt="hero"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <div className="w-full text-[#6B6C7E]">
                    <p className="font-[Ubuntu] font-[400] text-[16px] leading-[24px] ">
                      5 million cash consolation prize for second runner up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaernSectionMobile;
