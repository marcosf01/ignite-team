import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Form = styled.View`
    width: 100%;
    
    border-radius: 6px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    justify-content: center;

    flex-direction: row;
`;

export const HeaderList = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;

    margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;