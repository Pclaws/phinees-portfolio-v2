import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World />"; // The text to be displayed

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1)); // Update the text to show one more character
            index++;

            // Check if the text is fully displayed
            if (index >= fullText.length) {
                clearInterval(interval); // Clear the interval when the text is fully displayed

                setTimeout(() => {
                    onComplete(); // Call onComplete as a function
                }, 1000); // Wait for 1 second before calling onComplete
            }
        }, 100); // Adjust the speed of the typing effect (in milliseconds)

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-purple-950 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};