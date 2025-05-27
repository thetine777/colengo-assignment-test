import React from "react";
import BannerDesktop1 from "../assets/images/banners/banner-desktop1.jpg";
import BannerDesktop2 from "../assets/images/banners/banner-desktop2.jpg";
import BannerDesktop3 from "../assets/images/banners/banner-desktop3.jpg";
import BannerDesktop4 from "../assets/images/banners/banner-desktop4.jpg";
import { Button } from "./Button";

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
          <div
            className="grid-item grid-image"
            style={{
              backgroundImage: `url(${BannerDesktop4})`,
            }}
          >

            <div className="grid-image-content">
              <h1 className="title">ARTISAN</h1>
              <label className="subtitle">
                CRAFTED FOR HOPITALITY, RETAIL AND PROJECTS 
              </label>
              <p className="description">
                At Versmissen, we specialize in designing and developing
                complete interior collections, catering to a global market. Our
                focus spans the hospitality, retail, and project sectors, with
                clients ranging from hotels and restaurants to interior shops,
                architects, and stylists.
              </p>
              <Button theme="secondary">READ MORE</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
