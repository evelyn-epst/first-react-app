import React from "react";
import Button2 from "./Button2";
import Button1 from "./Button1";
import AboutUs from "./AboutUs";

function Third2({ pic }) {
  return (
    <div className="min-h-screen flex justify-between gap-4 px-12 py-20">
      <img className="object-cover w-2/3" src={pic} alt="" />
      <AboutUs
        t1={"Our Story"}
        t2={"More Than Fashion,It's Your Identity"}
        t3={
          "At AXELYN, we believe fashion is more than just clothing — it's a way to express who you are. Our mission is to bring elegance, confidence, and individuality into every style We carefully select designs that blend modern trends with timeless beauty, helping everyone discover a style that feels uniquely their own. From everyday essentials to statement pieces, every detail reflects our passion for fashion and creativity"
        }
      />
    </div>
  );
}

export default Third2;
