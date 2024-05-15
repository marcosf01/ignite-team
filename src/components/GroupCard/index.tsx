import { Container, IconTeam, Description } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string,
}

export function GroupCard({ title, ...rest }: Props) {
    return(
        <Container {...rest}>
            <IconTeam name="person" />
            <Description>{title}</Description>
        </Container>
    )
}