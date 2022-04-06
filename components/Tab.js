import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { RechercheScreen } from './Recherche';
import { FavorisScreen } from './Add';


const TabScreen = () => {
    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator
            initialRouteName="Recherche"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;

                    if (route.name == "Favoris")
                        iconName = focused ? "star" : "star-outline";
                    else if (route.name == "Recherche")
                        iconName = focused ? "search-circle" : "search-circle-outline";
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "grey",
                headerShown: false
            })}
        >
            <Tabs.Screen name="Favoris" component={FavorisScreen} initialParams={{ item: null }} />
            <Tabs.Screen name="Recherche" component={RechercheScreen} />
        </Tabs.Navigator>
    );
};

export { TabScreen };