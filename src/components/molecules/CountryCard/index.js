import SeachIcons from "@/components/atoms/Icons/SearchIcon";

export default function Card({name}) {

  return (
    <div className="rounded-md  w-full border flex flex-col">
      <div className="bg-slate-100 text-black p-2 flex justify-between rounded-t-md border-b">
        <div className="">
          <p>{name.common}</p>
          <p className="text-gray-500 text-sm">
            {Object.values(name.nativeName?? [])[0]?.common}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white p-2 rounded border">
            <SeachIcons />
          </div>
        </div>
      </div>
      {/* <div className=" w-full flex-1 flex flex-col">
        <div className="w-full flex-1 max-h-14 border-b">

        </div>
      </div> */}
    </div>
  );
}
