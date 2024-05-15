import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;

    margin: 32px 0;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Subtitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`;