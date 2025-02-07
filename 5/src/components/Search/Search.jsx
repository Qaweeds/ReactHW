import React, {useContext, useState} from 'react';
import Button from "../Button/Button.jsx";
import BattleContext from "../../contexts/BattleContext.js";

export default function Search({cardId}) {
    const [name, setName] = useState(``);
    const [error, setError] = useState(``);
    const {addPlayer} = useContext(BattleContext);
    const searchPlayer = async (e) => {
        e.preventDefault();
        addPlayer(name, cardId).then((res) => {
            if (res && res.error) {
                setError(res.msg)
            }
        });
    }

    return (
        <form>
            <label>
                <span> Choose Player {cardId}</span>
                <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)}/>
                {error.length !== 0 && <p className='color__red'>{error}</p>}
            </label>
            <Button title="Submit" handleClick={searchPlayer}/>
        </form>

    )
}