import CryptoTaxes from './Header Components/CryptoTaxes';
import FreeTools from './Header Components/FreeTools';
import GetStarted from './Header Components/GetStarted';
import ResourceCenter from './Header Components/ResourceCenter';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import  { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="sticky z-50 top-0">
            <nav className="bg-white  px-4 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <NavLink to='/'>
                            <Logo />
                        </NavLink>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-blue-600 bg-gray-100 py-2 px-4 rounded-md text-lg hover:text-blue-500">
                            <img className="w-[20px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt=""/>
                        </button>
                        {isOpen && (
                            <div className="fixed top-0 right-0 m-4 z-50">
                                <div className="bg-white rounded-md p-4 shadow-md">
                                    <div className="mb-4">
                                        <NavLink to='https://www.koinx.com/crypto-tax-guides/india' target="_blank" rel="noopener noreferrer" className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0">
                                            <CryptoTaxes />
                                        </NavLink>
                                        <NavLink to='https://www.koinx.com/crypto-tax-calculator-india' target="_blank" rel="noopener noreferrer" className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0">
                                            <FreeTools />
                                        </NavLink>
                                        <NavLink to='https://www.koinx.com/features' target="_blank" rel="noopener noreferrer" className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0">
                                            <ResourceCenter />
                                        </NavLink>
                                        <NavLink to='https://app.koinx.com/get-started' target="_blank" rel="noopener noreferrer" className="block text-center duration-200 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0">
                                            <GetStarted />
                                        </NavLink>
                                    </div>
                                    <button onClick={toggleMenu} className=" bg-gray-100 py-2 rounded-md text-black px-4 text-lg hover:text-blue-500">
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <ul className="md:flex md:flex-row md:items-center hidden">
                        <li className='pr-8 font-bold'>
                            <NavLink to='https://www.koinx.com/crypto-tax-guides/india' target="_blank" rel="noopener noreferrer" className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                            }>
                                <CryptoTaxes />
                            </NavLink>
                        </li>
                        <li className='pr-8 font-bold'>
                            <NavLink to='https://www.koinx.com/crypto-tax-calculator-india' target="_blank" rel="noopener noreferrer" className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                            }>
                                <FreeTools />
                            </NavLink>
                        </li>
                        <li className='pr-8 font-bold'>
                            <NavLink to='https://www.koinx.com/features' target="_blank" rel="noopener noreferrer" className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                            }>
                                <ResourceCenter />
                            </NavLink>
                        </li>
                        <li className='font-bold bg-blue-600 rounded-lg flex justify-center px-6 py-2'>
                            <NavLink to='https://app.koinx.com/get-started' target="_blank" rel="noopener noreferrer" className={({ isActive }) =>
                                `block text-center duration-200 ${isActive ? "text-yellow-500" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0`
                            }>
                                <GetStarted />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
