import React from "react";
import "./Contents.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Content1 from "../../images/Content1.png";
import Content2 from "../../images/Content2.png";
import Content3 from "../../images/Content3.png";

const contentData = [
  {
    image: Content1,
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Increasing Prosperity With Positive Thinking",
  },
  {
    image: Content2,
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Motivation Is The First Step To Success",
  },
  {
    image: Content3,
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Success Steps For Your Personal Or Business",
  },
  {
    image: Content1,
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Increasing Prosperity With Positive Thinking",
  },
  {
    image: Content2,
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Motivation Is The First Step To Success",
  },
  {
    image: Content3,
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Success Steps For Your Personal Or Business",
  },
];

const Contents = () => {
  return (
    <div className="container">
      <div className="Content">
        <h2>Contents Strategies</h2>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a keystroke away.
        </p>
        <Swiper>
        </Swiper>
        <Swiper

          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          pagination={true }
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {contentData.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt={`Content ${index + 1}`} />
              <p>
                By <span>{item.author}</span> | {item.date}
              </p>
              <h3>{item.title}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Contents;
