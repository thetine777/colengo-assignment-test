import React from "react";
import { Button } from "./Button";
import UserIcon from "../assets/icons/user.svg";

export const ProductCarousel: React.FC = () => {
  return (
    <section className="register-session">
      <div className="register-content">
        <h1 className="title">CREATE YOUR PROFESSIONAL ACCOUNT</h1>
        <label className="subtitle">UNLOK ACCESS TO LATEST COLLECTIONS</label>
        <img src={UserIcon} alt="User Icon" className="user-icon" />
        <p className="description">
          Create an account to explore our comprehensive product catalog,
          complete with high-quality images, detailed specifications, and
          pricing information. Enjoy direct access to our sales team for any
          questions or order inquiries—everything you need, right at your
          fingertips.
        </p>
        <div className="button-layout">
          <Button>PLEASE REGISTER</Button>
          <Button>PLAN A CALL</Button>
        </div>
      </div>
    </section>
  );
};
