import { TouchableOpacityProps } from "react-native";
import { Container, Title, UserIcon } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
}
export function GroupCard({title, ...rest}: Props){
    return (
        <Container {...rest}>
            <UserIcon />
            <Title>{title}</Title>
        </Container>
    )
}