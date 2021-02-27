import React, { useContext, useEffect, useState } from "react";
import { CarouselContext, Slider, Slide } from "pure-react-carousel";
import { testimonials, Testimonial } from "../../util/testimonials";
import { shuffle, chunked_array } from "../../util/helper";
import "pure-react-carousel/dist/react-carousel.es.css";
import TestimonialComponent from "./Testimonial";
import i18next from "i18next";

const shuffledTestimonials: Testimonial[] = shuffle(testimonials);

const TestimonialCarousel = () => {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  );
  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  const slideContents = () => {
    console.log(chunked_array(shuffledTestimonials, 3));
    return chunked_array(shuffledTestimonials, 3).map((testimonials, index) => {
      {
        return (
          <Slide
            key={index}
            className="styled-carousel-slide__testimonials"
            index={index}
          >
            {testimonials.map((testimonial: Testimonial, index: number) => {
              return (
                <TestimonialComponent
                  className="w-1/3 flex flex-col items-center justify-end px-10"
                  key={index}
                  image={testimonial.image}
                  text={i18next.t(testimonial.text)}
                  job={i18next.t(testimonial.job)}
                />
              );
            })}
          </Slide>
        );
      }
    });
  };

  return (
    <Slider className="max-w-screen w-full md:w-11/12 mx-auto mt-12 md:mt-0">
      {slideContents()}
    </Slider>
  );
};

export default TestimonialCarousel;
