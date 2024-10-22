import {useEffect, useRef, useState} from "react";

const useIntersectionObserver = (options = {threshold: .1}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {threshold: 0.1}
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };

    }, [options]);
    return [elementRef, isVisible];
}

export default useIntersectionObserver;