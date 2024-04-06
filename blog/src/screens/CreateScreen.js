import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import BlogContext from '../context/BlogContext';

const CreateScreen = () => {
    const navigation = useNavigation();
    const { dispatch } = useContext(BlogContext)
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    return (
        <View style={styles.form}>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput style={styles.input} placeholder="Name of Blog" onChangeText={txt => setTitle(txt)} />
            <Text style={styles.label}>Enter Content</Text>
            <TextInput style={styles.input} placeholder="Matter" onChangeText={txt => setContent(txt)} />
            <Button
                title="Create Post"
                onPress={() => { dispatch({ type: 'create', payload: { title, content } }); navigation.navigate("Index") }} />
        </View>
    );
}

const styles = StyleSheet.create({
    label: { fontSize: 20, margin: 10, marginLeft: 0 },
    form: { padding: 20 },
    input: { borderWidth: 1, padding: 3, marginBottom: 10 },
});

export default CreateScreen