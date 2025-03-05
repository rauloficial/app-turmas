import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonStyleTypeProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ButtonStyleTypeProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;
    background-color: ${({theme, type}) => type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
    justify-content: center;
    align-items: center;
`
export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.WHITE};
`