import { View, Text, StyleSheet, FlatList } from "react-native";


const data = [
    { name: "SriKumar" },
    { name: "depp" },
    { name: "gibb" },
    { name: "12345678" },
    { name: "Kumar" },
    { name: "Sri" },
]
const ListScreen = () => {
    return (
        <View>
            <Text>List Screen</Text>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }}
                keyExtractor={data => data.name}
            />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default ListScreen;