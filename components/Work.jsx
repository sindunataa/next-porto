'use client'
import Link from "next/link"
import { Button } from "./ui/button"

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    image: '/work/peparprov.png',
    category: 'Laravel',
    name: 'NPC Jawa Tengah 2023 ',
    description: 'A Sport Event for Paralympic Week IV Central Java 2023.',
    link: 'https://peparprov.npcjateng.com/',
    github: 'https://github.com/sindunataa/npc-jateng',
  },
  {
    image: '/work/portfolio.png',
    category: 'Next Js',
    name: 'Portfolio-v1 ',
    description: 'Welcome to the world of creation and innovation! My portfolio.',
    link: 'https://sindunata.netlify.app/',
    github: 'https://github.com/sindunataa/portfolio',
  },
  {
    image: '/work/imagestock.png',
    category: 'Laravel',
    name: 'Imagestock',
    description: 'Platform to manage and display your image galleries.',
    link: 'http://mygallery.wuaze.com/',
    github: 'https://github.com/sindunataa/laravel-image-stock',
  },
  {
    image: '/work/xynpict.png',
    category: 'Laravel',
    name: 'Xynpict ',
    description: 'Discover beauty in an instant with an easy-to-navigate interface.',
    link: 'http://xynpict.wuaze.com/',
    github: 'https://github.com/sindunataa/xynpict',
  }
  
]
const Work = () => {
  return <section className="relative mb-12 xl:mb-48">
    <div className="container mx-auto">
      <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
        <h2 className="section-title mb-4">Latest Projects</h2>
        <p className="subtittle mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Link href='/projects'><Button>All projects</Button></Link>
      </div>
      <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
        <Swiper className="h-[480px]" 
          slidesPerView={1} 
          breakpoints={{
            640: {
              slidesPerView: 2
            },
          }} 
          spaceBetween={30} 
          modules={[Pagination]} 
          pagination={{ clickable: true }}
        >
          {projectData.slice(0, 4).map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            )
              
          })}
        </Swiper>
      </div>
    </div>
  </section>
}

export default Work