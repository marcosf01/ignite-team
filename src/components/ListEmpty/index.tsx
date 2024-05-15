import { Container, TextEmpty } from "./styles";

type Props = {
    message: string;
}

export function ListEmpty({ message }: Props) {
    return(
        <Container>
            <TextEmpty>{message}</TextEmpty>
        </Container>
    )
}