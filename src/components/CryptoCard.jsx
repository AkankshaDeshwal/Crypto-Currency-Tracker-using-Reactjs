import { Link } from "react-router-dom";
import { compactPrice, formatPrice } from "../utils/formatter";
import TextNumInfo from "./TextNumInfo";
import MarketRankPill from "./MarketRankPill";
import PercentChangeDisplay from "./PercentChangeDisplay";

const CryptoCard = ({crypto}) => {
    return ( 
    <Link to={`/coin/${crypto.id}`}>
    <div className="w-full px-6 py-4 bg-bg-secondary mb-4 rounded-md flex flex-col gap-2 items-start hover:scale-105 cursor-pointer duration-100 ease-in">
        <div className="flex justify-start items-center gap-3">
            <img src={crypto.image} alt={crypto.name} className="w-10" />
            <div className="flex flex-col items-start gap-1">
                <h1 className="font-semibold">{crypto.name}</h1>
                <span className="text-xs">{crypto.symbol.toUpperCase()}</span>
                <MarketRankPill rank={crypto.market_cap_rank} />
            </div>
        </div>

        <h1 className="text-xl font-semibold mt-2">{formatPrice(crypto.current_price)}</h1>
        <PercentChangeDisplay percentChange={crypto.price_change_percentage_24h} />

        <hr className="w-full border-t border-gray-500 my-2"/>

        <div className="w-full flex justify-between">
            <TextNumInfo text='MARKET CAP' num={compactPrice(crypto.market_cap)} />

            <TextNumInfo text='VOLUME' num={compactPrice(crypto.total_volume)} />
            

        

        </div>
    </div> </Link>
    );
}
 
export default CryptoCard;