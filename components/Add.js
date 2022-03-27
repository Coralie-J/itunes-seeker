import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, Text, View, Image, FlatList } from "react-native";


const FavorisScreen = () => {

    const [favoritesTracks, setFavoritesTracks ] = useState([]);
    const [favoritesArtists, setFavoritesArtists ] = useState([]);
    const route = useRoute();

    const addFavoriteTrack = (track) => {
        setFavoritesTracks((current) => [...current, { 
            id: current.length, 
            titre: track.trackName, 
            album: track.collectionName, 
            genre: track.primaryGenreName, 
            artiste: track.artistName, 
            image: track.artworkUrl100,
            type: track.kind
        }]);
    };

    const addFavoriteArtist = (artiste) => {
        setFavoritesArtists((current) => [...current, { id: current.length, nom: artiste.artistName, genre: artiste.primaryGenreName}]);
    }

    useFocusEffect(() => {
        if (! route.params.item) return;

        if (route.params.item.wrapperType == "artist")
            addFavoriteArtist(route.params.item);
        else
            addFavoriteTrack(route.params.item);
        route.params.item = null;

    });

    return (
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: "10px" }}> Vos tracks </Text>
            <FlatList style={{ marginBottom: 10 }}
                data={favoritesTracks}
                renderItem={({ item }) => (
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
                )}
                keyExtractor={(item) => item.id}
            />

            <Text style={{fontWeight: "bold", fontSize: 20 }}> Vos artistes</Text>

            <FlatList
                data={favoritesArtists}
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