import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const SliderComponent = (props) => {

    console.log(props);
    return (
        <div id='slider'>


            <Slider infinite={true} autoplay={2000}>
                {props.dataSource.map((slide, index) =>
                    <div
                        key={index}>
                        {/*<h2>{slide.title}</h2>*/}
                        <img src={slide.image} alt="" className='slider_image' />

                    </div>)}
            </Slider>

        </div>
    )
}

export default SliderComponent