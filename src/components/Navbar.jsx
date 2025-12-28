
const Navbar = () => {
    const links = ['HOW IT WORKS', 'BROWSE', 'SEARCH', 'START A PROFILE', 'ADD YOUR AGENCY'];
    return (
        <nav className='w-full border-b border-b-gray-300 py-4 px-16 flex justify-between items-center'>
            <div className='flex justify-center items-center gap-8'>
                <img className='w-8 cursor-pointer' src="logo.jpg" alt="logo" loading='lazy' />
                <h1 className='font-bold cursor-pointer'>Hubstaff Directory</h1>
            </div>
            <div className=' justify-center items-center gap-8 hidden md:flex'>
                {links.map((elem, idx) => {
                    return <h4 className={`${idx > 2 ? "text-blue-500" : "text-gray-400"} cursor-pointer`} key={idx}>
                        {elem}
                    </h4>
                })}
            </div>
        </nav>
    )
}

export default Navbar
