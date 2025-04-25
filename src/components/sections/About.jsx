import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {


    const frontendSkills = ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript"];
    const backendSkills = ["Node.js", "Java", "MongoDB", "PostgreSQL", "Python", "REST APIs"];

    return(
    <section id="about" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I am a dedicated Software Engineer with expertise in full-stack development, cloud computing, and cybersecurity. My passion lies in designing and implementing scalable, secure, and efficient solutions that address real-world challenges. With a strong foundation in modern frameworks like React and backend technologies, I enjoy building end-to-end applications. I am also deeply interested in leveraging cloud platforms to optimize performance and ensure robust security practices in all my projects.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech,key) => (
                                    <span  key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech,key) => (
                                    <span  key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 👨‍🎓 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">

                            <li>
                                <strong>Computer Engineering-computing Scince</strong> - Algonquin College (2024 - Present)
                            </li>
                            <li>
                                Relevant CourseWork: Data Structures and Algorithms, Processor Architecture, Web Development, Database Management Systems, Operating Systems.
                            </li>
                        </ul> 
                        <br />

                        <ul className="list-disc list-inside text-gray-300 space-y-2">

                            <li>
                                <strong>B.s. in Computer Engineering</strong> - University of Ottawa (2021 - 2024) / incomplete (3 of 4 years completed)
                            </li>
                            <li>
                                Relevant CourseWork: Data Structures and Algorithms, Software Engineering, Web Development, Database Management Systems, Operating Systems.
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> Software Engineer at ABC Corp (2024-Present)</h4>
                                <p>
                                    - Developed and maintained web applications using React and Node.js, improving performance by 30%.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold"> Intern at DEF startup (2025)</h4>
                                <p>
                                    - Assisted in the development of a cloud-based application using AWS, reducing deployment time by 50%.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
    );
}