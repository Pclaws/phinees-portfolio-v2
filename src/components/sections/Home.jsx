import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {


    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">

            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-900 to bg-cyan-400 bg-clip-text text-transparent leading-right">
                        Hi, I'm Phinees 
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I'm a software engineer with a passion for building web applications. I love creating beautiful and functional user experiences.
                        <br /> I am currently focused on building responsive and accessible web applications using the latest technologies.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] ">
                            View Projects
                        </a>

                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]  hover:bg-cyan-400/10">
                            Contact Me
                        </a>
                        
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}