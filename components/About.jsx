import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Luis Gonçalves"
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+33 07 87 61 12 32"
    },
    {
        icon: <MailIcon size={20} />,
        text: "monemail@mail.com"
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on 15 april, 1984"
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Titre Pro Developpeur"
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Nantes"
    },
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: "HTML, CSS "
            },
            {
                name: "Developpement Fullstack"
            },
            {
                name: "Developpement frontend"
            },
            {
                name: "Developpement backend"
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: "/about/vscode.svg"
            },
            {
                imgPath: "/about/figma.svg"
            },
            {
                imgPath: "/about/notion.svg"
            },
            {
                imgPath: "/about/wordpress.svg"
            },
        ]
    },
];

const qualificationData = [
    {
        title: "education",
        data: [
            {
                school: "ENI",
                qualification: "Certification PHP",
                years: "2023"
            },
            {
                school: "Ecole O'Clock",
                qualification: "Bac+2",
                years: "2022 - 2023"
            },
            
        ]
    },
    {
        title: "experience",
        data: [
            {
                company: "Brasserie du web",
                role: "Développeur fullstack",
                years: "2023"
            },
            {
                company: "Ecole O'Clock",
                role: "Développeur frontend",
                years: "2022 - 2023"
            },
            
        ]
    },
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
            <div className="flex flex-col xl:flex-row">
                {/* Image */}
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg
                      containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                      imgSrc="/about/developer.png"
                    />
                </div>
                {/* tabs */}
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                            <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal info</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className="text-lg mt-12 xl:mt-8">
                            {/* Onlet personnel */}
                            <TabsContent value='personal'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-4">Especialiste dans le développement de produits de qualité depuis 15 ans.</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit dolore, nobis modi ex reiciendis placeat numquam, natus est delectus ut, nulla necessitatibus et assumenda. Et tenetur corporis cupiditate commodi.
                                    </p>
                                    {/* Icons */}
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12 ">
                                        {infoData.map((item, index) => {
                                            return (
                                                <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {/* Languages */}
                                    <div className="flex flex-col gap-y-2">
                                        <div>Langues</div>
                                        <div className="border-b border-border"></div>
                                        <div>Français, Anglais, Portugais, Espagnol</div>
                                    </div>
                                </div>
                                
                            </TabsContent>
                            {/* Onglet qualifications */}
                            <TabsContent value='qualifications'>
                                <div>
                                    <h3 className="h3 mb-8 text-center xl:text-left">My journey</h3>
                                    {/* Expérience et formation */}
                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        {/* expérience */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                            {/* Liste avec expérience */}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'experience').data.map((item, index) => {
                                                    const {company, role, years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary relative -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
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
                                        {/* formation */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28}/>
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                            {/* Liste des formations */}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'education').data.map((item, index) => {
                                                    const {school, qualification, years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary relative -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{school}</div>
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
                            <TabsContent value='skills'>Skills Info</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About