import ItemList from "./ItemList";

function Home({items, onAddToCart}) {
   

    const displayItems = items.map((item) => {
        return <ItemList 
                    key={item.id}
                    item={item}
                    onAddToCart={onAddToCart}
                />

    })

    return (
        <div className="display-items">
            {displayItems}
        </div>
    );
}

export default Home;
