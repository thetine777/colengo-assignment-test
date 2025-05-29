import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Product1 from "../assets/images/products/product-1.png";
import Product2 from "../assets/images/products/product-2.png";
import Product3 from "../assets/images/products/product-3.png";
import Product4 from "../assets/images/products/product-4.png";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import { useResponsive } from "src/hooks/useResponsive";

export const ProductCarousel: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  const baseProduct =
    isMobile || isTablet
      ? [
          {
            title: "Congo Dining Table Ø80h",
            imageUrl: Product1,
            productCode: "CONGODIN80-RC",
          },
          {
            title: "Sotho Dining Chair",
            imageUrl: Product2,
            productCode: "SOTHODC-RC",
          },
          {
            title: "Luggage Rack 1",
            imageUrl: Product3,
            productCode: "LUGGRACK1",
          },
          {
            title: "Astor Wall Lamp Ant. Black",
            imageUrl: Product4,
            productCode: "ASTORWLAB",
          },
        ]
      : [
          {
            title: "Congo Dining Table Ø80h",
            imageUrl: Product1,
            productCode: "CONGODIN80-RC",
          },
          {
            title: "customer-favorite",
            imageUrl: "",
            productCode: "",
          },
          {
            title: "Sotho Dining Chair",
            imageUrl: Product2,
            productCode: "SOTHODC-RC",
          },
          {
            title: "Luggage Rack 1",
            imageUrl: Product3,
            productCode: "LUGGRACK1",
          },
          {
            title: "Astor Wall Lamp Ant. Black",
            imageUrl: Product4,
            productCode: "ASTORWLAB",
          },
        ];
  const productList = [...baseProduct, ...baseProduct, ...baseProduct];

  return (
    <div className="product-session">
      <section className="customer-favorites tablet">
        <div className="customer-content">
          <label>Browse through</label>
          <div>
            <h2>CUSTOMERS</h2>
            <h2>FAVORITES</h2>
          </div>
          <label>and get inspired</label>
        </div>
      </section>
      <section className="product-carousel">
        <div className="product-content">
          {/* Custom Arrows */}
          <div className="custom-prev-product">
            <img src={ArrowLeft} alt="arrow left" />
          </div>
          <div className="custom-next-product">
            <img src={ArrowRight} alt="arrow right" />
          </div>
          <Swiper
            modules={[FreeMode, Autoplay, Navigation]}
            slidesPerView={"auto"}
            spaceBetween={24}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".custom-next-product",
              prevEl: ".custom-prev-product",
            }}
            breakpoints={{
              1477: {
                centeredSlides: true,
                freeMode: false,
              },
            }}
            className="mySwiper"
          >
            {productList.map((product, index) => {
              if (product.title === "customer-favorite") {
                return (
                  <SwiperSlide key={index} style={{ width: "260px" }}>
                    <section className="customer-favorites desktop">
                      <div className="customer-content">
                        <label>Browse through</label>
                        <div>
                          <h2>CUSTOMERS</h2>
                          <h2>FAVORITES</h2>
                        </div>
                        <label>and get inspired</label>
                      </div>
                    </section>
                  </SwiperSlide>
                );
              }
              return (
                <SwiperSlide key={index} style={{ width: "260px" }}>
                  <div className="product-card">
                    <div className="product-card image">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="product-card details">
                      <label>{product.title}</label>
                      <p>Product code: {product.productCode}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </div>
  );
};
