import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Text, Button, Img } from "components";


const Modal = ({ children, active, setActive }) => {
  const images = [
    'images/img_rectangle10.png',
    'images/img_rectangle11.png',
    'images/img_rectangle12.png',
    'images/img_rectangle13.png',
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={"bg-white-A700 flex flex-col font-sourcesanspro items-center justify-start max-w-[1221px] mx-auto p-[17px] md:px-5 rounded-[50px] sm:rounded-[0px] w-full" + (active ? " modal__content active" : " modal__content")} onClick={(e) => e.stopPropagation()}>
          <div className="items-center justify-start px-[10px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start md:mt-0 mt-[15px]">
                <div className='close-text'>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtSourceSansProSemiBold32"
                  >
                    Клуб настольных и сюжетно-ролевых игр «Воины света»
                  </Text>
                  <div className="hidden md:flex items-center justify-start ml-5 md:ml-[0] md:mt-0 mt-[13px] w-6 md:w-[10px]" onClick={() => setActive(false)}>
                    <Img
                      className="h-[25px] w-6"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  </div>
                </div>
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtSourceSansProRegular20"
                >
                  Уютная атмосфера, куча настольных игр, мастера по Dungeons &
                  Dragons, библиотека, как культовых, так и самых нашумевших
                  фэнтези книг и графических романов, горячий чай и самые
                  вкусные печеньки. Будь участником настольных ролевых игр,
                  ролевых балов, въездов на крупные ролевые игры. Каждую неделю
                  тебя ждет сюжетная ролевая игра.
                </Text>
              </div>
              <Img
                className="md:hidden h-[189px] sm:h-auto ml-16 md:ml-[0] object-cover rounded-[85px] w-[15%] md:w-full"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <div className="flex flex-col items-center justify-start ml-5 md:hidden md:ml-[0] md:mt-0 mt-[13px] w-6 md:w-full">
                <Img
                  className="h-[25px] w-6"
                  src="images/img_close.svg"
                  alt="close"
                />
              </div>
            </div>
            <div >
            <Carousel responsive={responsive} infinite="true" className='mt-[46px]'>
              {images.map((image, index) => (
                <img
                  key={index}
                  className="h-[212px] md:h-[200px] sm:h-[200px] object-cover rounded-[20px] w-[90%] sm:w-[100%]"
                  src={image}
                  alt={`image_${index}`}
                />
              ))}
            </Carousel>
            </div>
            <div className="flex flex-col items-start justify-start mt-[46px] w-[92%] md:w-full">
              <Text
                className="text-black-900 text-xl"
                size="txtSourceSansProRegular20"
              >
                <span className="text-black-900 font-sourcesanspro text-left font-normal">
                  Руководитель:
                </span>
                <span className="text-light_blue-800 font-sourcesanspro text-left font-normal">
                  {" "}
                </span>
                <span className="text-light_blue-800 font-sourcesanspro text-left font-normal">
                  Владислав Трюфилькин
                </span>
              </Text>
              <Text
                className="mt-1 text-black-900 text-xl"
                size="txtSourceSansProRegular20"
              >
                Расположение в университете: библиотека
              </Text>
              <div className="flex flex-row font-inter md:gap-10 items-start justify-between md:ml-[0] ml-[33px] mt-[18px] w-[103%] md:w-full">
                <Img
                  className="h-[62px] w-[62px]"
                  src="images/img_entyposocialvkwithcircle.svg"
                  alt="entyposocialvkw"
                />
                <Button className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[244px] text-center text-xl" variant="blue">
                  Вступить
                </Button>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
};
export { Modal };