import { FC } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Card } from "flowbite-react";

const Tugas: FC = () => {
  return(
    <div>
      <div className="flex flex-col justify-center items-center h-fit bg-gradient-to-b from-[#20463F] to-[#83AF97]">
        <Nav />
        <div className="flex flex-row gap-10 w-3/4 justify-center items-center mt-32">
          <h1 className="font-festivalBudaya text-5xl lg:text-7xl text-white">TUGAS</h1>
        </div>
      </div>
      <section className="flex flex-col gap-7 justify-center items-center h-center bg-[#83AF97] lg:px-32 py-10">
        <Card className="w-3/4 bg-[#28574e] border-0">
          <div className="font-lemonMilk text-3xl text-white">TUGAS 1</div>
          <div className="bg-[#296e61] text-white p-3 rounded-md font-montserrat">
            <div className="text-white text-xl font-bold">Deskripsi Tugas</div>
            <div>
              <ol className="list-decimal ml-4">
                <li>Membuat yel-yel kelompok</li>
                <li>Yel-yel maksimal 30 detik</li>
              </ol>
            </div>
          </div>
        </Card>
        <Card className="w-3/4 bg-[#28574e] border-0">
          <div className="font-lemonMilk text-3xl text-white">TUGAS 1</div>
          <div className="bg-[#296e61] text-white p-3 rounded-md font-montserrat">
            <div className="text-white text-xl font-bold">Deskripsi Tugas</div>
            <div>
              <ol className="list-decimal ml-4">
                <li>Membuat yel-yel kelompok</li>
                <li>Yel-yel maksimal 30 detik</li>
              </ol>
            </div>
          </div>
        </Card>
        <Card className="w-3/4 bg-[#28574e] border-0">
          <div className="font-lemonMilk text-3xl text-white">TUGAS 1</div>
          <div className="bg-[#296e61] text-white p-3 rounded-md font-montserrat">
            <div className="text-white text-xl font-bold">Deskripsi Tugas</div>
            <div>
              <ol className="list-decimal ml-4">
                <li>Membuat yel-yel kelompok</li>
                <li>Yel-yel maksimal 30 detik</li>
              </ol>
            </div>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
}

export default Tugas;