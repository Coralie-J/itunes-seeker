import { useEffect, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { addNoteArtiste } from "./favorisArtistSlice";
import { addNote } from "./favorisTrackSlice";
import { useSelector } from "react-redux";

const NoteScreen = () => {

    const [note, setNote ] = useState(-89);
    const [validate, setValidate ] = useState(false);
    const dispatch = useDispatch();

    const addNoteFavorite = (item) => {
        if (item.wrapperType == "artist")
            dispatch(addNoteArtiste(item));
        else
            dispatch(addNote(item));
    }

    useEffect(() => {
        if (note < 6 && note > -1)
            setValidate(true);
        else
            setValidate(false);
    }, [note]);

    return (
        <View>
            <Image source={track.image} style={{width: "7%", height: "70px"}} />
            <Text> Titre : {track.titre }</Text>
            <Text> Artiste : {track.artiste}</Text>
            <Text> Album : {track.album}</Text>
            <Text> Genre : {track.genre}</Text>
            <Text> Note sur /5 : </Text>
            <TextInput value={note} onChangeText={setNote} />
            <Button title="Noter" disabled={!validate} onPress={addNoteFavorite(track)} />
        </View>
    );

};

export { NoteScreen };