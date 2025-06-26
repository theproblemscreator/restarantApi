import React from "react";

import useGetDate from './useGetDate'
function TimeDate(){
    const  { todaysDate , time } = useGetDate();

    return(<>
    <p>{todaysDate} -- <span>{time}</span> </p>
    </>)
}

export default React.memo(TimeDate);