import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BlogContext from '../context/BlogContext';

const ShowScreen = ({ route }) => {

    const navigation = useNavigation();
    const id = route.params.id;
    const { posts } = useContext(BlogContext)
    const post = posts.find((post) => post.id === id)
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
                <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
            </TouchableOpacity>
            <View style={{ borderWidth: 2 }}>
                <Text style={styles.txt}>{post.title}</Text>
                <Text style={styles.txt}>{post.content}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    txt: { fontSize: 20, padding: 10 }
});

export default ShowScreen