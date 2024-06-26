import { View, StyleSheet } from 'react-native'


export default Spacer = ({ children }) => {
    return (
        <View style={styles.spacer}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    spacer: {
        margin: 20
    }
})