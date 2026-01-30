import { Link } from "react-router-dom";

function Button(props) {
    return (
        <Link to={props.to}>
            <p>{props.title}</p>
        </Link>
    );

}

export default Button;