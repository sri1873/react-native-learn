import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useState } from "react";

const ColorScreen1 = () => {
    const [colors, setColors] = useState([]);

    const generateRGB = () => {
        const r = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);

        return `rgb(${r}, ${g}, ${b})`
    }

    return (<View>
        <Text>Color Screen</Text>

        <Button title="Add Color" onPress={e => setColors([...colors, generateRGB()])} />

        <FlatList
            data={colors}
            keyExtractor={item => item}
            renderItem={({ item }) => {
                return <View style={{ height: 100, width: 100, backgroundColor: `${item}` }}></View>
            }}
        />
    </View>);
}

const styles = StyleSheet.create({

});

export default ColorScreen1;