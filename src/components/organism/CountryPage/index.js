import Button from "@/components/atoms/Button";
import Image from "next/image";

export default function CountryPage() {
  return (
    <div className="w-full flex flex-col gap-5 justify-center">
      <div className="flex justify-start items-center mt-16">
        <p className="text-4xl font-bold font-serif">About your country :<span className="px-5 text-5xl font-serif font-extrabold text-red-700 uppercase">Indonesia</span></p>
      </div>
      <div className="">
        <div className="h-[500px] text-lg font-semibold font-sans flex justify-around gap-5">
          <div className="border border-red-400 rounded-lg w-full p-5 flex flex-col gap-2">
            <div className="flex w-full border-b pb-3">
              <p className="w-44">Continent</p>
              <p className="w-5">:</p>
              <p className="flex-1">Asia</p>
            </div>
            <div className="flex w-full border-b pb-3">
              <p className="w-44">Region</p>
              <p className="w-5">:</p>
              <p className="flex-1">Southeast Asia</p>
            </div>
            <div className="flex w-full border-b pb-3">
              <p className="w-44">Time Zone</p>
              <p className="w-5">:</p>
              <p className="flex-1">UTC+07:00,UTC+08:00,UTC+09:00</p>
            </div>
            <div className="flex w-full border-b pb-3">
              <p className="w-44">Official Name</p>
              <p className="w-5">:</p>
              <p className="flex-1">Republic of Indonesia</p>
            </div>
            <div className="flex w-full border-b pb-3">
              <p className="w-44">Capital</p>
              <p className="w-5">:</p>
              <p className="flex-1">Jakarta</p>
            </div>
            <div className="flex w-full border-b pb-3">
              <p className="w-44">Language</p>
              <p className="w-5">:</p>
              <p className="flex-1">Indonesian</p>
            </div>
            <div className="flex w-full border-b pb-3">
              <p className="w-44">Currency Code</p>
              <p className="w-5">:</p>
              <p className="flex-1">IDR</p>
            </div>
            <div className="flex w-full border-b pb-3">
              <p className="w-44">Map</p>
              <p className="w-5">:</p>
              <p className="flex-1">https://goo.gl/maps/9gfPupm5bffixiFJ6</p>
            </div>

          </div>
          <div className="border border-red-400 rounded-lg w-full flex flex-col justify-center items-center gap-4">
            <Image className="border border-black" src={'https://countries.petethompson.net/data/flags/idn.svg'} alt="flag" height={500} width={500} />
            <p className="w-96 text-center">The flag of Indonesia is composed of two equal horizontal bands of red and white.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
