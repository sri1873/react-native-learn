import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const InputScreen = () => {
    const [inp,setInp]=useState('')
    return (
        <View>
            <Text>Text Screen</Text>

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={inp}
                onChangeText={e=>setInp(e)}
                />

            <Text>{inp}</Text>
            
        </View>
    );

}
const styles = StyleSheet.create({
    input: {
        borderColor: "black",
        borderWidth: 1.5,
        margin: 15,
    }
});
export default InputScreen;