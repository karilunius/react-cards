import React from "react";
import img1 from '../assets/image1.jpg'
import PropTypes from "prop-types";
import '../styles/card.css'
import 'animate.css'

export const Card = ({ title, image, url, text}) => {
    return (
        <div className="card text-center bg-dark animate__animated animate__bounce animate__slow">
            <div className="overflow">
                <img className="card-img-top" src={image} alt="imagen"/>
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    { //si text existe utiliza text en caso contrario utiliza
                        text ? text : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend neque nibh, a sagittis libero maximus eu. Proin et laoreet velit. Praesent lacinia arcu at tortor condimentum, facilisis iaculis nunc feugiat. In sit amet tincidunt est, at sagittis leo. Sed lacus felis, bibendum pellentesque urna sit amet, pharetra mollis leo.'
                    }
                </p>
                <a href={url} target="_blank"   className="btn btn-outline-secondary rounded-0">Go to website</a>
            </div>
        </div>
    );
};

//card que seria objeto//validacion de datos reibidos
Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string
}
export default Card