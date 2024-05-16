import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, IconGroup, Content } from "./styles";


export function NewGroup() {
    return(
        <Container>
            <Header showBackButton />

            <Content>

                <IconGroup name="person-add" />
                <Highlight title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />   

                <Input placeholder="Nome da turma" style={{ marginBottom: 20 }} />
                <Button title="Criar" />

            </Content>
            
        </Container>
    )
}