import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeBenefit, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurFeatures, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeBenefit = dynamic(() => import('../components/home/benefit'))
const DynamicFinalCTA = dynamic(() => import('../components/home/finalcta'))
// const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
const DynamicHomeFeatures = dynamic(() => import('../components/home/features'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeFeatures />
      <DynamicHomeTestimonial />
      <DynamicHomeBenefit />
      <DynamicFinalCTA />
      <DynamicHomeNewsLetter />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
