import React, { useContext, useEffect, useState } from "react";
import { CarouselContext, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel: React.FC = () => {
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

  return (
    <>
      <Slider className="max-w-screen w-full md:w-8/12 mx-auto mt-12 md:mt-0">
        <Slide index={0}>
          <Image
            className="styled-carousel-slide-img"
            hasMasterSpinner
            src="/img/carousel/01_cards_box_ad_01.png"
          />
        </Slide>
        <Slide index={1}>
          <Image
            className="styled-carousel-slide-img"
            hasMasterSpinner
            src="/img/carousel/02_810A2085++.png"
          />
        </Slide>
        <Slide index={2}>
          <Image
            className="styled-carousel-slide-img"
            hasMasterSpinner
            src="/img/carousel/03_810A2088++.png"
          />
        </Slide>
        <Slide index={3}>
          <Image
            className="styled-carousel-slide-img"
            hasMasterSpinner
            src="/img/carousel/04_810A2078++.png"
          />
        </Slide>
        <Slide index={4}>
          <Image
            className="styled-carousel-slide-img"
            hasMasterSpinner
            src="/img/carousel/05_810A2075++.png"
          />
        </Slide>
      </Slider>
    </>
  );
};

export default Carousel;
