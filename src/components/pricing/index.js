import React from 'react';
import MyButton from '../utils/MyButton';
import {Zoom} from 'react-awesome-reveal';

const Princing = () => {
    const priceState = {
        prices:[100,150,200],
        position:['Balcony','Medium','Star'],
        desc:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts',
            'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ],
        linkto:['http://sales.b','http://sales/m','http://sales.s'],
        delay:[500,0,500]   
    }

    const showBoxes = () => (
        priceState.prices.map((box,index)=>(
            <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${priceState.prices[index]}</span>
                        <span>{priceState.position[index]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.desc[index]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            style={{
                                color:'#ffffff'
                            }} 
                            link={priceState.linkto[index]}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    )


    return(
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    { showBoxes() }
                </div>
            </div>
        </div> 
    )
}

export default Princing;