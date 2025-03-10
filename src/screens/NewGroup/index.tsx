import { Header } from "@/components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@/components/highlight";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup(){
    const [group, setGroup] = useState('')

    const navigation = useNavigation();

    function handleNew(){
        navigation.navigate('Players', {group});
    }
    return (
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>
                <Highlight 
                title="Nova turma"
                subtitle="crie a turma para adicionar pessoas"
                />
                <Input 
                placeholder="Nome da Turma"
                onChangeText={setGroup}
                />
                <Button 
                style={{marginTop: 20}}
                title="Criar"
                onPress={handleNew}
                />
            </Content>
        </Container>
    )
}