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
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <>
            <Header />
            <div className='bg-slate-200 '>
                {/* <Outlet /> */}
                <div className='flex flex-row'>
                    <div className='w-3/4'>
                        <BitcoinGraph />
                        BitcoinGraph
                        <Overview />
                        <Sentiment />
                        <AboutBitcoin />
                        <Tokenomics />
                        <Team />
                    </div>
                    <div className='w-1/4'>

                        <div className="flex flex-col text-white">
                            <div className="mt-16 rounded-xl bg-blue-600 align-middle flex-col px-8 py-8">
                                <div className="m-2 justify-center text-3xl">
                                    <h1 className="text-center p-8 font-sans">
                                        Get Started with Koinx for FREE
                                    </h1>
                                </div>
                                <div className="px-8">
                                    <p className="text-center">
                                        With our range of features that you can equip for free, KoinX
                                        allows you to be more educated and aware of your tax reports,
                                    </p>
                                </div>
                                <div className="flex justify-center align-middle m-5 mt-5">
                                    <img
                                        src="https://i.ibb.co/fnyrVCH/images-removebg-preview.png"
                                        alt=""
                                    />
                                </div>
                                <div className="flex align-middle justify-center mb-8">
                                    <button
                                        className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-10 rounded-lg border border-gray-300 mb-4"
                                        onClick={scrollToTop}
                                    >
                                        Get Started for FREE →
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Trending24H />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App