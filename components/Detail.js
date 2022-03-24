import { useRoute } from "@react-navigation/native";
import { ScrollView, Text, View, Image } from "react-native";

const DetailScreen = () => {

    const route = useRoute();
    let data = route.params.data;

    if (data != null) {

        if (data.wrapperType == "artist"){
            return (
                <ScrollView>
                    <View>
                        <Text> Nom de l'artiste : {data.artistName}</Text>
                        <Text> Lien Itunes Music : {data.artistLinkUrl}</Text>
                        <Text> Genre musical : {data.primaryGenreName ? data.primaryGenreName : "Indéfini" }</Text>
                    </View>
                </ScrollView>
            );
        } else {
            return (
                <ScrollView>
                    <View>
                        <Image source={data.artworkUrl100} style={{ width: '100%', height:"100px", resizeMode: 'contain' }} />
                        <Text> Titre de l'oeuvre: {data.trackName} </Text>
                        <Text> Tiré de l'album : {data.collectionName} </Text>
                        <Text> Nom de l'artiste : {data.artistName}</Text>
                        <Text> Lien Itunes Music de l'artiste : {data.artistViewUrl}</Text>
                        <Text> Genre : {data.primaryGenreName ? data.primaryGenreName : "Indéfini"}</Text>
                        <Text> Date de réalisation : { new Date(data.releaseDate).toLocaleDateString() } </Text>
                        <Text> Lien vers le previex de l'oeuvre : {data.previewUrl} </Text>
                        <Text> Lien vers l'album : {data.collectionViewUrl} </Text>
                        <Text> Prix : {data.trackPrice} {data.currency} </Text>
                    </View>
                </ScrollView>
            );
        }
    }

    return (
        <View>
            <Text> Rien n'a été selectionné</Text>
        </View>
    );
}

export { DetailScreen };