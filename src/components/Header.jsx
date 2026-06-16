import headerImage from '../assets/images/header-icon.jpg'

const Header = ({searchHandler}) => {
    return ( 
        <nav className="w-full md:max-w-2/3 h-30 flex justify-between items-center mt-8">
            <div className="flex flex-col items-start gap-2">
                <div className='flex items-center'>
                    <img src={headerImage} alt="crypto icon in header" className=' w-8 md:w-14' />
                    <h1 className="text-3xl">Crypto Tracker</h1>
                </div>
                <span className='text-sm'>Real time crypto-currency prices and market data</span>
            </div>
            <div>
                <input type="text" placeholder="Search crypto" className="border-none outline-none bg-bg-secondary rounded-4xl py-2 px-4 w-80 md:max-md:hidden" onChange={(e) => searchHandler(e)}/>

                <span className='md:hidden'>S</span>
            </div>
        </nav>
     );
}
 
export default Header;