import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";

function Cards() {
  const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // },[])
  // const fetchData = async() => {
  //   await axios.get('https://workorder-server-o3fp.onrender.com/api/v1/box/cards')
  //     .then(res=> setCards(res.data.cards))
  //     .catch((err) => {console.log(err)})
  // }
useEffect(() => {
  const getCards = async () => {
    try {
      const response = await axios.get("https://workorder-server-o3fp.onrender.com/api/v1/box/cards");
      setCards(response.data.cards)
    } catch (e) {
      console.log(e)
    }
  };
  getCards()
},[])

  // const fetchData =async () => {
  //   await fetch("https://workorder-server-o3fp.onrender.com/api/v1/box/cards")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCards(data.cards);
  //     })
      
  //     .catch((e) => console.log("error console"));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      {cards &&
        cards.length > 0 &&
        cards.map((card) => <Card key={card._id} card={card} />)}
    </>
  );
}

export default Cards;
