import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="p-2  pb-20  container mx-auto h-full mt-10  ">
      <h2 className="text-center text-gray-500 font-bold text-5xl mb-14">Our story</h2>
      <section className="flex flex-col-reverse gap-10 md:flex-row-reverse justify-between items-center md:gap-[4%] ">
        <div className="w-[80%] md:max-w-[50%] md:w-[48%]">
          <h2 className="text-4xl mb-7">Built in the EU</h2>
          <p className="text-gray-400 text-xl">
            Maildroppa is based in Germany, Europe so we ve got GDPR compliance
            enabled by default. You can easily turn it off for just non-EU users
            or even customize it to your unique data policy. Talking of data, we
            ve got some pretty neat privacy-first options too!
          </p>
        </div>
        <div className="w-[80%] md:max-w-[50%] md:w-[48%]">
          <Image
            src="/maildroppa-about-us-built-in-eu.svg"
            alt=""
            width={800}
            height={450}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
