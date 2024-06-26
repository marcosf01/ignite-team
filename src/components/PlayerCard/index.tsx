import { Button } from "../Button";
import { ButtonIcon } from "../ButtonIcon";
import { Container, Icon, Name } from "./styles";

type Props = {
    name: string;
}

export function PlayerCard({ name }: Props) {
    return(
        <Container>
            <Icon name="person" />
            <Name>
                {name}
            </Name>
            <ButtonIcon icon="close" type="SECUNDARY" />
        </Container>
    )
}