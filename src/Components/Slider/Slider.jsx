import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const SliderComponent = (props) => {

    console.log(props);
    return (
        <div id='slider'>


            <Slider infinite={true} autoplay={2000}>

            {props.dataSource.map((item, index) =>
                    <div
                        key={index}>
                        
                        <img src={item} alt="" className='slider_image' />

                    </div>)}

                
            </Slider>

        </div>
    )
}

export default SliderComponent