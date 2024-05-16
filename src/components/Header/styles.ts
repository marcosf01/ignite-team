import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;

export const BackIcon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.WHITE,
}))``;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;