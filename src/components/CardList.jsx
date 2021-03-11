import React from 'react';

const CardList = ({ items, inputText }) => {

    const listItems = items.filter((item) => {
        if(inputText === "") {
            return item
        } else if (item.name.toString().toLowerCase().includes(inputText.toString().toLowerCase())) {
            return item
        }
    }).map((item, index) =>
        <div key={index.toString()} className="c-card-item">
            <div className="c-card-title">
                <h2>{item.name}</h2>
            </div>
            <div className="c-card-img">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="" />
            </div>
        </div>
    );

    return (
        <div className="c-card">
            {listItems}
        </div>

    )
}

export default CardList;