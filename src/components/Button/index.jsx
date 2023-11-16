import { Container } from "./styles";

export function Button({ title, icon: Icon, onClick, ...rest }) {
    return(
        <Container
            type="button"
            {...rest}
            onClick={onClick}
        >
            { Icon && <Icon size={20} /> } 
            { title }
        </Container>
    )
}