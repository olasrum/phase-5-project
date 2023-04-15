import {useEffect, useState} from "react";
import ItemList from "./ItemList";

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/items")
        .then((r) => r.json())
        .then((items) => setItems(items))
    }, []);

    const displayItems = items.map((item) => {
        return <ItemList 
                    key={item.id}
                    item={item}
                />

    })

    return (
        <div className="display-items">
            {displayItems}
        </div>
    );
}

export default Home;
