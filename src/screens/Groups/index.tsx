import { useState } from "react";
import { FlatList } from "react-native";

import { Button } from "@/components/button";
import { GroupCard } from "@/components/groupcard";
import { Header } from "@/components/header";
import { Highlight } from "@/components/highlight";
import { ListEmpty } from "@/components/listempty";
import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhum grupo criado ainda" />
        )}
      />
      <Button title="Nova turma" />
    </Container>
  );
}
