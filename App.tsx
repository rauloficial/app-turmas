import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from '@/theme';
import {useFonts, Roboto_700Bold, Roboto_400Regular} from "@expo-google-fonts/roboto"
import { Loading } from '@/components/loading';
import { Groups } from '@/screens/Groups';
import { NewGroup } from '@/screens/NewGroup';
import { Players } from '@/screens/Players';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      {fontsLoaded ? <NewGroup/> : <Loading/>}
    </ThemeProvider>
  );
}
