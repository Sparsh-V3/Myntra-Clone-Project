import { useState, useEffect } from "react";
import "./slider.css";

function Slider() {
  const slides = {
    s1: [
      "assets/sliderContent/1/s1.jpg",
      "assets/sliderContent/1/s2.jpg",
      "assets/sliderContent/1/s3.jpg",
      "assets/sliderContent/1/s4.jpg",
      "assets/sliderContent/1/s5.jpg",
      "assets/sliderContent/1/s6.jpg",
      "assets/sliderContent/1/s7.jpg",
    ],
    s2: [
      "assets/sliderContent/2/s1.jpg",
      "assets/sliderContent/2/s2.jpg",
      "assets/sliderContent/2/s3.jpg",
      "assets/sliderContent/2/s4.jpg",
      "assets/sliderContent/2/s5.jpg",
      "assets/sliderContent/2/s6.webp",
      "assets/sliderContent/2/s7.jpg",
    ],
    s3: [
      "assets/sliderContent/3/s1.jpg",
      "assets/sliderContent/3/s2.webp",
      "assets/sliderContent/3/s3.jpg",
      "assets/sliderContent/3/s4.webp",
      "assets/sliderContent/3/s5.jpg",
      "assets/sliderContent/3/s6.webp",
      "assets/sliderContent/3/s7.jpg",
    ],
  };

  const [currentState, setCurrentState] = useState(slides.s1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prevState) => {
        switch (prevState) {
          case slides.s1:
            return slides.s2;
          case slides.s2:
            return slides.s3;
          default:
            return slides.s1;
        }
      });
    }, 7000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // console.log(currentState);

  return (
    <div className="slider">
      <div className="imgContainer">
        {currentState.map((element, index) => {
          return (
            <div className="slide" key={index}>
              <img src={element} alt="" key={`img${index}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
