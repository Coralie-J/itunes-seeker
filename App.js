import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailScreen } from "./components/Detail.js";
import { TabScreen } from "./components/Tab.js";
import { NoteScreen } from "./components/Note.js";
import store from "./store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";


const Stack = createNativeStackNavigator();
let persistor = persistStore(store);

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Tabs">
                        <Stack.Screen name="Détail" component={DetailScreen} initialParams={{data: null }} />
                        <Stack.Screen name="Note" component={NoteScreen} initialParams={{ id: null }} />
                        <Stack.Screen name="Tabs" component={TabScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;