
import { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorButton from "../components/ColorButton";

const reducer = (state, action) => {

    switch (action.type) {
        case 'red':
            return (action.payload+state.r > 255 || state.r < 0) ?
                state : { ...state, r: state.r + action.payload }
        case 'blue':
            return (action.payload+state.b > 255 || state.b < 0) ? state : { ...state, b: state.b + action.payload }
        case 'green':
            return (action.payload+state.g > 255 || state.g < 0) ? state : { ...state, g: state.g + action.payload }
        default:
            return state;
    }
}
const ColorScreenReducer = () => {

    const [state, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });


    return (<View>
        <Text>Color Screen Changing Color with Reducers</Text>
        <ColorButton color="red"
            onIncrease={() => dispatch({ type: "red", payload: 15})}
            onDecrease={() => dispatch({ type: "red", payload: -1 * 15 })}
        />
        <ColorButton color="blue"
            onIncrease={() => dispatch({ type: "blue", payload: 15 })}
            onDecrease={() => dispatch({ type: "blue", payload: -1 * 15 })}
        />
        <ColorButton color="green"
            onIncrease={() => dispatch({ type: "green", payload: 15 })}
            onDecrease={() => dispatch({ type: "green", payload: -1 * 15 })}
        />

        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.r},${state.g},${state.b})` }}></View>

    </View>);
}
const styles = StyleSheet.create({

});

export default ColorScreenReducer;