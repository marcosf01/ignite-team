import { TouchableOpacityProps } from "react-native";
import { Container, TextButton, ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
    type?: ButtonTypeStyleProps;
    title: string
}

export function Button({ type = 'PRIMARY', title, ...rest }: Props) {
    return(
        <Container type={type}>
            <TextButton>{title}</TextButton>
        </Container>
    )
}