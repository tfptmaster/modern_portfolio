import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

// Icons
import { 
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
 } from 'react-icons/ri'

//  Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";


const Hero = () => {
  return (
    // changer bg-hero @tailwind.config.js
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/* Texte hero*/}
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Full Stack</div>
                    {/* styles h1, subtitle globals.css */}
                    <h1 className="h1">Hello, this is Natasha</h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0">It's an extension of your personality and gives you the chance to craft that reflects who you are as a creative.</p>
                    {/* Boutons */}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href="/contact">
                            <Button className="gap-x-2">
                                Contact Me
                                <Send size={18} />
                            </Button>

                        </Link>
                        <Link href="/contact">

                            <Button variant="alternative" className="gap-x-2">
                                Download CV
                                <Download size={18} />
                            </Button>
                        </Link>
                    </div>
                    <Socials
                        containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                        iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
                    />
                </div>
                {/* Image hero */}
                <div className="hidden xl:flex relative">
                    {/* badge 1 */}
                    <Badge 
                        containerStyles="absolute top-[24%] -left-[5rem]"
                        icon={<RiBriefcase4Fill/>}
                        endCountNum={10}
                        badgeText='years of experience'
                    />
                    {/* badge 2 */}
                    <Badge 
                        containerStyles="absolute top-[80%] -left-[1rem]"
                        icon={<RiTodoFill/>}
                        endCountNum={2}
                        endCountText='k'
                        badgeText='Completed projects'
                    />
                    {/* badge 3 */}
                    <Badge 
                        containerStyles="absolute top-[55%] -right-8"
                        icon={<RiTeamFill/>}
                        endCountNum={127}
                        badgeText='Clients satisfied'
                    />
                    {/* background images @tailwind.config.js */}
                    <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                    <DevImg 
                      imgSrc='/about/developer.png'
                      containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
                    />
                </div>
            </div>
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary"/>
            </div>
        </div>
    </section>
  )
}

export default Hero