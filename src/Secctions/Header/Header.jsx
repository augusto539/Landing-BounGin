import './Header.css';

import botella from './imgs/botella.png'
import liquido from './imgs/liquido.png'

function Header() {
    return (
        <div className="Header">
            <div className="izquierda">
                <h1><span className='Boun'>Boun</span> <span className='Gin'>Gin </span> </h1>
                <h2>La presicion quimica echa sabor </h2>
            </div>
            <div className="derecha">
                <img className='botella' src={botella} alt="Botella de BounGin" />
                <img className='liquido' src={liquido} alt="BounGin siendo servido" />
            </div>
        </div>
    );
}

export default Header;
