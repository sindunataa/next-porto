import { GanttChartSquare, Blocks, Gem } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Frontend Development',
    description: 'I specialize in creating engaging websites, using HTML, CSS, and JavaScript to build user-friendly interfaces that bring designs to life.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Backend Development',
    description: 'I focus on server-side operations, database management, and functionality, ensuring websites run smoothly behind the scenes using languages like Python, PHP, or Node.js.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'UI/UX Development',
    description: 'I specialize in crafting intuitive and visually appealing web interfaces, merging user experience and interface design to create seamless and engaging digital experiences.',
  },
]
const Service = () => {
  return <section className="mb-12 xl:mb-36">
    <div className="container mx-auto">
      <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Service</h2>
      <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24">
        {servicesData.map((item,index) => {
          return <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
            <CardHeader className='text-primary absolute -top-[60px]'>
              <div className="hidden w-[140px] h-[80px] bg-white mb-4 dark:bg-background
              xl:flex justify-center items-center">{item.icon}</div>
            </CardHeader>
            <CardContent className='text-center'>
              <CardTitle className='mb-4'>{item.title}</CardTitle>
              <CardDescription className='text-lg'>{item.description}</CardDescription>
            </CardContent>
          </Card>
        })}
      </div>
    </div>
  </section>
  
}

export default Service