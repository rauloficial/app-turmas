import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type FilterProps = {
    active?: boolean;
}
export const Container = styled(TouchableOpacity)<FilterProps>`
    ${({theme, active}) => active && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
    `}
    border-radius: 4px;
    margin-right: 12px;
    height: 38px;
    width: 70px;
    justify-content: center;
    align-items: center;
`
export const Title = styled.Text`
    text-transform: uppercase;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.WHITE}
`