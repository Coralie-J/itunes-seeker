import {Text, View, Image, FlatList, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { favoritesTracksSelector, favoritesArtistsSelector } from "./favorisSlice";
import { useNavigation } from "@react-navigation/native";

const FavorisScreen = () => {

    const favoritesTracks = useSelector(favoritesTracksSelector);
    const favorisArtists = useSelector(favoritesArtistsSelector);
    const navigation = useNavigation();

    return (
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: "10px" }}> Vos tracks </Text>
            <FlatList style={{ marginBottom: 10 }}
                data={favoritesTracks}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("Note", {id: item.id })} >
                        <View style={{ width: '100%', flexDirection: 'row', height: '110px', borderBottom: '1px solid grey', marginTop: "10px" }}>
                        <Image source={item.image} style={{ resizeMode: "contain", width: "5%", height: "70px", marginTop:'5px' }} />
                            <View>
                                <Text> Titre : {item.titre}</Text>
                                <Text> Album : {item.album}</Text>
                                <Text> Artiste : {item.artiste}</Text>
                                <Text> Genre : {item.genre}</Text>
                                <Text> Type de track : {item.type}</Text>
                                <Text>{item.note ? ` Note : ${item.note}/5` : "Non noté"}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
            />

            <Text style={{fontWeight: "bold", fontSize: 20 }}> Vos artistes</Text>

            <FlatList
                data={favorisArtists}
                renderItem={({ item }) => (
                    <View style={{ width: '100%', height: '50px', borderBottom: '1px solid grey', marginTop: '10px' }}>
                        <Text> Nom : {item.nom}</Text>
                        <Text> Genre : {item.genre}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />

        </View>
    );

};

export { FavorisScreen };