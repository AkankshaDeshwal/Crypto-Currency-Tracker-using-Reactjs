import { ArrowLeft } from 'lucide-react';
import headerImage from '../assets/images/header-icon.jpg'
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = ({sideComp, sideCompHandler}) => {
    return ( 
        <nav className="w-full md:max-w-2/3 h-30 flex justify-between items-center mt-8">
            <div className="flex flex-col items-start gap-2">
                <Link to='/'>
                <div className='flex items-center'>
                    <img src={headerImage} alt="crypto icon in header" className=' w-8 md:w-14' />
                    <h1 className="text-3xl">Crypto Tracker</h1>
                </div></Link>
                <span className='text-sm'>Real time crypto-currency prices and market data</span>
            </div>
            <div>
                {sideComp === 'search'? <input type="text" placeholder="Search crypto" className="border-none outline-none bg-bg-secondary rounded-4xl py-2 px-4 w-80 md:max-md:hidden" onChange={(e) => sideCompHandler(e)}/>:
                
                <Button btnText='Go Back' onClickHandler={sideCompHandler} addStyles="bg-foreground text-bg-primary hover:bg-muted hover:text-foreground"><ArrowLeft className='inline' size={15} /></Button>}

                
            </div>
        </nav>
     );
}
 
export default Header;