import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

    border-radius: 6px;
    padding: 16px;

    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;