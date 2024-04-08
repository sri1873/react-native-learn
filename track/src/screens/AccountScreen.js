import { Button } from '@rneui/themed';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {

    const { signOut } = useContext(AuthContext)

    return (
        <View>
            <Spacer/>
            <Spacer>
                <Text style={{ fontSize: 48 }}>Account Screen</Text>
            </Spacer>
            <Spacer>
                <Button title="Sign Out" onPress={() => signOut()} />
            </Spacer>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default AccountScreen;