import { Link } from "react-router-dom";
import { styles } from "./styles"

function Button(props) {
    return (
        <div>
            <Link to={props.to} style={styles.link}>
                {props.title}
            </Link>
        </div>
    );

}

export default Button;