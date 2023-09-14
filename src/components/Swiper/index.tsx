import { FaArrowRight } from "react-icons/fa";
import Button from "../Button";
import Image from "next/image";
import img from "../../assets/background.png";
const SwiperPage = ({
  title,
  subTitle,
  description,
  url,
}: {
  title: string;
  subTitle: String;
  description: String;
  url: any;
}) => {
  return (
    <div className="md:bg-purpleColor">
      {/* background */}
      <div className="flex  flex-col relative lg:w-[99vw] mx-auto h-fit md:h-[60vh]">
        <div className="sm:space-y-2 md:space-y-8 h-[100%] p-6 z-20 txtShadow ">
          <p className="text-white font-black text-2xl animate-bounce ">
            {title}
          </p>

          <p className="font-semibold text-white text-md sm:text-lg md:text-xl lg:text-xl ">
            {subTitle}
          </p>
          <p className="text-white text-sm sm:text-sm md:text-lg lg:text-lg ">
            {description}
          </p>
          <div className="md:flex w-full md:w-11/12 lg:w-2/3 xl:w-1/2 gap-12 md:translate-y-[200px] space-y-2 md:space-y-0 mx-0 ">
            <Button
              text="View Academic Structure"
              className="bg-purpleColor md:p-4  xl:px-12 px-4 sm:px-14 rounded-lg text-white p-2 "
              icon={<FaArrowRight />}
            />
            <Button
              text="Student or Staff? Use Portal"
              className="text-purpleColor md:p-4 xl:px-16 p-2 sm:px-16 px-6 rounded-lg bg-[#D9D9D9]  border border-purpleColor"
            />
          </div>
        </div>
        <div className="absolute w-[100%] h-[122%] ">
          <Image
            src={url}
            alt="image"
            fill
          />
        </div>
      </div>
      <div className="h-32 w-full hidden sm:block"></div>
    </div>
  );
};
export default SwiperPage;
