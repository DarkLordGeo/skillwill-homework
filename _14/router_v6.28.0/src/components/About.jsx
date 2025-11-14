import image from '../img/dipper.webp'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <h1>
                dipper pines
            </h1>
            <img src={image} width={"250px"} />
            <br />
            <Link to={"facts"}>Facts</Link>
        </div>
    )
}

export default About
