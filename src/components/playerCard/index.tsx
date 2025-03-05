import { Container, Icon, NickPlayer } from "./styles";
import { ButtonIcon } from "../buttonIcon";
type Props = {
    name: string;
    onRemove: () => void;
}
export function PlayerCard({name, onRemove}: Props){
    return (
        <Container>
            <Icon name="person"/>
            <NickPlayer>{name}</NickPlayer>
            <ButtonIcon 
            icon="close" 
            type="SECONDARY"
            onPress={onRemove}
            />
        </Container>
    )
}