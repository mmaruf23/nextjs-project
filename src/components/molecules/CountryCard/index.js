import SeachIcons from "@/components/atoms/Icons/SearchIcon";
import Link from "next/link";

export default function Card({name, cca3}) {

  return (
    <div className="rounded-md  lg:min-w-[231px] border flex flex-col">
      <div className="bg-slate-100 text-black p-2 gap-5 flex justify-between rounded-t-md border-b">
        <div className="">
          <p>{name.common}</p>
          <p className="text-gray-500 text-sm">
            {Object.values(name.nativeName?? [])[0]?.common}
          </p>
        </div>
        <Link href={`/countries/${cca3}`}>
        <div className="flex justify-center items-center">
          <div className="bg-white p-2 rounded border">
            <SeachIcons />
          </div>
        </div>
        </Link>
      </div>
      {/* <div className=" w-full flex-1 flex flex-col">
        <div className="w-full flex-1 max-h-14 border-b">

        </div>
      </div> */}
    </div>
  );
}
