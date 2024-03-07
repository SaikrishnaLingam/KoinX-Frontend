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
import { Link } from 'react-scroll';

function App() {

    return (
        <>
            <Header />
            <div className='bg-slate-200 '>
                <div className='flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-2/3'>
                        <BitcoinGraph />

                        {/* Options */}
                        <div className="m-5 py-5 mx-16 border-b-2 text-xl border-gray-300 ">
                            <ul className="flex flex-wrap justify-center md:justify-between">
                                <li className="mb-2">
                                    <Link to="overview" smooth={true} duration={500}  className="cursor-pointer">
                                        Overview
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="fundamentals" smooth={true} duration={500} className="cursor-pointer">
                                        Fundamentals
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="news-insight" smooth={true} duration={500} className="cursor-pointer">
                                        News Insight
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="sentiments" smooth={true} duration={500} className="cursor-pointer">
                                        Sentiments
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="team" smooth={true} duration={500} className="cursor-pointer">
                                        Team
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="technicals" smooth={true} duration={500} className="cursor-pointer">
                                        Technicals
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="tokenomics" smooth={true} duration={500} className="cursor-pointer">
                                        Tokenomics
                                    </Link>
                                </li>
                            </ul>
                        </div>

                       <div id='overview' ><Overview /> </div> 
                       <div id='sentiments' > <Sentiment /></div>
                       <div id='technicals'><AboutBitcoin /></div>  {/* change id later */}
                       <div id='tokenomics' ><Tokenomics /></div> 
                       <div id='team'><Team  /></div>
                    </div>
                    <div className='w-full lg:w-1/3 lg:ml-8'>
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