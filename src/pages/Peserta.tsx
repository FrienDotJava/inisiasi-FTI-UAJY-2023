import { FC } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Button } from "flowbite-react";

const Peserta: FC = () => {
  return(
    <div>
      <div className="flex flex-col gap-6 justify-center h-fit bg-gradient-to-b from-[#20463F] to-[#83AF97]">
        <Nav />
        <div className="font-festivalBudaya text-5xl lg:text-7xl text-white text-center mt-32">PEMBAGIAN KELOMPOK</div>
        {/* <div className="font-festivalBudaya text-7xl text-white text-center">&</div>
        <div className="font-festivalBudaya text-7xl text-white text-center">Kelulusan</div> */}
      </div>
      <div className="flex justify-center items-center bg-[#83AF97] py-10">
        <Button size="xl" color="success" className="font-montserrat text-xl font-bold text-white">CEK PEMBAGIAN KELOMPOK</Button>
      </div>
      {/* <div className="flex flex-col justify-center items-center h-screen bg-[#83AF97] gap-10">
        <div className="font-poppins text-5xl font-bold text-white">PENGUMUMAN KELULUSAN INISIASI</div>
        <Button gradientDuoTone="greenToBlue" size="xl"><span className="font-poppins text-xl font-bold text-white">CEK DI SINI</span></Button>
      </div> */}
      <Footer />
    </div>
  );
}

export default Peserta;