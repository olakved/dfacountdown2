import Image from 'next/image';
import { useRouter } from 'next/router';

function Hero() {
  const router = useRouter();

  return (
    <div className="bg-[#083A55]">
      <div className="max-content">
        <div className="container mt-[90px] py-[50px] xxlA:mt-0 lgSm:pt-[120px]">
          <div className="xxlA:flex xxlA:justify-center xxlA:items-center h-[650px] w-full xxlA:h-screen lgSm:h-full">
            <div className="flex justify-center items-center gap-[50px] lgSm:gap-[0px] lgSm:flex-col">
              <div className="">
                <p className="font-[Ubuntu] font-[500] text-[#3CAE5C] text-[18px] leading-[27px]">
                  Welcome to the
                </p>
                <p className="font-[Raleway] font-[600] text-[#FFFFFF] text-[32px] leading-[43px]">
                  Digital For All Challenge
                </p>
                <p className="font-[Ubuntu] max-w-[449px] font-[400] text-[#FFFFFF] text-[18px] leading-[27px]">
                  We believe and are driven by the fact that every Nigerian
                  deserves the right to digital literacy and skills for the
                  future of work!
                </p>
                <div className="mt-[25px]">
                  <button
                    onClick={() => router.push('/participate')}
                    className="btn-primary-min flex items-center gap-[15px] font-[Ubuntu] font-[400] text-[18px] leading-[27px] py-[18px] px-[32px] md:py-[8px] md:px-[24px]"
                  >
                    <span>How to Participate</span>
                    <span className="w-[24px] h-[24px]">
                      <Image
                        src="/Assets/svg/arrowRight.svg"
                        blurDataURL="/Assets/svg/arrowRight.svg"
                        priority
                        unoptimized={false}
                        alt="hero"
                        objectFit="contain"
                        layout="fill"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div className="xlsm:w-full lgSm:w-full lgSm:mt-[30px]">
                <div className="w-[624px] lg:w-[498px] h-[482px] xxlA:h-[550px] xlsm:h-[350px] sm:h-[259px] xlsm:w-full lgSm:w-full">
                  <Image
                    src="/Assets/png/heroMap.png"
                    blurDataURL="/Assets/png/heroMap.png"
                    priority
                    unoptimized={false}
                    alt="hero"
                    objectFit="contain"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
