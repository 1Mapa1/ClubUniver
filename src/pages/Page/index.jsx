import React from "react";

import { Button, Img, List, Text, LetterLast } from "components";

const Page = () => {
  return (
    <>
      <div className="bg-white-A700 font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
        <div className="font-inter md:h-[500px] h-[700px] max-w-[1360px] mx-auto w-full z-[1]">
          <Img
            className="h-[700px] md:h-[500px] m-auto object-cover w-full"
            src="images/img_121.png"
            alt="OneHundredTwentyOne"
          />
          <header className="absolute flex inset-x-[0] items-center justify-center mx-auto top-[0]">
            <div className="bg-white-A700 grid flex-row sm:gap-10 items-center justify-center p-5 rounded-bl-[20px] rounded-br-[20px] header-block">
              <Img
                className="mb-[9px] ml-1.5 sm:ml-[0] object-cover img-logo"
                src="images/img_image1.png"
                alt="imageOne"
              />
              <Text
                className="text-light_blue-800 text-logo"
                size="txtInterSemiBold20"
              >
                Клубы по интересам
              </Text>
            </div>
          </header>
        </div>
        <div className="max-w-[1360px] mt-auto mx-auto md:px-5 w-full">
          <Text
            className="mx-auto club-text text-center text-white-A700 z-[1] sm:my-[30px]"
            size="txtSourceSansProBold200"
          >
            <LetterLast>
            КЛУБЫ
            </LetterLast>
          </Text>
          <List
            className="flex flex-col gap-[42px] items-center mt-auto mx-auto w-full"
            orientation="vertical"
          >
            <div className="my-0 relative shadow-bs rounded-[20px] w-full">
              <div className="m-auto w-full">
                <Img
                  className="h-[468px] m-auto object-cover rounded-[20px] w-full md:h-[300px]"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
              </div>
              <div className="absolute flex flex-row sm:flex-col md:gap-[25px] gap-[62px] h-max inset-[0] items-start justify-center m-auto w-[86%]">
                <div className="flex sm:grid sm:grid-cols-2 flex-col sm:flex-row items-start sm:items-center justify-start">
                  <Text
                    className="sm:text-[18px] md:text-[20px] text-[3em] text-white-A700 w-full"
                    size="txtSourceSansProBold48"
                  >
                    Клуб настольных и сюжетно-ролевых игр «Воины света»
                  </Text>
                  <Button className="font-semibold leading-[normal] sm:min-w-[150px]  md:min-w-[200px] mt-[20px] min-w-[290px] sm:mt-[0px] text-2xl md:text-[22px] text-center sm:text-xl">
                    Подробнее
                  </Button>
                </div>
                <Img
                  className="h-[335px] md:h-[200px] sm:mb-[20px] sm:h-[150px] sm:h-auto md:mt-0 mt-5 object-cover w-[44%] md:w-full rounded-[20px]"
                  src="images/img_image7.png"
                  alt="imageSeven"
                />
              </div>
            </div>
            <div className="my-0 relative shadow-bs rounded-[20px] w-full">
              <div className="m-auto w-full">
                <Img
                  className="h-[468px] m-auto object-cover rounded-[20px] w-full md:h-[300px]"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
              </div>
              <div className="absolute flex flex-row sm:flex-col md:gap-[25px] gap-[62px] h-max inset-[0] items-start justify-center m-auto w-[86%]">
                <div className="flex flex-col sm:grid sm:grid-cols-2 sm:flex-row items-start sm:items-center justify-start">
                  <Text
                    className="sm:text-[18px] md:text-[20px] text-[3em] text-white-A700 w-full"
                    size="txtSourceSansProBold48"
                  >
                   Походный клуб «Гицареон»
                  </Text>
                  <Button className="font-semibold leading-[normal] sm:min-w-[150px]  md:min-w-[200px] min-w-[290px] mt-[20px] sm:mt-[0px] text-2xl md:text-[22px] text-center sm:text-xl">
                    Подробнее
                  </Button>
                </div>
                <Img
                  className="h-[335px] md:h-[200px] sm:mb-[20px] sm:h-[150px] sm:h-auto md:mt-0 mt-5 object-cover w-[44%] md:w-full rounded-[20px]"
                  src="images/img_image7_335x501.png"
                  alt="imageSeven"
                />
              </div>
            </div>
            <div className="my-0 relative shadow-bs rounded-[20px] w-full">
              <div className="m-auto w-full">
                <Img
                  className="h-[468px] m-auto object-cover rounded-[20px] w-full md:h-[300px]"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
              </div>
              <div className="absolute flex flex-row sm:flex-col md:gap-[25px] gap-[62px] h-max inset-[0] items-start justify-center m-auto w-[86%]">
                <div className="flex flex-col sm:grid sm:grid-cols-2 sm:flex-row items-start sm:items-center justify-start">
                  <Text
                    className="sm:text-[18px] md:text-[20px] text-[3em] text-white-A700 w-full"
                    size="txtSourceSansProBold48"
                  >
                   Спортивный клуб ТОРНАДО
                  </Text>
                  <Button className="font-semibold leading-[normal] sm:min-w-[150px]  md:min-w-[200px] min-w-[290px] mt-[20px] sm:mt-[0px] text-2xl md:text-[22px] text-center sm:text-xl">
                    Подробнее
                  </Button>
                </div>
                <Img
                  className="h-[335px] md:h-[200px] sm:mb-[20px] sm:h-[150px] sm:h-auto md:mt-0 mt-5 object-cover w-[44%] md:w-full rounded-[20px]"
                  src="images/img_image7_1.png"
                  alt="imageSeven"
                />
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default Page;
