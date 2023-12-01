import img from "../assets/download.jpg";
import { CiClock2 } from "react-icons/ci";
import { GrChapterAdd } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const CourseCard = () => {
  const star = 5;
  const stars = Array.from({ length: 7 }, (_, index) => {
    const halfNumber = index + 0.5;

    return (
      <span key={index} className="text-[#ffb900] text-[.25rem] mr-1">
        {star >= index + 1 ? (
          <BsStarFill size="14px" />
        ) : star >= halfNumber ? (
          <BsStarHalf size="14px" />
        ) : (
          <BsStar size="14px" />
        )}
      </span>
    );
  });

  return (
    <section className="w-[350px]">
      <div className="relative">
        <img className="w-full object-cover rounded-t-md" src={img} alt="" />
        <span className="absolute top-2 right-3 bg-[#F8B720] p-1 px-2 text-white rounded-sm flex items-center justify-center font-semibold gap-1">
          <CiClock2 size="15px" /> 3 Weeks
        </span>
      </div>

      <div className="bg-white px-4 py-3">
        <p className="bg-green-100 inline p-2 rounded-md text-green-600 font-semibold">
          Beginner
        </p>
        <h1 className="text-xl font-bold my-3">
          Build Responsive Real- World Websites with HTML and CSS
        </h1>

        <div className="flex items-center gap-3 mb-3">
          <div className="flex">{stars}</div>{" "}
          <span className="font-semibold tracking-wide">(5.0/7 Ratings)</span>
        </div>
        <p className="text-red-400 font-bold">$29.00</p>
        <div className="flex items-center gap-8 my-4">
          <span className="flex items-center justify-center gap-2">
            <GrChapterAdd /> 8 Lessons
          </span>
          <span className="flex items-center justify-center gap-2">
            <PiStudent /> 20 Students
          </span>
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
