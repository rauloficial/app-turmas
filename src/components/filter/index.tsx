import { TouchableOpacityProps } from "react-native";
import { Container, FilterProps, Title } from "./styles";


type Props = TouchableOpacityProps & FilterProps & {
    title: string;
}
export function Filter({title, active = false, ...rest}: Props){
    return (
        <Container 
        active={active}
        {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}