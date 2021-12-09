import'./Negotiation.css';
import React from'react';
import Registrants from './Registrants/Registrants';
import Sessions from '../Sessions/Sessions';
const Negotiation = ()=>{
    return(
        <div className="Negotiations">
            <div className="courses__bottomHead">
                <span><button className='backBtn'><i class='bx bx-chevron-left'></i></button>Negotiations</span>
                <div className="courses__buttonWrap">
                    <button><i class='bx bx-share-alt'></i>Share</button>
                    <button><i class='bx bx-plus' ></i>Add session</button>
                </div>
            </div>
            <Sessions/>
        </div>

    );
}

export default React.memo(Negotiation);