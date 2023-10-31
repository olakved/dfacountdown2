import PageLayout from '@/shared-components/PageLayout/PageLayout';
import type { NextPage } from 'next';
import React from 'react';
import Hero from '@/page-components/Home-components/hero';
import Testimonial from '@/page-components/Home-components/testimonial';
import LearnerSection from '@/page-components/Home-components/learnSection';
import LaernSectionMobile from '@/page-components/Home-components/learnerMobile';

const Home: NextPage = () => {
  return (
    <>
      <PageLayout>
        <Hero />
        <LearnerSection />
        <LaernSectionMobile />
        <Testimonial />
      </PageLayout>
    </>
  );
};

export default Home;
