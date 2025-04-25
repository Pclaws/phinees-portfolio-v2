import { RevealOnScroll } from "../RevealOnScroll";

/**
 * The `Projects` component renders a section showcasing featured projects.
 * Each project is displayed as a card with a title, description, technologies used, 
 * and a link to view the project. The layout is responsive and adapts to different screen sizes.
 *
 * @component
 * @example
 * // Example usage:
 * <Projects />
 *
 * @returns {JSX.Element} A section containing a grid of project cards.
 *
 * @description
 * - The section has a title "Featured Projects" styled with a gradient text effect.
 * - Each project card includes:
 *   - A title (e.g., "Movie Catalogue App").
 *   - A brief description of the project.
 *   - A list of technologies used, displayed as styled badges.
 *   - A link to view the project.
 * - The cards have hover effects for interactivity, including a slight elevation and border color change.
 * - The grid layout adjusts to display one column on smaller screens and two columns on medium and larger screens.
 */
export const Projects = () => {


    return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>


                {/* This section contains a grid of project cards showcasing featured projects. Each card includes a title, description, technologies used, and a link to view the project. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shado-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Movie Catalogue App</h3>
                        <p className="text-gray-400 mb-4">A web application to browse and search for movies with detailed information.</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "Appwrite", "TailwindCss"].map((tech, key) => (
                                <span  key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center ">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project -&gt;  </a>
                        </div>
                    </div>

                    {/* This card showcases another project with a title, description, technologies used, and a link to view the project. */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shado-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Shopping Cart API</h3>
                        <p className="text-gray-400 mb-4"> Lorem ipsum dolor sit amet.</p>

                        <div>
                            {["Spring Boot", "Java", "MySql"].map((tech, key) => (
                                <span  key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center ">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project -&gt;  </a>
                        </div>
                    </div>

                    {/* This card showcases another project with a title, description, technologies used, and a link to view the project. */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shado-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Project3</h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quia.</p>

                        <div>
                            {["React", "Node.js", "Appwrite", "TailwindCss"].map((tech, key) => (
                                <span  key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center ">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project -&gt;  </a>
                        </div>
                    </div>
                    {/* This card showcases another project with a title, description, technologies used, and a link to view the project. */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shado-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Project4</h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, eos.</p>

                        <div>
                            {["React", "Node.js", "Appwrite", "TailwindCss"].map((tech, key) => (
                                <span  key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center ">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project -&gt;  </a>
                        </div>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
 );
}
    
        
           