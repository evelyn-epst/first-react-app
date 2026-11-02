import React from "react";
import { SiGooglegemini } from "react-icons/si";
import Card2 from "./Card2";

export default function Fourth2() {
  return (
    <div className="h-110 px-4">
      <div className="flex  gap-3">
        <SiGooglegemini className="text-3xl hover:opacity-75 text-red-300" />
        <div className="flex flex-col">
          <div className="font-serif text-2xl">Featured Products</div>
          <div className="">Handmade just for You</div>
        </div>
      </div>
      <div className="flex gap-4 px-4">
        <Card2 pic={"https://www.lusilkstyle.com/cdn/shop/files/O1CN015by0vj1tuC6ORsJFZ__2222678775961_33fafff0-c4ae-400d-afd9-ab0cbf0209c5.webp?v=1787424942&width=3840"}  t1={"Rose Bloosm Dress"} t2={"$4.98"} />
        <Card2 pic={"https://m.media-amazon.com/images/I/71OIIwVq4wL._AC_UY900_.jpg"}  t1={"Rose Cream Handbag"} t2={"$25.00"}  />
        <Card2 pic={"https://azendi.com/cdn/shop/files/33951-33952x_1500.jpg?v=1777025441&width=1500"} t1={"Rose Gold Vermeil"} t2={"$50.25"}  />
        <Card2 pic={"https://i.etsystatic.com/26357678/r/il/c417c2/7107404045/il_fullxfull.7107404045_6rx6.jpg"}  t1={"Ribbon Blouse"} t2={"40.35"}  />
      </div>
    </div>
  );
}
