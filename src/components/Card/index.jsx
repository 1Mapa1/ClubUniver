import React, { useState }  from "react";
import { Text, Button, Img, Modal } from "components";

const Card = ({data}) => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <div className="my-0 relative shadow-bs rounded-[20px] w-full">
        <div className="m-auto w-full">
        <Img
            className="h-[468px] m-auto object-cover rounded-[20px] w-full md:h-[300px] sm:h-[350px]"
            src="images/img_image4.png"
            alt="imageFour"
        />
        </div>
        <div className="absolute flex flex-row sm:flex-col md:gap-[25px] gap-[62px] h-max inset-[0] items-start justify-between m-auto w-[86%] sm:items-center">
        <div className="flex sm:grid sm:grid-cols-2 flex-col gap-[10px] sm:flex-row items-start sm:items-center justify-start sm:min-w-[320px]">
            <Text
            className="sm:text-[18px] md:text-[20px] text-[3em] text-white-A700 w-full"
            size="txtSourceSansProBold48"
            >
            {data.name}
            </Text>
            <Button className="font-semibold leading-[normal] sm:min-w-[150px]  md:min-w-[150px] mt-[20px] min-w-[290px] sm:mt-[0px] text-2xl md:text-[22px] text-center sm:text-xl"
            onClick = {() => setModalActive(true)}>
            Подробнее
            </Button>
        </div>
        <Img
            className="h-[335px] md:h-[200px] sm:h-[200px] md:mt-0 mt-5 object-cover min-w-[500px] max-w-[500px] md:max-w-[350px] md:min-w-[300px] sm:min-w-[320px] md:w-full rounded-[20px]"
            src={data.preview_link}
            alt="imageSeven"
        />
        </div>
    </div>
    <Modal club_data = {data} active={modalActive} setActive={setModalActive}>
          
      </Modal>
    </div>
    
    
  );
};
export {Card}