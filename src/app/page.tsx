import Footer from "@/components/shared/Footer";
import Form from "@/components/shared/Form";

export default function Home() {
  return (
    <>
      <div className="min-h-screen absolute w-full bg-black bg-grid-white/5 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="min-h-screen px-4 sm:px-16 w-full flex flex-col items-center pt-16 overflow-hidden">
        <div className="shiny-yellow-text relative">
          <h1 className="text-5xl lg:text-7xl pb-2 font-bold text-center ">
            Shotify v.1.0
          </h1>
        </div>
        <div className="w-[42rem] h-5 relative mt-2">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#ffe400] to-transparent h-[2px] w-3/4 blur-sm animate-pulse"></div>
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#ffe400] to-transparent h-px w-3/4"></div>
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#ffe400] to-transparent h-[6px] w-1/4 blur-sm animate-pulse"></div>
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#ffe400] to-transparent h-px w-1/4"></div>
        </div>

        <p className="text-center text-base font-medium relative z-20 text-white max-w-prose p-4">
          Shotify makes capturing website screenshots effortless. Simply enter the URL, hit the Snap button, and instantly download your screenshot — quick and easy!
        </p>
        <Form />
      </div>

      <Footer />
    </>
  );
}
