import React from "react";

import { Button, Img, List, Text, LetterLast , Card} from "components";

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
            <Card
              title = "Клуб настольных и сюжетно-ролевых игр «Воины света»"
              imageUrl = "images/img_image7.png"
            >
            </Card>
            <Card
              title = "Походный клуб «Гицареон»"
              imageUrl = "images/img_image7_335x501.png"
            >
            </Card>
            <Card
              title = "Спортивный клуб ТОРНАДО"
              imageUrl = "images/img_image7_1.png"
            >
            </Card>
          </List>
        </div>
      </div>
    </>
  );
};

export default Page;
