import { Header } from "@/components/header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@/components/highlight";
import { ButtonIcon } from "@/components/buttonIcon";
import { Input } from "@/components/input";
import { Filter } from "@/components/filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@/components/playerCard";
import { ListEmpty } from "@/components/listempty";
import { Button } from "@/components/button";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<string[]>([]);
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome do jogador" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              active={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => <ListEmpty message="Nenhum jogador" />}
      />
      <Button title="Remover turma" buttonType="SECONDARY" />
    </Container>
  );
}
