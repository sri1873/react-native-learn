
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useState } from "react";
import ColorButton from "../components/ColorButton";

const ColorScreen2 = () => {
    const [r, setR] = useState(0);
    const [b, setB] = useState(0);
    const [g, setG] = useState(0);

    const handleIncrease = (color) => {
        switch (color) {
            case 'red':
                r < 256 ? setR(r + 10) : null
                break;
            case 'blue':
                b < 256 ? setB(b + 10) : null
                break;
            case 'green':
                g < 256 ? setG(g + 10) : null
                break;
            default:
                break;
        }
    }
    const handleDecrease = (color) => {
        switch (color) {
            case 'red':
                r > 0 ? setR(r - 10) : null
                break;
            case 'blue':
                b > 0 ? setB(b - 10) : null
                break;
            case 'green':
                g > 0 ? setG(g - 10) : null
                break;
            default:
                break;
        }
    }


    return (<View>
        <Text>Color Screen 2</Text>
        <ColorButton color="red" onIncrease={()=>handleIncrease('red')} onDecrease={()=>handleDecrease('red')} />
        <ColorButton color="blue" onIncrease={()=>handleIncrease('blue')} onDecrease={()=>handleDecrease('blue')} />
        <ColorButton color="green" onIncrease={()=>handleIncrease('green')} onDecrease={()=>handleDecrease("green")} />

        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${r},${g},${b})` }}></View>

    </View>);
}
const styles = StyleSheet.create({

});

export default ColorScreen2;