import React from'react';
import './Registrants.css';
const Registrants = ()=>{

    return(
        <table>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Email-id
                </th>
                <th>
                    Country
                </th>
                <th>
                    Registration Date
                </th>
                <th>
                    Attended
                </th>
            </tr>
            <tr>
                <td>
                    <img src='profile.png' className='profile'/>
                    Max Clark
                </td>
                <td>
                    maxclark@gmail.com
                </td>
                <td>
                    England
                </td>
                <td>
                    May 7,2021
                </td>
                <td>
                    3/3
                </td>
            </tr>
            <tr>
                <td>
                    <img src='profile.png' className='profile'/>
                    Max Clark
                </td>
                <td>
                    maxclark@gmail.com
                </td>
                <td>
                    England
                </td>
                <td>
                    May 7,2021
                </td>
                <td>
                    1/3
                </td>
            </tr>
            <tr>
                <td>
                    <img src='profile.png' className='profile'/>
                    Max Clark
                </td>
                <td>
                    maxclark@gmail.com
                </td>
                <td>
                    England
                </td>
                <td>
                    May 7,2021
                </td>
                <td>
                    2/3
                </td>
            </tr>
        </table>
    );
}

export default React.memo(Registrants);