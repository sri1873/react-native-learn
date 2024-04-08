import { useNavigation } from '@react-navigation/native';
import { Button, Input, Text } from '@rneui/themed';
import { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignInScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { state, signIn } = useContext(AuthContext)

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h1>SignIn Screen</Text>
            </Spacer>
            <Spacer>
                <Input label="Email" value={email} autoCapitalize='none' autoCorrect={false} onChangeText={txt => setEmail(txt)} />
            </Spacer>
            <Spacer>
                <Input label="Password" value={password} autoCapitalize='none' autoCorrect={false} secureTextEntry onChangeText={txt => setPassword(txt)} />
            </Spacer>
            <Spacer>
                <Text style={{ color: 'red' }}>{state.errMessage}</Text>
                <Button title="Sign In" onPress={() => { signIn({ email, password });}} />
            </Spacer>
            <Spacer>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.link} h5>Don't have an account yet?</Text>
                    <Text style={styles.link} h5>Click here to Sign-Up</Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { margin: 20, flex: 1, marginBottom: 250, justifyContent: 'center' },
    link: { color: 'blue' }
})

export default SignInScreen;