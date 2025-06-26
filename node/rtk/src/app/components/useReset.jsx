import React, { useState } from "react";

const useReset = () => {
    const [dataRes, setRes] = useState(0);
    const reset = () => setRes(dataRes);
    return { dataRes, reset };

}

export default useReset;