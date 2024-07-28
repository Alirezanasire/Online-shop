import { useState } from 'react';

const Banner= () => {

    const [currentSlide, setCurrentSlide] = useState(0);  
    const slides = [  
        "https://soft14.storage.iran.liara.space/amz/online-mobile1.jpg",  
        "https://soft14.storage.iran.liara.space/amz/online-mobile2.jpg",  
        "https://soft14.storage.iran.liara.space/amz/online-mobile3.jpg"  
    ];  

    const changeSlide = (direction) => {  
        const nextSlide = (currentSlide + direction + slides.length) % slides.length;  
        setCurrentSlide(nextSlide);  
    }; 

    return (
      <>
        <center>  
            <h1>خانه</h1>  
        </center>  
        <section id="banner">  
            <div className="slider">  
                <div className="slides">  
                    <div className="slide">  
                        <img src={slides[currentSlide]} alt={`اسلاید ${currentSlide + 1}`} />  
                    </div>  
                </div>  
                <button className="button prev" onClick={() => changeSlide(-1)}>&#10094;</button>  
                <button className="button next" onClick={() => changeSlide(1)}>&#10095;</button>  
            </div>  
        </section> 
      </>
    )
  }
  
export default Banner