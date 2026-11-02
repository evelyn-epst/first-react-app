import React from "react";
import RoundCard from "./RoundCard";

export default function Second2() {
  return (
    <div className="px-12 flex justify-between">
      <RoundCard
        pic={
          "https://i.pinimg.com/236x/53/f2/5d/53f25d8d4a5a67e1eeadb979309ef03b.jpg"
        }
        t1={"Clothing"}
      />
      <RoundCard
        pic={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mJUunumWiHDsvlIl1Yw7s_H3NFycllp9fBs-9WIkJQ&s=10"
        }
        t1={"Bags"}
      />
      <RoundCard
        pic={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpLOo0Rdh4mV7vYucRguNEqjSnck-YCFEZQ_WQXOMT3iWPIMU8_ma31I&s=10"
        }
        t1={"Accessories"}
      />
      <RoundCard
        pic={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAD0K8vIOWiHl90xe6XIMy40oavGvD6ZcM_RPOOMoJA&s=10"
        }
        t1={"Shoes"}
      />
    </div>
  );
}
