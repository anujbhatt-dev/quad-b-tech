import { useEffect } from "react"
import { useNavigate } from "react-router"

const Show = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!Object.keys(props.show).length || !props.show.image || !props.show.image.original) {
          navigate("../");
        }
      }, [props.show, navigate]);
    
      
      if (!props.show || !props.show.image) {
        return null; 
      }
    
    return <div className="show-wrapper">
                <div className="show">
                    <img className="show-image" src={props.show.image.original} alt="" />
                    <div className="show-content">
                        <p className="show-name">{props.show.name}</p>
                        <div className="show-flexer">
                            <p className="show-duration">{props.show.runtime} minutes</p> |
                            <p className="show-lang">{props.show.language}</p>
                        </div>
                        <p className="show-summary" dangerouslySetInnerHTML={{ __html: props.show.summary }}></p>

                    </div>
                </div>
            </div>
}

export default Show