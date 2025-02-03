import Image from "next/image";

export default function CountryFlag({imageSource = "/globe.svg", imageDetail = ""}) {
  return (
    <div className="border border-red-400 rounded-lg w-full flex flex-col justify-center items-center gap-4 min-h-[500px]">
      <Image
        className="border border-black"
        src={imageSource}
        alt="FLAG"
        height={400}
        width={400}
      />
      <p className="w-96 text-center">
        {imageDetail}
      </p>
    </div>
  );
}
