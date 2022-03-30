import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import react, { useState } from 'react';
import Header from './components/header';
import ToDoItem from './components/todoitem';
import AddTodo from './components/addTodo';
export default function App() {

  const [todos, setTodos] = useState([
    { name: 'solve world hunger', id: '1' },
    { name: 'sip choccy milk', id: '2' },
    { name: 'cure cancer', id: '3' },
    { name: 'join karate classes', id: '4' }
  ])

  const pressHandler = (id) => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  const submitHandler = (text) => {
    if (text) {
      const newTodos = [{ name: text, id: Math.random().toString() }, ...todos]
      setTodos(newTodos)
    }
    else {
      Alert.alert('OOPS', "Can't have an empty to-do", [{ text: "Understood" }])
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View >
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  }
})
