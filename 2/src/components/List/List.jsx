import React, {useState, useEffect, useRef} from 'react'
import './style.sass'

function List() {
    const animals = [
        {type: `turtle`, icon: `🐢`},
        {type: `octopus`, icon: `🐙`},
        {type: `fish`, icon: `🐠`},
        {type: `flamingo`, icon: `🦩`},
        {type: `penguin`, icon: `🐧`}
    ]

    const [list, setList] = useState(animals);
    const [activeKeys, setActiveKeys] = useState([]);

    let interval;

    useEffect(() => {
        if (activeKeys.length < list.length) {
            interval = setInterval(updateList, 1000)
        }

        return () => clearInterval(interval);
    });

    const updateList = () => {
        console.log('updateList')
        const newList = [...list];
        const keys = Object.keys(newList).filter((i) => !activeKeys.includes(i))
        const key = keys[keys.length * Math.random() << 0];

        newList[key].active = true;
        setList(newList);
        setActiveKeys([...activeKeys, key]);

    };

    return (
        <>
            <table>
                <tbody>
                {list.map((item, i) => (
                    <tr key={i} className={item.active && 'active'}>
                        <td>{item.type}</td>
                        <td>{item.icon}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );

}

export default List