import React from "react";
import FeaturedClubsList from "repo/LoadClubsList";
import { Img, Text, LetterLast, Header} from "components";

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
          <Header>
            
          </Header>
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
          <FeaturedClubsList />

        </div>
        
      </div>
    </>
  );
};

export default Page;
