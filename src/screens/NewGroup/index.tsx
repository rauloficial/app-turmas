import { Header } from "@/components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@/components/highlight";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

export function NewGroup(){
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
                />
                <Button 
                style={{marginTop: 20}}
                title="Criar"
                />
            </Content>
        </Container>
    )
}