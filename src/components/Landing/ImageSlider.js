import PropTypes from 'prop-types';
import {useState} from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
export const ImageSlider = ({ images }) => {
    const [imageIndex, setImageIndex] = useState(0);


    const nextImage= () => {
        setImageIndex(index => {
            if (index === images.length - 1) return 0;
            return index + 1;
        })
    };

    const prevImage = () => {
        setImageIndex(index => {
            if (index === 0) return images.length - 1;
            return index - 1;
        })
    };

    return (
        <div className="imageContainer">
            <div className="imageScroller">
                {images.map(image => (
                    <img
                        key={image}
                        src={image}
                        className="image"
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>
            <button onClick={prevImage}></button>
            <button onClick={nextImage}></button>
            <FaArrowRight/>
            <FaArrowLeft/>
        </div>
    )
}

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};
