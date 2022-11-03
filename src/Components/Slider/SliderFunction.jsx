import React,{useState,useEffect} from "react";
import "../../Styles/Components.css";
import { Box, Center, Image } from "@chakra-ui/react";
import SliderPics from "./SliderPics";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
export default function SliderFunction() {
  const [current, setCurrent] = useState(0);
  const slides = SliderPics;
  const length = SliderPics.length;
  let interval;
  useEffect(() => {
    interval = setTimeout(() => {
      autoSlideNext();
    }, 3000);
  }, [current])

  const autoSlideNext = ()=> {
    clearTimeout(interval);
    nextSlide();
  }
  

  const nextSlide = () => {
    clearTimeout(interval);
    setCurrent(current === length - 1 ? 0 : current + 1);
    
  };
  const prevSlide = () => {
    clearTimeout(interval);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <Box className="slider">
      <ArrowLeftIcon className="left-arrow" onClick={prevSlide} />
      <ArrowRightIcon className="right-arrow" onClick={nextSlide} />
      {slides.map((item, index) => {
        return (
          <Center className={index === current ? 'slide active' : 'slide'}
          key={index} >
            {index === current && (
              <Image bg="#0f0617" src={item.image} alt='travel image' className='image' />
            )}
          </Center>
        );
      })}
    </Box>
  );
}
