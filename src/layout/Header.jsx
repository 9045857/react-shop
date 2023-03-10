function Header() {
    return (
        <nav className='green darken-3'>
            <div className='nav-wrapper'>
                <a
                    href='/'
                    className='brand-logo'
                >
                    React Shop
                </a>
                <ul
                    id='nav-mobile'
                    className='right hide-on-med-and-down'
                >
                    <li>
                        <a href='https://github.com/9045857/react-shop' target='_blank' rel="noreferrer" >Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
