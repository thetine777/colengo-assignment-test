import React, { useState } from "react";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import BannerDesktop1 from "../assets/images/banners/banner-desktop1.jpg";
import BannerDesktop2 from "../assets/images/banners/banner-desktop2.jpg";
import BannerDesktop3 from "../assets/images/banners/banner-desktop3.jpg";
import BannerDesktop4 from "../assets/images/banners/banner-desktop4.jpg";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import { Button } from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { useResponsive } from "src/hooks/useResponsive";

export const Collections: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("ARTISAN");
  const { isMobile, isTablet } = useResponsive();
  return (
    <section className="collections">
      <div className="tabs-layout">
        <div className="tabs">
          {[
            "RATTAN",
            "SOSIS",
            "LUMINOUS",
            "ARTISAN",
            "MARBLE",
            "AMAZON",
            "INGESIMONIS",
          ].map((tab) => (
            <button
              className={`menu ${activeMenu === tab ? "active" : ""}`}
              key={tab}
              onClick={() => setActiveMenu(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {isMobile || isTablet ? (
        <div className="banner-content">
          <div className="grid">
            <div className="grid-item">
              <img src={BannerDesktop1} alt="banner 1" />
            </div>
            <div className="grid-item">
              <img src={BannerDesktop2} alt="banner 2" />
            </div>
            <div className="grid-item">
              <img src={BannerDesktop3} alt="banner 3" />
            </div>
            <div
              className="grid-item grid-image"
              style={{
                backgroundImage: `url(${BannerDesktop4})`,
              }}
            >
              <div className="grid-image-content">
                <h1 className="title">{activeMenu}</h1>
                <div className="subtitle">
                  <label>CRAFTED FOR HOPITALITY, RETAIL AND PROJECTS</label>
                </div>
                <p className="description">
                  At Versmissen, we specialize in designing and developing
                  complete interior collections, catering to a global market.
                  Our focus spans the hospitality, retail, and project sectors,
                  with clients ranging from hotels and restaurants to interior
                  shops, architects, and stylists.
                </p>
                <Button theme="secondary">READ MORE</Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="banner-layout">
          <div className="custom-prev">
            <img src={ArrowLeft} alt="arrow left" />
          </div>
          <div className="custom-next">
            <img src={ArrowRight} alt="arrow right" />
          </div>
          <Swiper
            modules={[FreeMode, Autoplay, Navigation]}
            slidesPerView={"auto"}
            spaceBetween={24}
            freeMode={true}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              1477: {
                centeredSlides: true,
                freeMode: false,
              },
            }}
            className="mySwiper"
          >
            {[0, 0, 0].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="banner-content">
                  <div className="grid">
                    <div className="grid-item">
                      <img src={BannerDesktop1} alt="banner 1" />
                    </div>
                    <div className="grid-item">
                      <img src={BannerDesktop2} alt="banner 2" />
                    </div>
                    <div className="grid-item">
                      <img src={BannerDesktop3} alt="banner 3" />
                    </div>
                    <div
                      className="grid-item grid-image"
                      style={{
                        backgroundImage: `url(${BannerDesktop4})`,
                      }}
                    >
                      <div className="grid-image-content">
                        <h1 className="title">{activeMenu}</h1>
                        <div className="subtitle">
                          <label>
                            CRAFTED FOR HOPITALITY, RETAIL AND PROJECTS
                          </label>
                        </div>
                        <p className="description">
                          At Versmissen, we specialize in designing and
                          developing complete interior collections, catering to
                          a global market. Our focus spans the hospitality,
                          retail, and project sectors, with clients ranging from
                          hotels and restaurants to interior shops, architects,
                          and stylists.
                        </p>
                        <Button theme="secondary">READ MORE</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};
