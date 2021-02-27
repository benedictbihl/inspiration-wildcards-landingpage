import React from "react";

interface ITestimonial {
  className: string;
  image: string;
  text: string;
  job: string;
}
const Testimonial: React.FC<ITestimonial> = ({
  className,
  image,
  text,
  job
}) => {
  return (
    <div className={className}>
      <img src={image} alt="reviewer" className="w-2/3" />
      <div className="flex py-4">
        <img className="px-1" src="/icon/star.svg" alt="star icon" />
        <img className="px-1" src="/icon/star.svg" alt="star icon" />
        <img className="px-1" src="/icon/star.svg" alt="star icon" />
        <img className="px-1" src="/icon/star.svg" alt="star icon" />
        <img className="px-1" src="/icon/star.svg" alt="star icon" />
      </div>
      <div className="italic font-light self-start">{`"${text}"`}</div>
      <div className="self-start">{job}</div>
    </div>
  );
};

export default Testimonial;
