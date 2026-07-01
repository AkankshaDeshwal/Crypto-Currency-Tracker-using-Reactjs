import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchChartData, fetchCoinData } from "../api/CoinGecko";
import Header from "../components/Header";
import MarketRankPill from "../components/MarketRankPill";
import { compactPrice, formatNumber, formatPrice } from "../utils/formatter";
import PercentChangeDisplay from "../components/PercentChangeDisplay";
import TextNumInfo from "../components/TextNumInfo";
import {ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip} from "recharts";
import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";

const CoinDetails = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState();
  const [chartData, setChartData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  const loadCoinData = async () => {
    try {
      const data = await fetchCoinData(id);
      setCoinData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadChartData = async () => {
    try {
      const data = await fetchChartData(id);
      
      const formattedData = data.prices.map((price) => (
        {
            time: new Date(price[0]).toLocaleDateString('en-US', {
                month:'short',
                day:'numeric'
            }),
            price: price[1].toFixed(2)
      }
      ))
      console.log(formattedData)
      setChartData(formattedData)
      
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  const goHome = () => navigate("/")

  useEffect(() => {
    loadCoinData();
    loadChartData()
  }, [id]);

  if (isLoading) {
    return <div>Loading Data...</div>;
  }

  if (!coinData) {
    return (
      <div>
        Coin not found.
        <button onClick={goHome}>Go Back</button>
      </div>
    );
  }

  return (
    <>
      <div className="w-full mx-auto flex flex-col items-center px-4">
        <Header sideComp="button" sideCompHandler={goHome} />
        <hr className="w-full shadow-md shadow-gray-100 my-4" />

        <div className="w-full md:max-w-2/3 flex flex-col items-start mt-4  mb-8 gap-8">
          <div className="flex flex-col items-start gap-4">
            <div className="flex gap-4">
              <img
                src={coinData.image.small}
                alt="Coin Image"
                className="rounded-4xl outline-1"
              />
              <div className="flex flex-col items-start gap-2">
                <h1>{coinData.name}</h1>
                <span className="text-xs">{coinData.symbol.toUpperCase()}</span>
              </div>
            </div>
            <MarketRankPill
              rank={`Rank #${coinData.market_cap_rank}`}
              additionalStyles="text-md"
            />
          </div>

          <div className="w-full bg-bg-secondary rounded-md outline-1 outline-muted px-6 py-4 flex flex-col items-start gap-4">
            <h1 className="text-xl font-semibold mt-2">
              {formatPrice(coinData.market_data.current_price.usd)}
            </h1>

            <PercentChangeDisplay percentChange={formatPrice(coinData.market_data.price_change_percentage_24h)}/>

            <div className="flex gap-4">
                <TextNumInfo text="24h High" num={formatPrice(coinData.market_data.high_24h.usd)} /> 
                 <TextNumInfo text="24h Low" num={formatPrice(coinData.market_data.low_24h.usd)} />
                
            </div>
          </div>

          <div className="w-full flex flex-col bg-bg-secondary rounded-md outline-1 outline-muted px-6 md:px-12 py-8 items-start gap-8 text-xs">
            <h1 className="text-xl font-semibold mt-2">
              Prices Chart (7 days)
            </h1>

            
                <ResponsiveContainer width="100%" height={400} >
                    <LineChart data={chartData}>
                        <CartesianGrid stroke="var(--color-muted)" strokeDasharray="3 3"/>
                        <Tooltip contentStyle={
                            {
                                backgroundColor:"rgba(11, 14, 17, 0.8)",
                                border: "solid 1px var(--color-muted)",
                                borderRadius: "5px",
                                color:"var(--color-foreground)"
                            }
                        }/>

                        <XAxis dataKey="time" stroke="var(--color-muted)" />
                        <YAxis domain={["auto", "auto"]} 
                        stroke="var(--color-muted)"/>

                        <Line
        type="monotone"
        dataKey="price"
        stroke="var(--color-foreground)"
        strokeWidth={2}
        dot={false} />

                    </LineChart>
                </ResponsiveContainer>
            

            
          </div>

          <div className="w-full flex flex-wrap justify-between gap-6">
            <ContentBox>
                <TextNumInfo text="MARKET CAP" num={compactPrice(coinData.market_data.market_cap.usd)} textSize="text-xs" numSize="text-lg"/>
            </ContentBox>

            <ContentBox>
                <TextNumInfo text="VOLUME 24H" num={compactPrice(coinData.market_data.total_volume.usd)} textSize="text-xs" numSize="text-lg"/>
            </ContentBox>

            <ContentBox>
                <TextNumInfo text="CIRCULATING SUPPLY" num={formatNumber(coinData.market_data.circulating_supply)} textSize="text-xs" numSize="text-lg"/>
            </ContentBox>

            <ContentBox>
                <TextNumInfo text="TOTAL SUPPLY" num={formatNumber(coinData.market_data.total_supply)} textSize="text-xs" numSize="text-lg"/>
            </ContentBox>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CoinDetails;
