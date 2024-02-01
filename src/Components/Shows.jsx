import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card"
import { useNavigate } from "react-router"

const Shows = (props) => {
    const [shows,setShows] = useState([])
    useEffect(()=>{
        axios.get("https://api.tvmaze.com/search/shows?q=all").then(res=>{
            setShows(res.data)
        })
    },[])

    if(shows.length===0){
        return <div className="loading">
                    <span class="loader"></span>
        </div>
    }

    

    return <div className="shows">
                    {shows.map(show=>{
                        return <Card show={show.show} clickHandler={props.clickHandler} image={!show.show.image?null:show.show.image.original} name={show.show.name}/>
                    })}
    </div>
}

export default Shows