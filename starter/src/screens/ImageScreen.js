import { View, Text, StyleSheet,  } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>
            
            <ImageDetail title='Luffy' link={require('../../assets/luf.png')} />
            <ImageDetail title='Tanjiro' link={require('../../assets/tan.jpg')} />
            <ImageDetail title='Naruto' link={require('../../assets/nar.jpg')} />

        </View>
    );
}

const styles = StyleSheet.create({

})

export default ImageScreen;