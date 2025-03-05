import { TouchableOpacityProps } from "react-native";
import { Container, Title, ButtonStyleTypeProps } from "./styles";

type Props = TouchableOpacityProps & {
    buttonType?: ButtonStyleTypeProps;
    title: string;
}
export function Button({title, buttonType = 'PRIMARY', ...rest}: Props){
    return (
        <Container 
        type={buttonType}
        {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}