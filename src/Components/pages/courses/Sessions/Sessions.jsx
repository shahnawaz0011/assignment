import React from'react';
import SessionBox from './SessionBox/SessionBox';
import './Sessions.css';
const Sessions = ()=>{

    return(
        <div className="sessions__innerWrap">
            <table>
                <SessionBox sessionType="Live" Heading="Conflicts" Date="May 1,2021 1:00pm" RegCount="50" AttendeesCount="30" Time="4 hours ago"/>
                <SessionBox sessionType="Upcoming" Heading="Discussion" Date="May 1,2021 1:00pm" RegCount="50" AttendeesCount="0" Time="1 month ago"/>
                <SessionBox sessionType="Completed" Heading="Discussion" Date="May 1,2021 1:00pm" RegCount="50" AttendeesCount="30" Time="1 month ago"/>
            </table>
        </div>
    );
}

export default React.memo(Sessions);