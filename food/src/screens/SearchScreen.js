import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import DrinksList from "../components/DrinksList";

const SearchScreen = () => {

    const [search, setSearch] = useState([])
    const [searchResults, setSearchResults] = useState()
    const [marg, setMargs] = useState();
    const [cock, setCocks] = useState();
    const [vodka, setVodka] = useState();

    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka').then(res => setVodka(res.data.drinks))
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail').then(res => setCocks(res.data.drinks))
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then(res => setMargs(res.data.drinks))
    }, [])
    const searchSubmit = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`).then(res => setSearchResults(res.data.drinks))
    }

    return (
        <>
            <Text style={{ fontSize: 20 }}> Search Screen</Text>
            <View style={styles.search}>
                <Feather style={{ alignSelf: 'center' }} name="search" size={24} color="black" />
                <TextInput style={styles.input} placeholder="Search" onChangeText={txt => setSearch(txt)} onEndEditing={e => searchSubmit()} />
            </View>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                {searchResults ? <DrinksList title={`Search Results for ${search}`} data={searchResults} /> : <></>}
                {marg ? <DrinksList title="Margarita" data={marg} /> : <></>}
                {cock ? <DrinksList title="Cocktails" data={cock} /> : <></>}
                {vodka ? <DrinksList title="Vodka" data={vodka} /> : <></>}
            </ScrollView>
        </>
    );


}

const styles = StyleSheet.create({
    search: {
        borderColor: 'black',
        flexDirection: "row",
        height: 50,
        fontSize: 20,
        backgroundColor: '#d3d1d1',
        borderRadius: 5,
        margin: 20,
        display: "flex",
        padding: 5,
    },
    input: {
        marginLeft: 5,
        flex: 1
    }
});

export default SearchScreen;