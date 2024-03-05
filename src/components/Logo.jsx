import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to="/">
            <img src='src\assets\logo.png' alt='KoinX TM' className='h-8'/>
        </Link>
    )
}

export default Logo