import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Card = (props) => {

    useEffect(()=>{
        Aos.init({
            duration: 1500,
            delay: 100
          });
    },[])
    return <div data-aos="zoom-out" className="card-wrapper">
                {props.image?
                    <div className="card">
                            <img src={props.image} alt="" />
                            <div className="card-content">
                                <p className="card-p">{props.name}</p>
                                <button onClick={()=>props.clickHandler(props.show)} className="card-btn">Know More</button>
                            </div>
                        </div>:
                        <div className="card-content">
                        <p className="card-p">{props.name}</p>
                        <button className="card-btn">Know More</button>
                    </div>
                }
                
    </div>
}

export default Card