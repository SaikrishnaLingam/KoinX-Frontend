import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
//import { Outlet } from "react-router-dom";
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';
import Sentiment from './components/Sentiment';
import AboutBitcoin from './components/AboutBitcoin';
import Overview from './components/Overview';
import Trending24H from './components/Trending24H';
import BitcoinGraph from './components/BitcoinGraph';
import GetStarted from './components/GetStarted';

function App() {
    
    return (
        <>
            <Header />
            <div className='bg-slate-200 '>
                {/* <Outlet /> */}
                <div className='flex flex-row'>
                    <div className='w-2/3'>
                        <BitcoinGraph />
                        BitcoinGraph
                        <Overview />
                        <Sentiment />
                        <AboutBitcoin />
                        <Tokenomics />
                        <Team />
                    </div>
                    <div className='w-1/3 mr-8'>
                        <GetStarted />
                        <Trending24H />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App