// import { Cards } from "@mui/material";
import React from "react";
import Banner from "./Banner";

import Cards from "./Cards";
import AdsCard from "./AdsCard";

import "../Style/home.css";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <div className="home_cards">
        <Cards
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          desc="Unique activities we can do together, led by a world of hosts."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          desc="Spaces that are more than just a place to sleep."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          desc="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="ads_title">
        <h1>Discover Airbnb Experiences</h1>
      </div>
      <div className="adsCard">
        <AdsCard
          src="https://a0.muscache.com/im/pictures/0947f1e4-a6a9-4514-8b78-9e47ea797631.jpg?im_w=320"
          title="Things to do on your trip"
        />
        <AdsCard
          src="https://a0.muscache.com/im/pictures/49a25918-9b84-4d43-9d48-b45f926755bd.jpg?im_w=320"
          title="Thing to do on your home"
        />
      </div>
      <div className="city_info">
        <h1>Inspiration for your next trip</h1>
      </div>
      <div className="home_cards">
        <Cards
          src="https://a0.muscache.com/im/pictures/12c42722-4e5a-4c2b-b6a1-ae6ddca46395.jpg?im_w=320"
          title="Kathmandu"
          desc="0 kilometer away"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=320"
          title="Lalitpur"
          desc="7 kilometer away"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320"
          title="Pokhara"
          desc="142 kilometer away"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/aff9e173-b551-44e4-80f3-bd9b9d632f8b.jpg?im_w=320"
          title="Bhaktapur"
          desc="12 kilometer away"
        />
      </div>
      <div className="room_info">
        <h1>How may I serve you ?</h1>
      </div>
      <div className="home_cards">
        <Cards
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          desc="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Cards
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          desc="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Cards
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          desc="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
    </div>
  );
}

export default Home;
