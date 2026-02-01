import { styles } from "./styles";

type TemplateProps = {
    children: React.ReactNode;
};

function Template({ children }: TemplateProps) {
    return (
        <div style={ styles.container }>
            {children}
        </div>
    );
}

export default Template;