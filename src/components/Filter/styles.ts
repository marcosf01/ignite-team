import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type FilterStyleProps = boolean;

type Props = {
    isActive: FilterStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
    border: 1px solid ${({ theme, isActive }) => isActive ? theme.COLORS.GREEN_700 : theme.COLORS.GRAY_600};

    border-radius: 4px;
    margin-right: 12px;

    height: 38px;
    width: 70px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};

    text-transform: uppercase;
`;
