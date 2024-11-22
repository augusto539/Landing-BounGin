import './Batchs.css';
import botellas from './img/Botellas.png'

function Batchs() {
    return (
        <div className="Batchs">
            <div className="derecha">
                <p>
                Acabamos de terminar el primer batch de BounGIn, <br /> !envíanos un mail así no te quedas sin tu botella¡
                </p>
            </div>
            <div className="izquierda">
                <div className="img">
                    <img src={botellas} alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default Batchs;
