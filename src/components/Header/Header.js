

const navItem = [
    {
        title : 'Home',
        url : '#'
    },
    {
        title : 'About Me',
        url : '#'
    },
    {
        title : 'Services',
        url : '#'
    },
    {
        title : 'Portfolio',
        url : '#'
    },
    {
        title : 'Testimonal',
        url : '#'
    },
]


function Header() {
    
  return (
    <>
    <header className="py-4 border-dark border-b-2">
        <div className="container">
            <div className="navbar flex items-center justify-between">
                {/* Logo Sectio */}
                <a href="/" className="text-primary font-semibold text-base leading-normal">
                    <span>Portfolio</span>
                </a>
                {/* Navbar Nav Section */}
                <ul className="flex items-center justify-center gap-x-8">
                    {
                        navItem.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a href={item.url} className="text-white text-base leading-normal hover:text-primary duration-300">{item.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* Navbar Button */}
                <div>
                    <button type="button" className="btn-primary text-sm  py-3.5 px-7">Contact Me</button>
                </div>

            </div>
        </div>
    </header>
    </>
  )
}

export default Header