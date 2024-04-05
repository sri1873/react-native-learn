import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import axios from "axios";


const RestaurentScreen = ({ route }) => {
    const [recipe, setRecipe] = useState()
    const id = route.params.id
    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => {
            setRecipe(res.data.drinks[0])
            console.log(res.data.drinks[0])
        })
    }, [])
    return (
        <>
            {
                recipe ?
                    <View style={{padding:20}}>
                        <Text style={{ alignSelf: 'center', fontSize: 30, marginBottom: 10 }}>{recipe.strDrink}</Text>
                        <Image source={{ uri: recipe.strDrinkThumb }} style={styles.image} />
                        <Text style={{ fontSize: 20,marginVertical:10 }}>Serving: {recipe.strGlass}</Text>
                        <Text style={{ fontSize: 20, textAlign: 'justify' }}>Instructions: {recipe.strInstructions}</Text>
                    </View>
                    : <></>}
        </>
    );


}

const styles = StyleSheet.create({
    image: { width: 400, height: 400, resizeMode: "contain", alignSelf: 'center' }
});

export default RestaurentScreen;