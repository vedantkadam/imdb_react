import React, { useState } from "react";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const WatchProviders = () => {
    const [providers, setProviders] = useState([]);

    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/watch/providers`);


    // let idlist = [];
    //     for(let i=0; i<data?.results?.US?.flatrate.length;i++){
    //         let idcheck = data?.results?.US?.flatrate?.[i].provider_id;
    //         if(idcheck==8){
    //             idlist.push(idcheck);
    //             return true;
    //         }
    //         else{
    //             return false;
    //         }
    //     }
  
    

    return (
        console.log(data?.results?.US?.flatrate)
    )
};

export default WatchProviders;
