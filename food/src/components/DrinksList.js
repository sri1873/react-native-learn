import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

// const data = [
//     {
//         "idDrink": "17834",
//         "strDrink": "Abbey Cocktail",
//         "strDrinkAlternate": null,
//         "strTags": null,
//         "strVideo": null,
//         "strCategory": "Ordinary Drink",
//         "strIBA": null,
//         "strAlcoholic": "Alcoholic",
//         "strGlass": "Cocktail glass",
//         "strInstructions": "Shake all ingredients (except for the cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
//         "strInstructionsES": "Batir todos los ingredientes (excepto la cereza) con hielo y colarlos en una copa de cóctel. Adorne con la cereza y sirva.",
//         "strInstructionsDE": "Alle Zutaten (außer der Kirsche) mit Eis schütteln und in ein Cocktailglas abseihen. Mit der Kirsche verzieren und servieren.",
//         "strInstructionsFR": null,
//         "strInstructionsIT": "Shakerare tutti gli ingredienti (tranne la ciliegia) con ghiaccio e filtrare in una coppetta da cocktail. Completare con la ciliegia e servire.",
//         "strInstructionsZH-HANS": null,
//         "strInstructionsZH-HANT": null,
//         "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg",
//         "strIngredient1": "Gin",
//         "strIngredient2": "Orange bitters",
//         "strIngredient3": "Orange",
//         "strIngredient4": "Cherry",
//         "strIngredient5": null,
//         "strIngredient6": null,
//         "strIngredient7": null,
//         "strIngredient8": null,
//         "strIngredient9": null,
//         "strIngredient10": null,
//         "strIngredient11": null,
//         "strIngredient12": null,
//         "strIngredient13": null,
//         "strIngredient14": null,
//         "strIngredient15": null,
//         "strMeasure1": "1 1/2 oz ",
//         "strMeasure2": "1 dash ",
//         "strMeasure3": "Juice of 1/4 ",
//         "strMeasure4": "1 ",
//         "strMeasure5": null,
//         "strMeasure6": null,
//         "strMeasure7": null,
//         "strMeasure8": null,
//         "strMeasure9": null,
//         "strMeasure10": null,
//         "strMeasure11": null,
//         "strMeasure12": null,
//         "strMeasure13": null,
//         "strMeasure14": null,
//         "strMeasure15": null,
//         "strImageSource": null,
//         "strImageAttribution": null,
//         "strCreativeCommonsConfirmed": "Yes",
//         "dateModified": "2016-09-02 11:19:28"
//     },
//     {
//         "idDrink": "11019",
//         "strDrink": "Alfie Cocktail",
//         "strDrinkAlternate": null,
//         "strTags": "Alcoholic",
//         "strVideo": null,
//         "strCategory": "Ordinary Drink",
//         "strIBA": null,
//         "strAlcoholic": "Alcoholic",
//         "strGlass": "Cocktail glass",
//         "strInstructions": "Combine and shake all ingredients with ice, strain into a cocktail glass, and serve.",
//         "strInstructionsES": "Mezclar y agitar todos los ingredientes con hielo, colarlos en un vaso de cóctel y servir.",
//         "strInstructionsDE": "Alle Zutaten mit Eis mischen und schütteln, in ein Cocktailglas abseihen und servieren.",
//         "strInstructionsFR": null,
//         "strInstructionsIT": "Unire e scuotere tutti gli ingredienti con ghiaccio, filtrare in una coppetta da cocktail e servire.",
//         "strInstructionsZH-HANS": null,
//         "strInstructionsZH-HANT": null,
//         "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ypxsqy1483387829.jpg",
//         "strIngredient1": "Lemon vodka",
//         "strIngredient2": "Triple sec",
//         "strIngredient3": "Pineapple juice",
//         "strIngredient4": null,
//         "strIngredient5": null,
//         "strIngredient6": null,
//         "strIngredient7": null,
//         "strIngredient8": null,
//         "strIngredient9": null,
//         "strIngredient10": null,
//         "strIngredient11": null,
//         "strIngredient12": null,
//         "strIngredient13": null,
//         "strIngredient14": null,
//         "strIngredient15": null,
//         "strMeasure1": "1 1/2 oz ",
//         "strMeasure2": "1 dash ",
//         "strMeasure3": "1 tblsp ",
//         "strMeasure4": null,
//         "strMeasure5": null,
//         "strMeasure6": null,
//         "strMeasure7": null,
//         "strMeasure8": null,
//         "strMeasure9": null,
//         "strMeasure10": null,
//         "strMeasure11": null,
//         "strMeasure12": null,
//         "strMeasure13": null,
//         "strMeasure14": null,
//         "strMeasure15": null,
//         "strImageSource": null,
//         "strImageAttribution": null,
//         "strCreativeCommonsConfirmed": "No",
//         "dateModified": "2017-01-02 20:10:29"
//     },
//     {
//         "idDrink": "11255",
//         "strDrink": "Clove Cocktail",
//         "strDrinkAlternate": null,
//         "strTags": null,
//         "strVideo": null,
//         "strCategory": "Ordinary Drink",
//         "strIBA": null,
//         "strAlcoholic": "Alcoholic",
//         "strGlass": "Cocktail glass",
//         "strInstructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
//         "strInstructionsES": null,
//         "strInstructionsDE": "Alle Zutaten mit Eis verrühren, in ein Cocktailglas abseihen und servieren.",
//         "strInstructionsFR": null,
//         "strInstructionsIT": "Mescolare tutti gli ingredienti con ghiaccio, filtrare in una coppetta da cocktail e servire.",
//         "strInstructionsZH-HANS": null,
//         "strInstructionsZH-HANT": null,
//         "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qxvtst1461867579.jpg",
//         "strIngredient1": "Sweet Vermouth",
//         "strIngredient2": "Sloe gin",
//         "strIngredient3": "Wine",
//         "strIngredient4": null,
//         "strIngredient5": null,
//         "strIngredient6": null,
//         "strIngredient7": null,
//         "strIngredient8": null,
//         "strIngredient9": null,
//         "strIngredient10": null,
//         "strIngredient11": null,
//         "strIngredient12": null,
//         "strIngredient13": null,
//         "strIngredient14": null,
//         "strIngredient15": null,
//         "strMeasure1": "1 oz ",
//         "strMeasure2": "1/2 oz ",
//         "strMeasure3": "1/2 oz Muscatel ",
//         "strMeasure4": null,
//         "strMeasure5": null,
//         "strMeasure6": null,
//         "strMeasure7": null,
//         "strMeasure8": null,
//         "strMeasure9": null,
//         "strMeasure10": null,
//         "strMeasure11": null,
//         "strMeasure12": null,
//         "strMeasure13": null,
//         "strMeasure14": null,
//         "strMeasure15": null,
//         "strImageSource": null,
//         "strImageAttribution": null,
//         "strCreativeCommonsConfirmed": "No",
//         "dateModified": "2016-04-28 19:19:39"
//     },]

const DrinksList = ({title,data}) => {
    return (
        <View>
            <Text style={{ fontSize: 20 }}>{title }</Text>
            <FlatList showsHorizontalScrollIndicator={false} keyExtractor={item=>item.idDrink} horizontal style={styles.list} data={data} renderItem={({ item }) => {
            return (
                <View style={styles.listItem}>
                    <TouchableOpacity>
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
    image: { width: 200, height: 200, resizeMode: "contain" },
    listItem: {margin:10}
});

export default DrinksList;

