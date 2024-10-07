import { useEffect, useState } from "react";

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen)
    }

    return <nav className={scroll ? 'scrolled' : ''}>
        <div className="container desk">
            <div className="logo">Logo</div>
            <div className="items">
                <ul className="container">
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#como-trabajamos">Como Trabajamos</a></li>
                    <li><a href="#hablemos">Agendá un meet</a></li>
                    <li><a href="#preguntas-frecuentes">preguntas</a></li>
                </ul>
            </div>
            <div className="contact">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                    +00 0 00 0000-0000
                </button>
            </div>
        </div>

        <div className="container mobile">
            <div className="logo">Logo</div>
            <button className="burger" onClick={handleMenuClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
            </button>

            <div className={`items ${menuOpen ? "open" : ""}`}>
                <ul className="container">
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#como-trabajamos">Como Trabajamos</a></li>
                    <li><a href="#hablemos">Agendá un meet</a></li>
                    <li><a href="#preguntas-frecuentes">preguntas</a></li>
                </ul>
            </div>
        </div>
    </nav>
}
export default Navbar;