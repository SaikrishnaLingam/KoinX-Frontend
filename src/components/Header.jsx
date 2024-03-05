import CryptoTaxes from './Header Components/CryptoTaxes';
import FreeTools from './Header Components/FreeTools';
import GetStarted from './Header Components/GetStarted';
import ResourceCenter from './Header Components/ResourceCenter';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="sticky z-50 top-0">
            <nav className="bg-white  px-4 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <NavLink to='/'>
                            <Logo />
                        </NavLink>
                    </div>
                    <ul className="flex flex-row items-center">
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
