import React, { useContext } from "react";
import "../Testimonials/Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { themeContext } from "../../Context";
const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  const clients = [
    {
      image: profilePic1,
      review:
        " Very Good Experience Deliver the order on time and  suggestion was also great it was a very good time working with him would love to work again",
    },

    {
      image: profilePic2,
      review:
        " Very Good Experience Deliver the order on time and  suggestion was also great it was a very good time working with him would love to work again",
    },
    {
      image: profilePic3,
      review:
        " Very Good Experience Deliver the order on time and  suggestion was also great it was a very good time working with him would love to work again",
    },

    {
      image: profilePic4,
      review:
        " Very Good Experience Deliver the order on time and  suggestion was also great it was a very good time working with him would love to work again",
    },
  ];
  return (
    <div className="t-wrapper" id = 'Testimonial'>
      <div className="t-heading">
        <span>Client always get</span>
        <span> Exceptional work</span>
        <span> from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.image} alt="" />
                <span style={{color:darkMode? 'white':''}}>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
