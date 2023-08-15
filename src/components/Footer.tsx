import { FC } from "react";
import { motion } from "framer-motion";
import { SiInstagram, SiLine, SiGmail } from "react-icons/si";

const Footer: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <footer className="hidden lg:block relative flex h-0 flex-col items-center justify-center w-full pt-[71.72%] bg-[#83AF97] bg-[url('/images/footer.png')] bg-contain bg-center bg-no-repeat">
        <div className="absolute bottom-10 flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-20 justify-center px-20">
            <div className="flex flex-col gap-2">
              <div className="font-lemonMilk text-3xl">
                INISIASI FTI UAJY 2023
              </div>
              <div className="font-montserrat text-sm">
                FAKULTAS TEKNOLOGI INDUSTRI
              </div>
              <div className="font-montserrat text-sm">
                UNIVERSITAS ATMA JAYA YOGYAKARTA
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-lemonMilk text-3xl">Sosial Media</div>
              <a
                href="https://www.instagram.com/inisiasi_ftiuajy/"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiInstagram />
                Instagram
              </a>
              <a
                href="#"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiLine />
                Line
              </a>
              <a
                href="#"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiGmail />
                Gmail
              </a>
            </div>
            <div className="flex flex-col gap-2 ">
              <img src="/images/map.png" alt="peta-img" className="w-1/2" />
              <div className="font-montserrat">Jalan Babarsari No Berapa ya</div>
            </div>
          </div>
          <div className="col-span-full border-t-2 border-black/20" />
          <div className="col-span-full text-center font-montserrat text-sm opacity-80">
            ©2023 by Muldok & IT Inisiasi FTI UAJY 2023. All rights reserved.
          </div>
        </div>
      </footer>
      <div className="lg:hidden">
        <footer className="relative flex h-0 flex-col items-center justify-center w-full pt-[71.72%] bg-[#83AF97] bg-[url('/images/footer.png')] bg-contain bg-center bg-no-repeat">
        </footer>
        <div className="bg-[#66ccee]">
          <div className="flex flex-col gap-10 justify-center px-20">
            <div className="flex flex-col gap-2">
              <div className="font-lemonMilk text-3xl">
                INISIASI FTI UAJY 2023
              </div>
              <div className="font-montserrat text-sm">
                FAKULTAS TEKNOLOGI INDUSTRI
              </div>
              <div className="font-montserrat text-sm">
                UNIVERSITAS ATMA JAYA YOGYAKARTA
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-lemonMilk text-3xl">Sosial Media</div>
              <a
                href="https://www.instagram.com/inisiasi_ftiuajy/"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiInstagram />
                Instagram
              </a>
              <a
                href="#"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiLine />
                Line
              </a>
              <a
                href="#"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiGmail />
                Gmail
              </a>
            </div>
            <div className="flex flex-col gap-2 ">
              <img src="/images/map.png" alt="peta-img" className="w-1/2 mx-auto" />
              <div className="font-montserrat">Jalan Babarsari No Berapa ya</div>
            </div>
          </div>
          <div className="col-span-full border-t-2 border-black/20" />
          <div className="col-span-full text-center font-montserrat text-sm opacity-80">
            ©2023 by Muldok & IT Inisiasi FTI UAJY 2023. All rights reserved.
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Footer;
