const MarketRankPill = ({rank, additionalStyles}) => {
    return ( <div className={`bg-foreground rounded-2xl text-center  font-semibold text-bg-secondary px-3 py-1 ${additionalStyles}`}>{rank}</div> );
}
 
export default MarketRankPill;