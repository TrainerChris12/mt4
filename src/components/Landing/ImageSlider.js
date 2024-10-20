import PropTypes from 'prop-types';
import {useEffect, useState} from "react";

export const ImageSlider = ({ images }) => {

    const[currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    }

    const nextSlide = () => {
        setCurrentIndex( currentIndex === images.length -1 ? 0 : currentIndex + 1);
    }

    // Automatically switch images after a set interval (e.g., every 3 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change image every 3 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [currentIndex]);


    return (
        <div className="imageContainer">
            <div className="imageScroller">
                <button onClick={prevSlide}></button>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                <button onClick={nextSlide}></button>
            </div>
        </div>
    )
}

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageSlider;
