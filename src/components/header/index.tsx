import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackIcon, BackButton } from "./styles";
import logoImg from "@/assets/logo.png"

/*  Caso showBackButton seja True, aparece o Icon de voltar */
type Props = {
    showBackButton?: boolean;
}
export function Header({showBackButton = false}:Props){
    const navigation = useNavigation();
    
    function handleGoBack(){
        navigation.navigate('Groups');
    }
    return (
        <Container>
            { showBackButton &&
                <BackButton onPress={handleGoBack}> 
                <BackIcon/>
            </BackButton>}
            <Logo source={logoImg}/>
        </Container>
    )
}