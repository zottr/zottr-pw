import React from 'react';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { HomeBenefit, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurFeatures, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'));
const DynamicHomeBenefit = dynamic(() => import('../components/home/benefit'));
const DynamicFinalCTA = dynamic(() => import('../components/home/finalcta'));
// const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
const DynamicHomeTestimonial = dynamic(
  () => import('../components/home/testimonial'),
);
const DynamicHomeFeatures = dynamic(
  () => import('../components/home/features'),
);
const DynamicHomeMobileFirst = dynamic(
  () => import('../components/home/mobile-first'),
);
const DynamicHomeMetaGrowth = dynamic(
  () => import('../components/home/meta-growth'),
);
const DynamicHomePricing = dynamic(() => import('../components/home/pricing'));
const DynamicHomeNewsLetter = dynamic(
  () => import('../components/home/newsletter'),
);

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const id = router.asPath.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <section id="hero">
        <DynamicHomeHero />
      </section>
      <section id="features">
        <DynamicHomeFeatures />
      </section>
      <section id="meta-growth">
        <DynamicHomeMetaGrowth />
      </section>
      <section id="mobile-first">
        <DynamicHomeMobileFirst />
      </section>
      <section id="stories">
        <DynamicHomeTestimonial />
      </section>
      <section id="benefits">
        <DynamicHomeBenefit />
      </section>
      <section id="cta">
        <DynamicFinalCTA />
      </section>
      <section id="pricing">
        <DynamicHomePricing />
      </section>
      <section id="newsletter">
        <DynamicHomeNewsLetter />
      </section>
    </>
  );
};

export default Home;
