import React, {useState} from "react";
import BattleCard from "../components/BattleCard/BattleCard.jsx";

export default function useBattle() {
    const [data, setData] = useState([]);
    const [ratingData, setRatingData] = useState([]);
    const [battleStarted, setBattleStarted] = useState(false);
    const createCards = (playerCount) => {

        let cards = [];
        for (let i = 1; i <= playerCount; i++) {
            cards.push(<BattleCard key={i} cardId={i}/>)
        }
        setData(cards);
    }

    return {data, createCards, ratingData, setRatingData, battleStarted, setBattleStarted}
}