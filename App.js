import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailScreen } from "./components/Detail.js";
import { TabScreen } from "./components/Tab.js";
import { NoteScreen } from "./components/Note.js";
import store from "./store";
import { Provider } from "react-redux";


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="Détail" component={DetailScreen} />
                <Stack.Screen name="Tabs" component={TabScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
};

export default App;