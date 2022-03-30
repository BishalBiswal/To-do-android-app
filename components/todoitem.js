import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import react from 'react';

export default function ToDoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginTop: 20,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderRadius: 10,
        borderWidth: 1
    }
})