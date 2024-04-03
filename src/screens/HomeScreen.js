import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text style={styles.heading}>Welcome to the HomeScreen</Text>
            <Button style={styles.button} onPress={e => navigation.navigate("List")} title="View Lists" />
            <Button style={styles.button} onPress={e => navigation.navigate("Image")} title="View Images" />
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30
    },
    button: {
        marginTop: 15,
        borderRadius:10
    }
})

export default HomeScreen;