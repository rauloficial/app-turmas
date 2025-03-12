import { Header } from "@/components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@/components/highlight";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { groupCreate } from "@/storage/group/groupCreate";
import { AppError } from "@/utils/AppError";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if(group.trim().length === 0) {
        return Alert.alert("Atenção", "Informe o nome da turma.")
      }
      await groupCreate(group);
      navigation.navigate('Players', {group});
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert("Atenção", error.message);
      }else {
        Alert.alert("Atenção", "Ocorreu um erro ao tentar salvar a turma");
        console.error(error);
      }
    }
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar pessoas"
        />
        <Input placeholder="Nome da Turma" onChangeText={setGroup} />
        <Button style={{ marginTop: 20 }} title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
