import { useEffect, useState } from "react";
import { fetchCryptos } from "../api/CoinGecko";
import Header from "../components/Header";
import CryptoCard from "../components/CryptoCard";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PaginationButton from "../components/PaginationButton";

const Home = () => {
    const [cryptoList, setCryptoList] = useState([]);
    const [filteredList, setFilteredList] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('market_cap_rank')
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const PAGE_SIZE = 12

    const totalProducts = filteredList.length
    const noOfPages = Math.ceil(totalProducts/PAGE_SIZE)
    const start = currentPage*PAGE_SIZE
    const end = start + PAGE_SIZE
    

    const fetchCryptoData = async ()=> {
        try{
            const data = await fetchCryptos();
            setCryptoList(data)
        } catch(err) {
            console.error('This is the error', err)
        } finally {
            setIsLoading(false)
        }

    }

    const nextPage = () => {
        setCurrentPage(prev => prev+1)
    }

    const prevPage = () => {
        setCurrentPage(prev => prev-1)
    }

    useEffect(() => {
        console.log('fetch data')
        fetchCryptoData()
    }, [])

    useEffect(() => {
        window.scrollTo({
            top:0,
            bottom:0, 
            behavior:'instant'
        })
    }, [currentPage])

    console.log('PAGE PAINTED')

    const filterAndSort = () => {
        let filtered = cryptoList.filter((crypto) => crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) || crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase()))

        filtered.sort((a,b) => {
            switch(sortBy) {
                case 'price':
                    return a.current_price - b.current_price
                case 'price_dec':
                    return b.current_price - a.current_price
                case 'change':
                    return a.price_change_24h - b.price_change_24h
                case 'market_cap':
                    return a.market_cap - b.market_cap
                default:
                    return a.market_cap_rank - b.market_cap_rank
            }
        })

        setFilteredList(filtered)
    }
    
    

    useEffect(() => {
        console.log('sort data')

        filterAndSort()

    }, [sortBy, cryptoList, searchQuery])

    const searchHandler = (e) => {
        setSearchQuery(e.target.value)
    }

    return ( <div className="w-full mx-auto flex flex-col items-center">
         <Header sideComp="search" sideCompHandler={searchHandler}/>
         <hr  className="w-full shadow-md shadow-gray-100 my-4"/>
         
        <div className="w-full md:max-w-2/3 p-2 flex justify-between items-center">
            <div>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value=''>Sort By:</option>
                    <option value="market_cap_rank">Rank</option>
                    <option value="price">Price (Low to High)</option>
                    <option value="price_dec">Price (High to Low)</option>
                    <option value="change">24h Change</option>
                    <option value="market_cap">Market Cap</option>
                </select>
            </div>
            <div className="flex gap-4">
                <Button btnText='Grid' addStyles={viewMode === 'grid'? "bg-foreground text-bg-primary": ""} onClickHandler = {() => setViewMode('grid')}/>
                <Button btnText='List' addStyles={viewMode === 'list'? "bg-foreground text-bg-primary": ""} onClickHandler = {() => setViewMode('list')}/>
            </div>
        </div>
        
        {isLoading? <div>Data Loading...</div>: <div className={`mt-8 px-4 w-full md:max-w-2/3 ${viewMode === 'grid' ? "grid grid-cols-2 md:grid-cols-3 gap-8 justify-center": ""}`}>{filteredList.slice(start, end).map((crypto) => <CryptoCard crypto={crypto} key={crypto.id} />)}</div>}
        <div className="flex w-full justify-center gap-2">
            <PaginationButton currentPage={currentPage} onClickHandler={prevPage} disableButton={currentPage === 0}><ChevronLeft /></PaginationButton>

            <PaginationButton currentPage={currentPage} onClickHandler={nextPage} disableButton={currentPage === noOfPages-1}><ChevronRight /></PaginationButton>


            
        </div>

        <Footer />
    </div>
    );
}
 
export default Home;