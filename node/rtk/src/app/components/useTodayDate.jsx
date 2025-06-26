import React from "react";

const useTodayDate = ()=>{

const date_ = new Date();

 const date = date_.toLocaleDateString();
    return {date};
}


export default useTodayDate;