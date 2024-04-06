import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const navigation = useNavigation();
    const { posts, dispatch } = useContext(BlogContext)

    return (
        <View>
            <FlatList data={posts}
                keyExtractor={(post) => post.title}
                renderItem={({ item }) => {
                    return <View>
                        <TouchableOpacity style={styles.post} onPress={() => navigation.navigate("Show", { id: item.id })}>
                            <Text>{item.title}</Text>
                            <TouchableOpacity onPress={e => { dispatch({ type: 'delete', payload: item.id }) }}>
                                <AntDesign name="delete" size={24} color="black" />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>

                }}
            />
        </View >
    );
}

IndexScreen.screenOptions = () => {
    return <AntDesign name="delete" size={24} color="black" />
}

const styles = StyleSheet.create({
    post: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        borderWidth: 2,
        margin: 5
    }
});

export default IndexScreen