import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RechercheScreen } from './components/Recherche.js';
import { DetailScreen } from "./components/Detail.js";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Recherche">
                <Stack.Screen name="Recherche" component={RechercheScreen} />
                <Stack.Screen name="Détail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;