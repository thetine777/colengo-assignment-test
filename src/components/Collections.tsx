import React from "react";
import BannerDesktop1 from "../assets/images/banners/banner-desktop1.jpg";
import BannerDesktop2 from "../assets/images/banners/banner-desktop2.jpg";
import BannerDesktop3 from "../assets/images/banners/banner-desktop3.jpg";
import BannerDesktop4 from "../assets/images/banners/banner-desktop4.jpg";

export const Collections: React.FC = () => {
  return (
    <section className="collections">
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
          <button key={tab}>{tab}</button>
        ))}
      </div>
      <div className="banner-layout">
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
          <div className="grid-item">
            <img src={BannerDesktop4} alt="banner 4" />
          </div>
        </div>
      </div>
    </section>
  );
};
