import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
    flex: 1;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;

export const IconGroup = styled( MaterialIcons ).attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_700,
    size: 56
}))`
    align-self: center;
`;