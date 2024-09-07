import logo from '../assets/logo.png'

function Header() {
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full'>
            <img
                className='w-44'
                src={logo}
                alt='Logo'
                
            />
        </div>
    )
}

export default Header