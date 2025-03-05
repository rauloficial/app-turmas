import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 24px;
`;
export const Form = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    border-radius: 6px;
    flex-direction: row;
`
export const HeaderList = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin: 32px 0 12px;
`
export const NumberOfPlayers = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`