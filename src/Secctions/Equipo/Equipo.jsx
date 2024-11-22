import './Equipo.css';
import equipo from './img/equipo.png'

function Equipo() {
    return (
        <div className="Equipo">
            <div className="izquierda">
                <div className="img">
                <img src={equipo} alt="" />
                </div>
            </div>
            <div className="derecha">
                <p>
                    Somos un grupo de estudiantes de ingenieria quimica apacionados por los destilados que como poryecto de quimica aplicada decidimos adentrarnos al mundo del gin con nuestro producto "BounGin", que es un gin de gusto y aspecto inovador.
                </p>
            </div>
        </div>
    );
}

export default Equipo;
