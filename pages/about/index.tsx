import PageLayout from '@/shared-components/PageLayout/PageLayout';
import React from 'react';
import Image from 'next/image';

function AboutPage() {
  return (
    <PageLayout>
      <div className="max-content">
        <div className="container mt-[50px] py-[80px]">
          <div>
            <p className="text-[40px] font-[Raleway] text-center font-[700] leading-[53px] text-[#393A4A]">
              About
            </p>
            <div className="flex justify-center mt-[40px]">
              <div className="max-w-[936px]">
                <div className="w-full h-[450px] xlsm:hidden rounded-[10px] overflow-hidden">
                  <Image
                    src="/Assets/png/aboutHero.png"
                    blurDataURL="/Assets/png/aboutHero.png"
                    priority
                    unoptimized={false}
                    alt="hero"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <div className="w-full h-[224px] hidden xlsm:block rounded-[10px] overflow-hidden">
                  <Image
                    src="/Assets/png/aboutHero.png"
                    blurDataURL="/Assets/png/aboutHero.png"
                    priority
                    unoptimized={false}
                    alt="hero"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <div className="mt-[30px]">
                  <p className="text-[18px] font-[Ubuntu] font-[400] leading-[27px] text-[#393A4A]">
                    The #DigitalforAllChallenge is Africa's largest digital
                    skilling competition, designed to reward self-development
                    and encourage the acquisition and use of digital skills
                    through competitive incentives. It is a free digital
                    skill-building competition and program to increase digital
                    literacy in Nigeria and igniting interest in obtaining
                    digital skills and certifications using online platforms.
                  </p>
                  <p className="text-[18px] mt-[30px] font-[Ubuntu] font-[400] leading-[27px] text-[#393A4A]">
                    In its second year, the challenge will run in two phases:
                    the training phase and the competition phase. After the
                    training phase, beneficiaries will be required to take an
                    assessment to qualify for the competition phase. The
                    competition phase will run in three stages: state, regional
                    and national (grand finale).
                  </p>
                </div>
                <div className="mt-[50px]">
                  <div className="flex justify-center">
                    <div className="">
                      <div className="w-[255px] h-[350px]">
                        <Image
                          src="/Assets/png/gfaGif.gif"
                          blurDataURL="/Assets/png/gfaGif.gif"
                          priority
                          unoptimized={false}
                          alt="hero"
                          objectFit="contain"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-[18px] mt-[40px] font-[Ubuntu] font-[400] leading-[27px] text-[#393A4A]">
                    In the competition stage, learners can win up to 15 million
                    naira in cash, laptops, tablets and other consolation
                    prizes. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default AboutPage;
