import { FC } from "react";
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Timeline } from "flowbite-react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/bundle";
import { HiCalendar } from "react-icons/hi";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import AnimateShow from "../components/AnimateShow";

const customTheme: CustomFlowbiteTheme = {
  timeline: {
    item: {
      point: {
        line: "h-0.5 w-full bg-[#20463F] sm:flex",
        marker:{
          icon: {
              base: 'h-3 w-3 text-[#20463F] dark:text-cyan-300',
              wrapper: 'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#83AF97] ring-8 ring-[#20463F] dark:bg-cyan-900 dark:ring-gray-900',
          },
        },
        vertical: ""
      },
    },
  },
};

const day1 = new Date("2023-08-30");
const day2 = new Date("2023-09-01");
const day3 = new Date("2023-09-02");
const end = new Date("2023-09-03");
const current = new Date();

const line1 = "MAHISA SAHITYA"
const line2 = "PRAJA MUDA"

const sentence = {
  hidden: { opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.22,
    },
  },
}
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const Home: FC = () => {
  return (
    <div className="overflow-x-hidden">
      <motion.div 
        className="h-screen w-full bg-[url('/images/header.png')] bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}>
        <Nav />
        <header className="flex flex-col items-center justify-center text-center h-screen">
          <motion.h1
            className="font-festivalBudaya text-7xl mt-12 text-white tracking-wider leading-relaxed"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
            <br />
            {line2.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}

          </motion.h1>
        </header>
      </motion.div>
      <section className="h-fit bg-[#83AF97]">
        <AnimateShow className="flex flex-col h-screen items-center justify-center text-center">
          <h2 className="font-lemonMilk text-7xl text-[#f1eac3]">TIMELINE</h2>
          <div className="w-3/4 h-fit mx-auto mt-20 hidden lg:block">
            <Flowbite theme={{ theme: customTheme }}>
              <Timeline horizontal>
                <Timeline.Item className={'w-2/3 ' + (day1.getTime() < current.getTime() && current.getTime() < day2.getTime() ? 'animate-pulse' : '') }>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content className="mt-6">
                    <Timeline.Title className="font-festivalBudaya text-5xl text-[#20463F]">
                      Day 1
                    </Timeline.Title>
                    <Timeline.Body className="font-poppins text-2xl text-[#20463F]">
                      28 Agustus 2023
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item className={'w-2/3 ' + (day2.getTime() < current.getTime() && current.getTime() < day3.getTime() ? 'animate-pulse' : '') }>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content className="mt-6">
                    <Timeline.Title className="font-festivalBudaya text-5xl text-[#20463F]">
                      Day 2
                    </Timeline.Title>
                    <Timeline.Body className="font-poppins text-2xl text-[#20463F]">
                      29 Agustus 2023
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item className={'w-2/3 ' + (day3.getTime() < current.getTime() && current.getTime() < end.getTime() ? 'animate-pulse' : '') }>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content className="mt-6">
                    <Timeline.Title className="font-festivalBudaya text-5xl text-[#20463F]">
                      Day 3
                    </Timeline.Title>
                    <Timeline.Body className="font-poppins text-2xl text-[#20463F]">
                      30 Agustus 2023
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              </Timeline>
            </Flowbite>
          </div>
          <div className="w-3/4 h-fit ml-32 mt-20 lg:hidden">
            <Flowbite theme={{ theme: customTheme }}>
              <Timeline>
                <Timeline.Item className={'w-2/3 mb-20' + (day1.getTime() < current.getTime() && current.getTime() < day2.getTime() ? 'animate-pulse' : '') }>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content className="mt-6">
                    <Timeline.Title className="font-festivalBudaya text-5xl text-[#20463F]">
                      Day 1
                    </Timeline.Title>
                    <Timeline.Body className="font-montserrat text-2xl text-[#20463F]">
                      28 Agustus 2023
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item className={'w-2/3 mb-20' + (day2.getTime() < current.getTime() && current.getTime() < day3.getTime() ? 'animate-pulse' : '') }>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content className="mt-6">
                    <Timeline.Title className="font-festivalBudaya text-5xl text-[#20463F]">
                      Day 2
                    </Timeline.Title>
                    <Timeline.Body className="font-montserrat text-2xl text-[#20463F]">
                      29 Agustus 2023
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item className={'w-2/3 mb-20' + (day3.getTime() < current.getTime() && current.getTime() < end.getTime() ? 'animate-pulse' : '') }>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content className="mt-6">
                    <Timeline.Title className="font-festivalBudaya text-5xl text-[#20463F]">
                      Day 3
                    </Timeline.Title>
                    <Timeline.Body className="font-montserrat text-2xl text-[#20463F]">
                      30 Agustus 2023
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              </Timeline>
            </Flowbite>
          </div>
        </AnimateShow>
      </section>
      <section className="bg-[#83AF97]">
        <AnimateShow className="flex flex-col h-fit lg:h-screen items-center justify-start text-center">
          <h2 className="font-lemonMilk text-7xl text-[#f1eac3]">MATERI</h2>
          <Swiper
            slidesPerView="auto"
            breakpoints={{
              1024:{
                slidesPerView: 3,
              }
            }}
            autoplay={{ delay: 2000 }}
            centeredSlides
            className="mySwiper w-3/4 my-12"
            coverflowEffect={{
              rotate: 0,
              stretch: -50,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            effect="coverflow"
            grabCursor={false}
            modules={[EffectCoverflow, Autoplay]}
            
          >
            <SwiperSlide>
              <img src="images/materi1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/materi1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/materi1.jpg" />
            </SwiperSlide>
          </Swiper>
        </AnimateShow>
      </section>
      <section className="h-fit pb-14 bg-[#83AF97] flex flex-col h-fit items-center justify-start text-center">
        <AnimateShow className="font-lemonMilk text-5xl mt-20 lg:mt-0 lg:text-6xl text-[#f1eac3]">YANG HARUS KAMU LAKUKAN</AnimateShow>
        <div className="flex flex-col gap-16 mt-10">
          <AnimateShow className="">
            <motion.a 
              className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10" 
              href="/panitia"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <img src="/images/materi1.jpg" alt="" />
              <h3 className="font-montserrat text-4xl lg:text-5xl text-white ">Mengenal panitia</h3>
            </motion.a>
          </AnimateShow>
          <AnimateShow className="">
            <motion.a 
              className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10" 
              href="#"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <img src="/images/materi1.jpg" alt="" />
              <h3 className="font-montserrat text-4xl lg:text-5xl text-white lg:order-first">Memahami buku suci</h3>
            </motion.a>
          </AnimateShow>
          <AnimateShow className="">
            <motion.a 
              className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10" 
              href="/atribut"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <img src="/images/materi1.jpg" alt="" />
              <h3 className="font-montserrat text-4xl lg:text-5xl text-white">Atribut pakaian</h3>
            </motion.a>
          </AnimateShow>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
