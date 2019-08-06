import React from 'react';
import CardContainer from "../components/CardContainer"

import card1 from "../assets/youshop.png"
import card2 from "../assets/friendsshop.png"
import card3 from "../assets/friendsoffriends.png"

import logo1 from "../assets/Dominos.png"
import logo2 from "../assets/Footlocker.png"
import logo3 from "../assets/Hotels.png"

const ASSETS = [
    {card: card1, logo: logo1, money: "$28.52", earning: "+$1.14"},
    {card: card2, logo: logo2, money: "$180.00", earning: "+$0.50"},
    {card: card3, logo: logo3, money: "$300.00", earning: "+$0.30"}
]

function Body() {
    return (
      <div>Body
          <CardContainer assets={ASSETS}/>
      </div>
    );
  }

export default Body;