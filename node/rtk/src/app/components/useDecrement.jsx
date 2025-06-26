import React, { useState } from "react";

const useDecrement = ()=>{
    const [dataDec , setDec] = useState(0);
    const decrement = ()=> setDec(dataDec - 1);
    return {dataDec , decrement};
}

export default useDecrement;