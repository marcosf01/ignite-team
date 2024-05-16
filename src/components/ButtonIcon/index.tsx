import { TouchableOpacityProps } from "react-native";
import { Container, Icon, ButtonIconTypeAtyleProps } from "./styles";
import { MaterialIcons } from "@expo/vector-icons"

type Props = TouchableOpacityProps & {
    type?: ButtonIconTypeAtyleProps;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
    return(
        <Container {...rest} >
            <Icon name={icon} type={type} />
        </Container>
    )
}