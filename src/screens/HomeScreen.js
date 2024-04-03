import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text style={styles.heading}>Welcome to the HomeScreen</Text>
            <Button onPress={e => navigation.navigate("List")} title="View Lists" />
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30
    }
})

export default HomeScreen;