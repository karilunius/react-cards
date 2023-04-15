import React from "react";
import Card from "./Card.jsx";
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'

export const Cards = () => {

    const cards = [
        {
            id: 1,
            title: "Fatz Web",
            image: img1,
            url: "https://faztweb.com",
            text: "Lorem ipsum lorem ipsum"
        },
        {
            id: 2,
            title: "Fatz Blog",
            image: img2,
            url: "https://blog.faztweb.com"
        },
        {
            id: 3,
            title: "Fatz Youtube",
            image: img3,
            url: "https://youtube.com/fazttech"
        }
    ]

    console.log(cards)

    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {
                    cards.map(mcard => (
                        <div key={mcard.id} className="col-md-4">
                            <Card title={mcard.title} image={mcard.image} url={mcard.url} text={mcard.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cards