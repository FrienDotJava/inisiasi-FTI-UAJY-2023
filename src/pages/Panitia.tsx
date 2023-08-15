import { FC } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Navigation, Pagination,} from "swiper/modules";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/bundle";

const Panitia: FC = () => {
  return(
    <div>
      <div className="flex flex-col justify-center items-center gap-8 h-fit pt-32 bg-gradient-to-b from-[#20463F] to-[#83AF97]">
        <Nav />
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="font-festivalBudaya text-white text-5xl lg:text-7xl">PANITIA INISIASI</div>
          <div className="font-festivalBudaya text-white text-5xl lg:text-7xl">FTI UAJY 2023</div>
        </div>
      </div>
      <section className="flex flex-col h-screen gap-5 justify-center items-center bg-[#83AF97] px-16 lg:px-0">
        <div className="font-lemonMilk text-2xl lg:text-3xl text-[#f1eac3] text-center">PENGURUS HARIAN & STEERING COMITTEE</div>
        <Swiper
        slidesPerView="auto"
        breakpoints={{
          1024:{
            slidesPerView: 3,
          }
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-3/4 "
        centeredSlides
        navigation
        style={{
          "--swiper-navigation-color" : "#20463F"
        } as React.CSSProperties}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper>
      </section>
      <Footer />
    </div>
  );
}

export default Panitia;