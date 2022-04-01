import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import react from 'react';
import { MaterialIcons } from '@expo/vector-icons';
export default function ToDoItem({ item, pressHandler }) {
    return (

        <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
                <MaterialIcons name='delete' size={18} color='#333' />
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginTop: 20,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {

    }
})