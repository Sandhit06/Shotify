"use client";
import { motion } from "framer-motion";

import { ArrowRight, Download } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Form = () => {
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY as string;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setProgress(0);


    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + Math.random() * 10; // Randomly increment progress
      });
    }, 200);


    const url = (e.currentTarget[0] as HTMLInputElement).value;
    const res = await fetch(
      `https://api.apiflash.com/v1/urltoimage?access_key=${accessKey}&url=${url}&width=1920&height=1080&quality=100&no_cookie_banners=true&no_ads=true&no_tracking=true`
    );
    if (res.ok) {
      const blob = await res.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImageUrl(imageUrl);
    } else {
      console.error("Failed to fetch image");
    }
    clearInterval(interval); // Stop the fake progress interval
    setProgress(100);         // Force to 100% when done

    setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 500);
  };

  const download = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "snap.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>

      <form
        onSubmit={handleSubmit}
        className="flex z-20 gap-6 sm:gap-4 w-full max-w-2xl pt-5 px-2 items-center justify-center flex-wrap md:flex-nowrap"
      >
        <input
          className="bg-yellow-300 backdrop-blur-md  outline-none font-medium text-base  text-black py-2 px-3 rounded-lg w-full placeholder:text-black"

          required
          type="url"
          placeholder="Enter a URL"
        />
        <button
          className="bg-white/10 backdrop-blur-md border border-yellow-300 focus:ring-2 focus:ring-yellow-400 backdrop-blur-md inline-flex gap-2  items-center text-lg outline-none  font-medium rounded-lg px-5 py-1.5 text-center max-w-lg justify-center hover:brightness-110"
          type="submit"
        >
          {loading && (
            <div
              style={{ width: `${progress}%` }}
              className="absolute left-0 top-0 h-full bg-yellow-300 opacity-30 transition-all duration-300"
            ></div>
          )}
          {/* Button Text */}
          <div className="relative z-10 flex items-center gap-2 justify-center">
            {loading ? `${Math.round(progress)}%` : "Snap"}
            {!loading && <ArrowRight size={16} className="mt-0.5" />}
          </div>
        </button>
      </form>

      {imageUrl && (
        <div className="z-30 max-w-4xl rounded-xl w-full flex flex-col gap-11 items-center justify-center mt-8 hover-container">
          <button
            onClick={download}
            className="text-white inline-flex gap-2 items-center text-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br outline-none border-none font-medium rounded-lg px-5 py-1.5 text-center max-w-lg justify-center hover:scale-105 hover:brightness-110 transition-all duration-300"
          >
            Download HD<Download size={16} className="mt-0.5" />
          </button>

          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={imageUrl}
            className="max-w-4xl rounded-xl mb-10"
            width={800}
            height={500}
            alt="Snap"
            style={{ boxShadow: "0 0 20px #87CEEB50" }}
          />
        </div>
      )}
    </>
  );
};

export default Form;
