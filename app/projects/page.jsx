'use client'
import React, {useState} from "react"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"

const projectData = [
  {
    image: '/work/peparprov.png',
    category: 'Laravel',
    name: 'NPC Jawa Tengah 2023 ',
    description: 'A sports competition in Pati Regency.',
    link: 'https://peparprov.npcjateng.com/',
    github: 'https://github.com/sindunataa/npc-jateng',
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
    description: 'Discover beauty in an instant with an easy-to-navigate interface..',
    link: 'http://xynpict.wuaze.com/',
    github: 'https://github.com/sindunataa/xynpict',
  },
  {
    image: '/work/portfolio.png',
    category: 'Next Js',
    name: 'Portfolio-v1 ',
    description: 'Welcome to the world of creation and innovation! My portfolio.',
    link: 'https://sindunata.netlify.app/',
    github: 'https://github.com/sindunataa/portfolio',
  }
]

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map(item => item.category)),
]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('all projects')

  const filteredProjects = projectData.filter(project => {
    return category === 'all projects'
      ? project
      : project.category === category;
  })


  return <section className='min-h-screen pt-12'>
    <div className="container mx-auto">
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
        My Project
      </h2>
      <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
        <TabsList className='w-full rounded-full grid h-full md:grid-cols-3 lg:max-w-[640px]
        mb-12 mx-auto md:border dark:border-none'>
          {categories.map((category, index) => {
            return <TabsTrigger 
                      onClick={()=>setCategory(category)}
                      value={category}
                      key={index} 
                      className='capitalize w-[162px] md:w-auto'
                    >
                      {category}
                    </TabsTrigger>
          })}
        </TabsList>
        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => {
            return <TabsContent value={category} key={index}>
              <ProjectCard project={project} />
            </TabsContent>
          })}
        </div>
      </Tabs>
    </div>
  </section>
  
}

export default Projects