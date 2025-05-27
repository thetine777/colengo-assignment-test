import React from "react";
import { Collections } from "./components/Collections";
import { Divider } from "./components/Divider";
import { RegisterSession } from "./components/RegisterSession";

const App: React.FC = () => {
  return (
    <div className="layout">
      <h1 className="title">EXPLORE OUR COLLECTIONS</h1>
      <Collections />
      <Divider />
      <RegisterSession />
      <Divider />
    </div>
  );
};

export default App;
