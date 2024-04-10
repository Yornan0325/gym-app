import { useState, useEffect } from "react";

import response from "../datas/datajson.json";
import constate from "constate";


const UseContextsApp = () => {
    const [jsonData, setJsonData] = useState([]);


    useEffect(() => {
        setJsonData(response)
    }, []);





    return { jsonData, setJsonData };

}
export const [ContextProvider, useContextApps] = constate(UseContextsApp);



