import { ArrowUp, ArrowDown } from 'lucide-react'

const PercentChangeDisplay = ({percentChange}) => {
    return ( 
        <div className={`px-4 py-2  outline-1  text-xs text-foreground rounded-md flex gap-1 items-center ${percentChange>=0? "bg-accent-green/70 outline-accent-green" : "bg-accent-red/70 outline-accent-red"}`}>{percentChange>=0?<ArrowUp size={15}/>:<ArrowDown size={15}/>} {Math.abs(percentChange).toFixed(2)}%</div>
     );
}
 
export default PercentChangeDisplay;