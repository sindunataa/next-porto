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
    category: 'Fullstack',
    name: 'NPC Jawa Tengah 2023 ',
    description: 'A sports competition in Pati Regency.',
    link: 'https://peparprov.npcjateng.com/',
    github: 'https://github.com/sindunataa/npc-jateng', 
  },
  {
    image: '/work/4.png',
    category: 'Next Js',
    name: 'PEPARPROV Jawa Tengah ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'React Js',
    name: 'PEPARPROV Jawa Tengah ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Laravel',
    name: 'PEPARPROV Jawa Tengah ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    link: '/',
    github: '/',
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