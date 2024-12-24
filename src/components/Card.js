import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((id) => id !== course.id));
      toast.warning("Like removed");
    } else {
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked successfully");
    }
  };

  return (
    <div className="bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.title} />
        <button
          className="absolute right-2 bottom-2 bg-white p-2 rounded-full"
          onClick={clickHandler}
        >
          {likedCourses.includes(course.id) ? <FcLike /> : <FcLikePlaceholder />}
        </button>
      </div>
      <div className="p-4">
        <p className="text-white text-lg font-semibold">{course.title}</p>
        <p className="text-white">
          {course.description.length > 100
            ? `${course.description.substring(0, 100)}...`
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
