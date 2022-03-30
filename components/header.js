import { StyleSheet, Text, View } from 'react-native';
import react from 'react';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                My To-dos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})