import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TextEmpty = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`;