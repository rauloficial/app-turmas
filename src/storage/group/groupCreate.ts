import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { getGroups } from "./groupsGetAll";


export async function groupCreate(newGroup: string){
    try {
        const storagedGroups = await getGroups();
        const storage = JSON.stringify([...storagedGroups, newGroup]);
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    }catch(error){
        throw error;
    }
}