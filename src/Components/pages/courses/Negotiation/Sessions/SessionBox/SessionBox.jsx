import React from 'react';
import './SessionBox.css';
const SessionBox = ({sessionType,Heading,Date,RegCount,AttendeesCount,Time})=>{
    const styles = {
        p:{
            color:"#808080"
        }
    }
    return(
        <tr>
            <td>
                <div className="td__container">
                    <div className='td__header'><h3>{Heading}</h3></div>
                    <div className={`td__badge ${sessionType}`}>
                        {sessionType}
                    </div>
                    <div className="td__date">{Date}</div>
                </div>
            </td>
            <td>
                <p style={styles.p}>Registrants: <span className='p__innerLink'>{RegCount}</span></p>
            </td>
            <td>
                <p style={styles.p}>Attendees: <span className='p__innerLink'>{AttendeesCount}</span></p>
            </td>
            <td>
                <span className='p__innerLink'>{Time}</span>
            </td>
            <td>
                <button className="session__button"><i class='bx bx-dots-vertical-rounded'></i></button>
            </td>
        </tr>
    );
}
export default SessionBox;