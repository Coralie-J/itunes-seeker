import {Text, View, Image, FlatList, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { favoriteArtistsSelector } from "./favorisArtistSlice";
import { favoriteTracksSelector } from "./favorisTrackSlice";
import { setTrack } from "./DetailSlice";
import { useNavigation } from "@react-navigation/native";

const FavorisScreen = () => {

    const favoritesTracks = useSelector(favoriteTracksSelector);
    const favorisArtists = useSelector(favoriteArtistsSelector);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const joinNote = (item) => {
        // dispatch(setTrack(item)); 
        //navigation.navigate("Add note");
    }

    return (
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: "10px" }}> Vos tracks </Text>
            <FlatList style={{ marginBottom: 10 }}
                data={favoritesTracks}
                renderItem={({ item }) => (
                    <Pressable onPress={joinNote(item)}>
                        <View style={{ width: '100%', flexDirection: 'row', height: '90px', borderBottom: '1px solid grey', marginTop: "10px" }}>
                        <Image source={item.image} style={{ resizeMode: "contain", width: "5%", height: "70px", marginTop:'5px' }} />
                            <View>
                                <Text> Titre : {item.titre}</Text>
                                <Text> Album : {item.album}</Text>
                                <Text> Artiste : {item.artiste}</Text>
                                <Text> Genre : {item.genre}</Text>
                                <Text> Type de track : {item.type}</Text>
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