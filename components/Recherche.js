import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/native";
import { addFavoriteTrack, addFavoriteArtiste } from './favorisSlice';
import { useDispatch } from "react-redux";

const RechercheScreen = () => {

    const [recherche, setRecherche] = useState('');
    const [resultats, setResultats] = useState([]);
    const [message, setMessage] = useState("");

    const [parArtiste, setParArtiste] = useState(false);
    const [parTrack, setParTrack] = useState(false);

    const [valideRecherche, setValidate] = useState(false);
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const baseURL = " https://itunes.apple.com/search";


    const fetchDatas = async () => {
        let params = parArtiste ? `&entity=allArtist` : `&entity=allTrack`;
        let request = await fetch(`${baseURL}?term=${recherche}${params}`);
        let json = await request.json();
        let matchingArtists = json["results"];
        if (matchingArtists.length == 0 )
            setMessage("Aucun résultat");
        setResultats(matchingArtists);
    };

    const addResultsToResults = (item) => {
        if (item.wrapperType == "artist")
            dispatch(addFavoriteArtiste(item));
        else
            dispatch(addFavoriteTrack(item));
    };

    useEffect(() => {
        if (recherche.trim() != "" && (parArtiste ^ parTrack))
            setValidate(true);
        else
            setValidate(false);
    }, [recherche, parArtiste, parTrack]);

    return (
        <View style={styles.container}>
            <Text> Recherche : </Text>
            <TextInput value={recherche} onChangeText={setRecherche} />
            <View style={{ flexDirection: "row"}} >
                <Text>Recherche par : </Text>
                <Checkbox
                    value={parArtiste}
                    onValueChange={setParArtiste}
                    color={parArtiste ? '#4630EB' : undefined}
                />
                <Text> artiste </Text>
                <Checkbox
                    value={parTrack}
                    onValueChange={setParTrack}
                    color={parTrack ? '#4630EB' : undefined}
                />
                <Text> track </Text>
            </View>
            <Button title='Rechercher' disabled={!valideRecherche} onPress={() => fetchDatas()} style={{marginTop: "10px"}} />
            <StatusBar style="auto" />

            <Text>{message}</Text>

            <FlatList style={{ marginBottom: 10, marginTop:"20px" }}
                data={resultats}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("Détail", { data: item })} style={{justifyContent: "space-between", flexDirection: "row", paddingBottom: "10px"}}>
                            <View style={{ flexDirection: 'row', height: '50px', borderBottom: '1px solid grey' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.artistName}</Text>
                                <Text>{ item.kind ? ` (${item.kind})`: ""}</Text>
                                <Text>{item.trackName ? " - " + item.trackName : ""}</Text>
                                <Text>{item.collectionName ? " - " + item.collectionName : ""}</Text>                       
                            </View>

                        <Pressable onPress={() => addResultsToResults(item) } style={{ height: "40px", border:'1px solid blue', padding: "10px", marginRight:"10px" }}>
                                <Text style={{ textAlign: "center", color:"blue" }}>Add to favorites</Text>
                            </Pressable> 
                    </Pressable>
                )}
                keyExtractor={(item) => item.wrapperType == "artist" ? item.artistId : item.trackId}
            />
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { RechercheScreen};