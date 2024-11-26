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
                Somos un grupo de estudiantes de ingeniería química apasionados por los destilados que como proyecto de química aplicada decidimos adentrarnos al mundo del gin con nuestro producto "BuonGin", que es un gin de gusto y aspecto innovador.
                </p>
            </div>
        </div>
    );
}

export default Equipo;
