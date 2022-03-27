import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailScreen } from "./components/Detail.js";
import { TabScreen } from "./components/Tab.js";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="Détail" component={DetailScreen} />
                <Stack.Screen name="Tabs" component={TabScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;