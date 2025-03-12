import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { getGroups } from "./groupsGetAll";
import { AppError } from "@/utils/AppError";


export async function groupCreate(newGroup: string){
    try {
        const storagedGroups = await getGroups();
        
        const groupAlreadyExists = storagedGroups.includes(newGroup);
        if(groupAlreadyExists){
            throw new AppError("Já existe um grupo com esse nome.")
        }
        const storage = JSON.stringify([...storagedGroups, newGroup]);
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    }catch(error){
        throw error;
    }
}