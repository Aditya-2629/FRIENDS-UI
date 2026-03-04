import { useEffect, useState } from "react";

const messages = [
"🤖 Analyzing your prompt...",
"🧠 Designing layout...",
"🎨 Generating styles...",
"⚡ Optimizing UI...",
"🚀 Building components..."
];

export default function AIThinking() {

const [index, setIndex] = useState(0);

useEffect(() => {

const interval = setInterval(() => {
  setIndex((prev) => (prev + 1) % messages.length);
  }, 1500);

  return () => clearInterval(interval);

  }, []);

  return (
  <div className="flex flex-col items-center justify-center h-full text-gray-300">

    <div className="animate-pulse text-xl mb-4">
        {messages[index]}
          </div>

            <div className="w-40 h-1 bg-gray-700 rounded overflow-hidden">
                <div className="h-full bg-blue-500 animate-pulse"></div>
                  </div>

                  </div>

                  );
                  }