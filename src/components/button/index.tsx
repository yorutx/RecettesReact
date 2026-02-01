import { Link } from "react-router-dom";
import { styles } from "./styles"

type ButtonProps = {
    title: string;
    to   : string;
};

function Button({ title, to }: ButtonProps) {
    return (
        <Link to={to} style={styles.link}>
            {title}
        </Link>
    );

}

export default Button;