import { useNavigation } from '@react-navigation/native';
import { Button, Input, Text } from '@rneui/themed';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    const { state, signUp, localSignIn } = useContext(AuthContext)

    useEffect(() => { localSignIn();console.log(state.token+" hiihihihih") }, [state.token])



    return (
        <View style={styles.container}>
            <Spacer>
                <Text h1>SignUp Screen</Text>
            </Spacer>
            <Spacer>
                <Input label="Email" value={email} autoCapitalize='none' autoCorrect={false} onChangeText={txt => setEmail(txt)} />
            </Spacer>
            <Spacer>
                <Input label="Password" secureTextEntry value={password} autoCapitalize='none' autoCorrect={false} onChangeText={txt => setPassword(txt)} />
            </Spacer>
            <Spacer>
                <Text style={{ color: 'red' }}>{state.errMessage}</Text>
                <Button title="Sign Up" onPress={() => signUp({ email, password })} />
            </Spacer>

            <Spacer>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.link} h5>Already have an account?</Text>
                    <Text style={styles.link} h5>Click here to Sign-In</Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { margin: 20, flex: 1, marginBottom: 250, justifyContent: 'center' },
    link: { color: 'blue' }
})

export default SignUpScreen;