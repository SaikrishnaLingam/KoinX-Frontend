import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from "react-router-dom";
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';

function App() {

    return (
        <>
            <Header />
            <div className='bg-slate-200'>
                <Outlet />
                <Tokenomics />
                <Team />
            </div>
            <Footer />
        </>
    )
}

export default App