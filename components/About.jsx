import Devlmg from "./Devlmg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react"

const infoData =[
    {
        icon: <User2 size={20}/>,
        text: 'Sindunata'
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+6289 6691 1804'
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'sindunata61@gmail.com'
    },
    {
        icon: <Calendar size={20}/>,
        text: 'Born on 12 Mar, 2001'
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Associate of Informatics Engineering'
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Bantul, DIY, Indonesia'
    },
]

const qualificationData = [
    {
        title: 'education',
        data:[
            {
                university: 'Universitas Amikom Yogyakarta',
                qualification: 'Associate of Informatics Engineering',
                years: '2020 - 2023'
            },
        ]
    },
    {
        title: 'experience',
        data:[
            {
                company: 'PT. Semesta Ruang Inovasi',
                role: 'Software Engineer Internship',
                years: '2022 - 2023'
            },
            {
                company: 'PT. Semesta Ruang Inovasi',
                role: 'Freelance Software Engineer',
                years: '2023 - now'
            },
        ]
    },
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'Javascript, PHP, Phyton, MySql',
            },
            {
                name: 'Back-end Development',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/laravel.svg',
            },
            {
                imgPath: '/about/react.svg',
            },
            {
                imgPath: '/about/next.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
        ]
    },
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }

    return <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
            <div className="flex flex-col xl:flex-row">
                <div className="hidden xl:flex flex-1 relative">
                    <Devlmg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px]
                    h-[505px] bg-no-repeat relative" imgSrc='/about/developer4.png' />
                </div>
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full rounded-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                            <TabsContent value='personal'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-4">Unmatched Service Quality</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialized in crafting intuitive website with cutting-edge technology,
                                        delivering dynamic and engaging user experiences.
                                    </p>
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((item, index) => {
                                            return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                <div className="text-primary">{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        })}
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <div className="text-primary">Language Skill</div>
                                        <div className="border-b border-border"></div>
                                        <div>English, Indonesian</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='qualifications'>
                                <div>
                                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'experience').data.map((item, index) => {
                                                    const {company, role, years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute
                                                                -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28} />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'education').data.map((item, index) => {
                                                    const {university, qualification, years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute
                                                                -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='skills'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                                    <div className="mb-16">
                                        <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        <div>
                                            {getData(skillData, 'skills').data.map((item, index) => {
                                                const {name} = item;
                                                return <div>
                                                    <div className="w-2/4 text-center xl:text-left mx-auto
                                                    xl:mx-0"
                                                    key={index}
                                                    >
                                                        <div className="font-medium">{name}</div>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                        <div className="border-b border-border dark:border-color:white mb-4"></div>
                                        <div className="flex gap-x-8 justify-center xl:justify-start">
                                            {getData(skillData, 'tools').data.map((item, index) => {
                                                const {imgPath} = item;
                                                return <div key={index}>
                                                    <Image src={imgPath} width={48} height={48} alt='' priority/>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
}

export default About