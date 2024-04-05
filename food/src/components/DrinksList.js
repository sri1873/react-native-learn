import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const DrinksList = ({ title, data }) => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={{ fontSize: 20 }}>{title}</Text>
            <FlatList showsHorizontalScrollIndicator={false} keyExtractor={item => item.idDrink} horizontal style={styles.list} data={data} renderItem={({ item }) => {
                return (
                    <View style={styles.listItem}>
                        <TouchableOpacity onPress={() => navigation.navigate("Restaurent",{id:item.idDrink})}>
                            <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
                        </TouchableOpacity>
                        <Text>{item.strDrink}</Text>
                        <Text>{item.strAlcoholic}</Text>
                        <Text>Measure: {item.strGlass}</Text>
                    </View>
                );
            }}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {alignSelf:'center', width: 200, height: 200, resizeMode: "contain" },
    listItem: { margin: 10, }
});

export default DrinksList;

