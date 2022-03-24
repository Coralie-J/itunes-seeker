import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const RechercheScreen = () => {

    const [artiste, setArtiste] = useState('');
    const [resultats, setResultats] = useState([]);
    const [artistes_perso, setArtistesPerso] = useState([]);

    const [valideRecherche, setValidate] = useState(false);

    const navigation = useNavigation();

    const [track, setTrack] = useState('');
    const baseURL = " https://itunes.apple.com/search";


    const fetchDatas = async () => {
        let params;

        if (artiste != "")
            params = `${artiste}&entity=allArtist`;
        else if (track != "")
            params = `${track}&entity=allTrack`;

        let request = await fetch(`${baseURL}?term=${params}`);
        let json = await request.json();
        let matchingArtists = json["results"];
        setResultats(matchingArtists);
    };


    useEffect(() => {
        if (artiste.trim() != "" || track.trim() != "")
            setValidate(true);
        else
            setValidate(false);
    }, [artiste, track]);

    return (
        <View style={styles.container}>
            <Text> Recherche par artiste : </Text>
            <TextInput value={artiste} onChangeText={setArtiste} />
            <Text> Recherche par nom de track : </Text>
            <TextInput value={track} onChangeText={setTrack} />
            <Button title='Rechercher' disabled={!valideRecherche} onPress={fetchDatas} style={{marginTop: "10px"}} />
            <StatusBar style="auto" />

            <FlatList style={{ marginBottom: 10 }}
                data={resultats}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("Détail", { data: item })}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', height: '50px', borderBottom: '1px solid grey' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.artistName}</Text>
                            <Text>{ item.kind ? ` (${item.kind})`: ""}</Text>
                            <Text>{item.trackName ? " - " + item.trackName : ""}</Text>
                            <Text>{item.collectionName ? " - " + item.collectionName : ""}</Text>
                        </View>
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