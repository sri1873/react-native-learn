import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useState } from "react";

const ColorScreen2 = () => {
    const [r, setR] = useState();
    const [b, setB] = useState();
    const [g, setG] = useState();

    const generateRGB = () => {
        const r = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);

        return `rgb(${r}, ${g}, ${b})`
    }

    return (<View>
        <Text>Color Screen 2</Text>
        <Text>Red</Text>

        <Button title="Increase" onPress={e => setColors([...colors, generateRGB()])} />
        <Button title="Decrease" onPress={e => setColors([...colors, generateRGB()])} />

        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${r},${g},${b})` }}></View>
        
    </View>);
}

const styles = StyleSheet.create({

});

export default ColorScreen2;