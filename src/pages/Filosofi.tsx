import { FC } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Filosofi: FC = () => {
  return(
    <div>
      <div className="flex flex-col justify-center items-center h-fit lg:h-screen bg-gradient-to-b from-[#20463F] to-[#83AF97]">
        <Nav />
        <h1 className="font-festivalBudaya text-5xl lg:text-7xl text-white mt-20 text-center py-20 lg:py-0 lg:mt-0">FILOSOFI LOGO DAN WARNA</h1>
      </div>
      <section className="flex flex-col lg:flex-row justify-center items-center bg-[#28574e] px-16 lg:px-28 py-10">
        <div className="flex flex-col">
          <div className="font-lemonMilk text-[#f1eac3] text-3xl py-4">Kenapa Jatayu?</div>
          <div className="font-montserrat text-white mb-4">Jatayu dalam kisah Ramayana memiliki karakter yang pemberani, mengajarkan kebaikan, pembela kebenaran, dan tidak mudah menyerah.</div>
          <div className="font-montserrat text-white">Melalui Jatayu, mahasiswa FTI UAJY diharapkan dapat tumbuh menjadi pribadi yang pemberani dengan dipenuhi kebaikan untuk membela kebenaran dan pantang menyerah untuk masa depan.</div>
        </div>
        <img src="images/logo.webp" alt="logo-img" className="w-48 order-first lg:order-last"/>
      </section>
      <section className="flex flex-col lg:flex-row justify-center items-center bg-[#29665A] px-16 lg:px-28 py-10">
        <img src="images/logo-ekor.webp" alt="logo-ekor-img" className="w-48"/>
        <div className="flex flex-col lg:items-start items-center">
          <div className="font-lemonMilk text-[#f1eac3] text-3xl py-4 text-center lg:text-left">Tiga Helai Ekor</div>
          <div className="font-montserrat text-white text-center lg:text-left">Melambangkan tiga program studi yang ada di Fakultas Teknologi Industri.</div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-center items-center bg-[#28574e] px-16 lg:px-28 py-10 gap-5">
        <div className="flex flex-col lg:items-end items-center">
          <div className="font-lemonMilk text-[#f1eac3] text-3xl py-4 text-center lg:text-right">Tubuh Jatayu yang Bervariasi</div>
          <div className="font-montserrat text-white text-center lg:text-right">Melambangkan perbedaan yang dapat selaras apabila dipersatukan.</div>
        </div>
        <img src="images/logo-tubuh.webp" alt="logo-img" className="w-48 order-first lg:order-last"/>
      </section>
      <section className="flex flex-col lg:flex-row justify-center items-center bg-[#29665A] px-16 lg:px-28 py-10">
        <img src="images/logo-gear.webp" alt="logo-img" className="w-48"/>
        <div className="flex flex-col lg:items-start items-center">
          <div className="font-lemonMilk text-[#f1eac3] text-3xl py-4 text-center lg:text-left">Empat Gigi Gerigi</div>
          <div className="font-montserrat text-white text-center lg:text-left">Melambangkan Empat Pilar Keatmajayaan yang menjadi pedoman.</div>
        </div>
      </section>
      <section className="flex flex-col gap-7 justify-center items-center h-center bg-[#83AF97] lg:px-32 pt-10">
        <h1 className="font-poppins text-5xl text-white text-center">Filosofi Warna</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-7 lg:gap-32 w-3/4">
          <div className="text-center">
            <img src="images/filosofi-cokelat.webp" alt="logo-img" className="w-48 mx-auto"/>
            <div className="font-lemonMilk text-[#f1eac3] text-2xl">Cokelat</div>
            <div className="font-montserrat text-white">Melambangkan keandalan, kepercayaan, dan integritas.</div>
          </div>
          <div className="text-center">
            <img src="images/filosofi-merah.webp" alt="logo-img" className="w-48 mx-auto"/>
            <div className="font-lemonMilk text-[#f1eac3] text-2xl">Merah</div>
            <div className="font-montserrat text-white">Melambangkan keberanian dan sikap pantang menyerah.</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center w-96">
          <img src="images/filosofi-jingga.webp" alt="logo-img" className="w-48"/>
          <div className="font-lemonMilk text-[#f1eac3] text-2xl">Jingga</div>
          <div className="font-montserrat text-white">Melambangkan kreativitas dan semangat yang tinggi.</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Filosofi;