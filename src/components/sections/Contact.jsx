import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'   // Import the EmailJS library for sending emails
import { useState } from "react" // Import useState hook from React



export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    }); // State to manage form data

     // Replace with your actual public key


    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, event.target, import.meta.env.VITE_PUBLIC_KEY).then((response) => {
            alert("Message sent successfully!"); // Show success message
            setFormData({ name: "", email: "", message: "" }); // Reset form data

        }).catch(() => alert("Oops! Something went wrong. Please try again.")) // Handle error if needed
    }


    return(
        <section id ="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>

                <div className="px-4 w-150">

                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch   
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name" required  value={formData.name} className="w-full bg-white/5 border border-white/10
                            rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
                            " placeholder="Name..." onChange={(event) => setFormData({...formData, name: event.target.value})}/>  
                        </div>
                        <div className="relative">
                            <input type="email" id="email" name="email" required  value={formData.email} className="w-full bg-white/5 border border-white/10
                            rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
                            " placeholder="example@gmail.com" onChange={(event) => setFormData({...formData, email: event.target.value})}/>  
                        </div>
                        <div className="relative">
                            <textarea  id="message" name="message" required rows={5} value={formData.message} className="w-full bg-white/5 border border-white/10
                            rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
                            " placeholder="Your message..." onChange={(event) => setFormData({...formData, message: event.target.value})}/>  
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 transition relative overflow-hidden
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}