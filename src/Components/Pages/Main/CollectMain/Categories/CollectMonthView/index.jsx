import React, {Fragment} from "react";
import Carousel, {slidesToShowPlugin} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
function CollectMonthView() {
  let blah = (
    <Carousel
      plugins={[
        "infinite",
        "arrows",
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 2,
          },
        },
      ]}
    >
      <img src={imageOne} />
      <img src={imageTwo} />
      <img src={imageThree} />
    </Carousel>
  );

  return <Fragment></Fragment>;
}

export default CollectMonthView;
