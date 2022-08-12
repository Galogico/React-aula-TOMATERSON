import calopsita from "../imagens/Calopsita.webp"
function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <div className = "grid-icon">
                    <img width={40} src={calopsita} alt=""/>
                    <p className="galog-navbar">GalogReact</p>
                </div>
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                </div>
            </div>
</nav>

        </>
    )
}

export default Navbar;