import React, { useState } from "react";

const useIncrement = ()=>{
    const [dataInc , setInc] = useState(0);
    const increment = ()=> setInc(dataInc + 1);
    return {dataInc , increment};
}

export default useIncrement;