import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from "react-router-dom";
import Tokenomics from './components/Tokenomics';

function App() {

    return (
        <>
            <Header />
            <div className='bg-slate-200'>
                <Outlet />
                <Tokenomics />
            </div>
            <Footer />
        </>
    )
}

export default App