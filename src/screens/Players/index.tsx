import { FlatList } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { useState } from "react";
import { PlayerCard } from "../../components/PlayerCard";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";

export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState([])

    return(
        <Container>
            <Header showBackButton />

            <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />

            <Form>
                <Input placeholder="Nome do participante" />
                <ButtonIcon icon="add"/>
            </Form>

            <HeaderList>
                
                <FlatList 
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter 
                            isActive={item === team} 
                            title={item}
                            onPress={() => setTeam(item)}
                        />
                
                    )}
                    horizontal
                />
                <NumberOfPlayers>
                    {}
                </NumberOfPlayers>

            </HeaderList>

            <FlatList 
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard name={item} />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty message="Nao ha pessoas nese time" />
                )}
                contentContainerStyle={(
                    players.length === 0 && { flex: 1 }
                )}
            />

            <Button title="Remover turma" type="SECUNDARY" />
        </Container>
    )
}