import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";

export async function getGroups() {
  /* Obtendo dados salvos e armazenando na variavel 
  
  Esse código tenta recuperar uma lista de grupos armazenada localmente. 
  Se encontrar, ele a converte de string para um array e retorna. 
  Se não encontrar nada, retorna um array vazio.
  */
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groups: string[] = storage ? JSON.parse(storage) : [];
    return groups;
  } catch (error) {
    throw error;
  }
}
