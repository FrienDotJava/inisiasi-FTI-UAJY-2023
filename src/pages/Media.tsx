import { FC } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Media: FC = () => {
  return(
    <div>
      <div className="flex flex-col justify-center items-center h-fit pt-32 pb-10 bg-gradient-to-b from-[#20463F] to-[#83AF97]">
        <Nav />
        <div className="font-festivalBudaya text-7xl text-white">MEDIA</div>
        <div className="flex flex-col lg:flex-row p-10 gap-9 justify-between w-3/4">
          <div className="flex flex-col items-center gap-3 lg:gap-6">
            <div className="font-lemonMilk text-[#f1eac3] text-2xl">TEASER</div>
            <iframe src="https://youtube.com/embed/nvOs5TDruAw"></iframe>
          </div>
          <div className="flex flex-col items-center gap-3 lg:gap-6">
            <div className="font-lemonMilk text-[#f1eac3] text-2xl">DANCE JINGGLE</div>
            <iframe src="https://youtube.com/embed/xtnbe91vhYg"></iframe>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="font-lemonMilk text-[#f1eac3] text-2xl">TWIBBON</div>
          <img src="images/materi1.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Media;