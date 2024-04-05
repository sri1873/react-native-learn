import { Image, StyleSheet, Text, View, } from "react-native";

const ImageDetail = ({ title, link }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.image} source={link} />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    },
    image: {
        height: 200,
        width: 'auto'
    }
})

export default ImageDetail;