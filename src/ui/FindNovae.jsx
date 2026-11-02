import React from 'react'
import Cardfixed from './components.jsx/Cardfixed'

export default function FindNovae() {
  return (
  <div className="">
        <div className="text-center text-4xl font-semibold font-serif">
          Find NOVÆ's{" "}
        </div>
        <div className="grid md:grid-cols-4 gap-5 p-10">
          <Cardfixed
            img={
              "https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s="
            }
          />
          <Cardfixed
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXpC1NazEnj87VWs8CyFQyHddsnPs7CtTAIraQd_W7o3g6o7rGqEPgHep&s=10"
            }
          />
          <Cardfixed
            img={
              "https://img.magnific.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80"
            }
          />
          <Cardfixed
            img={
              "https://thumbs.dreamstime.com/b/racks-white-black-clothing-hang-modern-fashion-boutique-retail-store-clothes-rack-shopping-choice-455213218.jpg"
            }
          />
        </div>
      </div>
  )
}
