import React from'react';
import './Sessions.css';
import SessionBox from './SessionBox/SessionBox';
const Sessions = ()=>{

    return(
            <table>
                <SessionBox sessionType="Live" Heading="Conflicts" Date="May 1,2021 1:00pm" RegCount="50" AttendeesCount="30" Time="4 hours ago"/>
                <SessionBox sessionType="Upcoming" Heading="Discussion" Date="May 1,2021 1:00pm" RegCount="50" AttendeesCount="0" Time="1 month ago"/>
                <SessionBox sessionType="Completed" Heading="Discussion" Date="May 1,2021 1:00pm" RegCount="50" AttendeesCount="30" Time="1 month ago"/>
            </table>
    );
}

export default React.memo(Sessions);