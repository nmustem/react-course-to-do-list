import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [courseTasks, setCourseTasks] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  };

  function addTaskHandler() {
    setCourseTasks((currentCourseTasks) => [...currentCourseTasks, enteredTaskText]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your TODO list' onChangeText={goalInputHandler} />
        <Button title='Add a task' onPress={addTaskHandler} />
      </View>
      <View style={styles.tasksContainer}>
        {courseTasks.map((goal) => (
          <View key={goal} style={styles.taskItem}>
            <Text style={styles.taskText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  tasksContainer: {
    flex: 5,
  },
  taskItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  taskText: {
    color: 'white'
  }
});
