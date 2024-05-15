import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 96px;

    padding: 29px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};

    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    margin-bottom: 12px;
`;

export const IconTeam = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GREEN_700,
}))`
    margin-right: 18px;
`;

export const Description = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;