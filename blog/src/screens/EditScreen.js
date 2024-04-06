import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import BlogContext from '../context/BlogContext';

const EditScreen = ({ route }) => {
    const id = route.params.id;
    const { posts, dispatch } = useContext(BlogContext)

    const post = posts.find((post) => post.id === id)
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const navigation = useNavigation();
    return (
        <View style={styles.form}>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput style={styles.input}
                placeholder="Name of Blog"
                value={title}
                onChangeText={txt => setTitle(txt)} />
            <Text style={styles.label}>Enter Content</Text>
            <TextInput style={styles.input}
                placeholder="Matter"
                value={content}
                onChangeText={txt => setContent(txt)} />
            <Button title="Save Post"
                onPress={() => { dispatch({ type: 'edit', payload: { title, content, id } }); navigation.navigate("Index") }} />
        </View>
    );
}

const styles = StyleSheet.create({
    label: { fontSize: 20, margin: 10, marginLeft: 0 },
    form: { padding: 20 },
    input: { borderWidth: 1, padding: 3, marginBottom: 10 },
});

export default EditScreen