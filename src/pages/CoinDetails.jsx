import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinData } from "../api/CoinGecko";

const CoinDetails = () => {
    const {id} = useParams();
    const [coinData, setCoinData] = useState({})

    const loadCoinData = async () => {
        try {
            const data = await fetchCoinData(id)
            setCoinData(data)
        }
        catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        loadCoinData()
    }, [id])
    return ( <div>This is coint details page.</div> );
}
 
export default CoinDetails;