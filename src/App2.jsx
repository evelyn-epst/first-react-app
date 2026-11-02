import React from "react";
import Headline from "./ui/components.jsx/Headline";
import Buttonfixed from "./ui/components.jsx/Buttonfixed";
import Button2 from "./ui/components.jsx/Button2";
import Button1 from "./ui/components.jsx/Button1";
import Hero from "./ui/components.jsx/Hero2";
import Hero1 from "./ui/components.jsx/Hero2";
import Second2 from "./ui/components.jsx/Second2";
import Hero2 from "./ui/components.jsx/Hero2";
import Third from "./ui/Third";
import Third2 from "./ui/components.jsx/Third2";
import { SiGooglegemini } from "react-icons/si";
import Fourth2 from "./ui/components.jsx/Fourth2";
import Fifth2 from "./ui/components.jsx/Fifth2";
import { FiHeart } from "react-icons/fi";
import Mission from "./ui/components.jsx/Mission";
import Sixth2 from "./ui/components.jsx/Sixth2";
import Seventh2 from "./ui/components.jsx/Seventh2";

function App2() {
  return (
    <>
      <Headline
        t1={"About Us"}
        t2={"Services"}
        t3={"Register"}
        t4={"Info"}
        pic={"blob:https://chatgpt.com/54ed02b5-e588-478c-b984-ca1f64f12f62"}
      />
      <Hero2
        t1={"New collection"}
        t2={"Where Style Meets Purpose"}
        t3={"More than just fashion,it's a part of your story"}
        pics={
          "https://thumbs.dreamstime.com/b/white-pink-girl-s-aesthetic-walk-closet-room-cabinets-peach-fuzz-color-clothes-hanging-drawer-flowers-folded-copy-302596526.jpg"
        }
      />
      <Second2 />
      <Third2
        t1={"About Us"}
        t2={"More Than Fashion,It's Your Identity."}
        t3={
          "At AXELYN, we believe fashion is more than just clothing — it's a way to express who you are. Our mission is to bring elegance, confidence, and individuality into every style. We carefully select designs that blend modern trends with timeless beauty, helping everyone discover a style that feels uniquely their own. From everyday essentials to statement pieces, every detail reflects our passion for fashion and creativity."
        }
        pic={
          "https://www.vibesabi.com/wp-content/uploads/2026/04/coquette-aesthetic-outfit-flatlay-1024x575.webp"
        }
      />

      <Fourth2 />
      <Fifth2 />
      <Sixth2 />
      <Seventh2 pic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENMljsbvD83a722kk0XdYobw-UF8H5X4KYwX10RnMyPYGTSXYkasKnq4&s=10"} />
    </>
  );
}

export default App2;
