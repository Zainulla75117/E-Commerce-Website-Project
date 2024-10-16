import React, { useState, useEffect } from 'react';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const showSlides = (index) => {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        let newIndex = index;

        if (newIndex >= slides.length) {
            newIndex = 0;
        }

        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }

        slides.forEach((slide, i) => {
            slide.style.display = i === newIndex ? 'flex' : 'none';
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === newIndex);
        });

        setSlideIndex(newIndex);
    };

    const nextSlide = () => {
        showSlides(slideIndex + 1);
    };

    const prevSlide = () => {
        showSlides(slideIndex - 1);
    };

    useEffect(() => {
        // Set up event listeners
        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev');
        const dots = document.querySelectorAll('.dot');

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showSlides(i);
            });
        });

        // Initial display setup
        showSlides(slideIndex);

        // Cleanup event listeners when the component unmounts
        return () => {
            nextButton.removeEventListener('click', nextSlide);
            prevButton.removeEventListener('click', prevSlide);
            dots.forEach((dot) => {
                dot.removeEventListener('click', () => {
                    showSlides(slideIndex);
                });
            });
        };
    }, [slideIndex]);

    return (
        <div className="slider-bar">
            <div className="slider-container">
                <button className="prev">&#10094;</button>
                <div className="slide">
                    <div className="product-details">
                        <h3>Bestselling Laptops</h3>
                        <p>From ₹49,999</p>
                        <p>Prices You've Never Seen Before!</p>
                        <div className="offer">
                            <img src="./img/Bank.png" alt="xyz bank Discount" />
                            <p>"48% Instant Discount*"</p>
                        </div>
                    </div>
                    <div className="product-image">
                        <img src="./img/laptop3.png" alt="laptop" />
                        <img src="./img/laptop1.png" alt="laptop" />
                        <img src="./img/laptop2.png" alt="laptop" />
                    </div>
                </div>
                <div className="slide">
                    <div className="product-details">
                        <h3>Latest Smartphones</h3>
                        <p>From ₹29,999</p>
                        <p>Offers Available!</p>
                        <div className="offer">
                            <img src="./img/Bank.png" alt="xyz bank Discount" />
                            <p>x% Instant Discount*</p>
                        </div>
                    </div>
                    <div className="product-image">
                        <img src="./img/mobile1.png" alt="mobile1" />
                        <img src="./img/mobile2.png" alt="mobile2" />
                        <img src="./img/mobile3.png" alt="mobile3" />
                    </div>
                </div>
                <button className="next">&#10095;</button>
            </div>
            <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
};

export default Slider;
