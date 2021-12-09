import'./Negotiation.css';
import React from'react';
import Registrants from './Registrants/Registrants';
import Sessions from './Sessions/Sessions';
const Negotiation = ()=>{
    return(
        <div className="Negotiations">
            <div className="courses__bottomHead">
                <span><button className='backBtn'><i class='bx bx-chevron-left'></i>Negotiations</button></span>
                <div className="courses__buttonWrap">
                    <button><i class='bx bx-share-alt'></i>Share</button>
                    <button><i class='bx bx-plus' ></i>Add session</button>
                </div>
            </div>
            <div className="negotiations__innerWrap">
                <div className='negotiations__innerHead'>
                    <div style={{flexGrow:"0.2"}}><button>Sessions</button></div>
                    <div style={{flexGrow:"0.2"}}><button>Registrants</button></div>
                    <div style={{flexGrow:"5"}}><button>Settings</button></div>
                    <div style={{flexGrow:"0.3"}}><button><i class='bx bx-sort-down'></i>Sort</button></div>
                    <div style={{flexGrow:"0.3"}}><button><i class='bx bx-filter'></i>Filter</button></div>
                </div>
                <hr style={{width:"100%"}}/>
                <Sessions/>
            </div>
            
        </div>
    );
}

export default React.memo(Negotiation);