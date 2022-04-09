import { useEffect, useState } from "react";
import { Button, TextInput, View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addNote, favoritesTracksSelector } from "./favorisSlice";
import { useRoute } from "@react-navigation/native";

const NoteScreen = () => {

    const [note, setNote ] = useState('');
    const [validate, setValidate ] = useState(true);
    const dispatch = useDispatch();
    let item;
    const route = useRoute();

    let favoritesTrack = useSelector(favoritesTracksSelector);

    const selectItem = (liste, id) => {
        for (let track of liste) {
            if (track.id == id) {
                return track;
            }
        }
    };

    if (route.params.id != null)
        item = selectItem(favoritesTrack, route.params.id);

    const addNoteFavorite = (item) => {
        dispatch(addNote({id: item.id, note: note}));
    }

    useEffect(() => {
        if (+note < 6 && +note > -1 && note.trim() != "")
            setValidate(false);
        else
            setValidate(true);
    }, [note]);

    return (
        <View style={{ width: '100%', flexDirection: 'row', height: '90px', marginTop: "10px" }}>
            <Image source={item.image} style={{ resizeMode: "contain", width: "5%", height: "70px", marginTop: '5px' }} />
            <View>
                <Text> Titre : {item.titre}</Text>
                <Text> Album : {item.album}</Text>
                <Text> Artiste : {item.artiste}</Text>
                <Text> Genre : {item.genre}</Text>
                <Text> Note sur /5 : </Text>
                <TextInput value={note} onChangeText={setNote} />
                <Button title="Noter" disabled={validate} onPress={() => addNoteFavorite(item)} />
            </View>
        </View>

    );

};

export { NoteScreen };