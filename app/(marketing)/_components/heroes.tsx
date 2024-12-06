import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[500px] h-[500px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/documents.svg"
            fill
            className="object-contain"
            alt="Documents"
          />
        </div>
        {/* <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image
            src="/reading.jpg"
            fill
            className="object-contain"
            alt="Reading"
          />
        </div> */}
      </div>
    </div>
  );
};
export default Heroes;
