import {NavigationContainer} from "@react-navigation/native"
import { AppRoutes } from "./app.routes"
import { View } from "react-native"

export function Routes(){
    return (
    <View style={{backgroundColor: "#202024", flex: 1}}>
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
        </View>
    )
}