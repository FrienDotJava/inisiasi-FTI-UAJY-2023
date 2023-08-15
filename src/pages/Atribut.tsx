import { FC } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Card } from "flowbite-react";

const Atribut: FC = () => {
  return(
    <div>
      <div className="flex flex-col justify-center items-center h-fit pt-32 bg-gradient-to-b from-[#20463F] to-[#83AF97]">
        <Nav />
        <div className="flex flex-row gap-10 w-3/4 justify-center items-center">
          <h1 className="font-festivalBudaya text-5xl lg:text-7xl text-white py-10">ATRIBUT</h1>
        </div>
      </div>
      <section className="flex flex-col gap-7 justify-center items-center h-center bg-[#83AF97] px-32">
        <Card className="w-3/4 bg-[#28574e] border-0">
          <div className="font-lemonMilk text-3xl text-white">DAY 1</div>
          <div className="bg-[#296e61] text-white p-3 rounded-md font-montserrat">
            <div>
              <ol className="list-decimal ml-4">
                <li>Sepatu dominan hitam</li>
                <li>Atasan putih</li>
                <li>Celana kain hitam</li>
              </ol>
            </div>
          </div>
        </Card>
        <Card className="w-3/4 bg-[#28574e] border-0">
          <div className="font-lemonMilk text-3xl text-white">DAY 2</div>
          <div className="bg-[#296e61] text-white p-3 rounded-md font-montserrat">
            <div>
              <ol className="list-decimal ml-4">
                <li>Sepatu dominan hitam</li>
                <li>Atasan putih</li>
                <li>Celana kain hitam</li>
              </ol>
            </div>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
}

export default Atribut;