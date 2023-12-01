import CourseCard from "./CourseCard";

let course = [1, 5, 5];

const Course = () => {
  return (
    <section className="flex w-full justify-center items-center gap-8 bg-[#F5F1EB] my-14">
      {course.map((item) => (
        <CourseCard key={item} />
      ))}
    </section>
  );
};

export default Course;
