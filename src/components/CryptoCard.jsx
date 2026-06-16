import { compantPrice, formatPrice } from "../utils/formatter";
import { ArrowUp, ArrowDown } from 'lucide-react'

const CryptoCard = ({crypto}) => {
    return ( <div className="w-full px-6 py-4 bg-bg-secondary mb-4 rounded-md flex flex-col gap-2 items-start hover:scale-105 cursor-pointer duration-100 ease-in">
        <div className="flex justify-start items-center gap-3">
            <img src={crypto.image} alt={crypto.name} className="w-10" />
            <div className="flex flex-col items-start gap-1">
                <h1 className="font-semibold">{crypto.name}</h1>
                <span className="text-xs">{crypto.symbol.toUpperCase()}</span>
                <div className="bg-foreground rounded-xl text-center text-xs  font-semibold text-bg-secondary px-3 py-1">#{crypto.market_cap_rank}</div>
            </div>
        </div>

        <h1 className="text-xl font-semibold mt-2">{formatPrice(crypto.current_price)}</h1>
        <div className={`px-4 py-2  outline-1  text-xs text-foreground rounded-md flex gap-1 items-center ${crypto.price_change_percentage_24h>=0? "bg-accent-green/70 outline-accent-green" : "bg-accent-red/70 outline-accent-red"}`}>{crypto.price_change_percentage_24h>=0?<ArrowUp size={15}/>:<ArrowDown size={15}/>} {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%</div>

        <hr className="w-full border-t border-gray-500 my-2"/>

        <div className="w-full flex justify-between">
            <div className="flex flex-col gap-2 items-start">
                <span className="text-xs">MARKET CAP</span>
                <h1 className="text-sm">{compantPrice(crypto.market_cap)}</h1>
            </div>

            <div className="flex flex-col gap-2 items-start">
                <span className="text-xs">VOLUME</span>
                <h1 className="text-sm">{compantPrice(crypto.total_volume)}</h1>
            </div>

        </div>



    </div> );
}
 
export default CryptoCard;