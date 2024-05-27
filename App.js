import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import TaskItem from './components/TaskItem';

export default function App() {
  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [courseTasks, setCourseTasks] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  };

  function addTaskHandler() {
    setCourseTasks((currentCourseTasks) => [
      ...currentCourseTasks,
      {text: enteredTaskText, id: Math.random().toString()}
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your TODO list' onChangeText={goalInputHandler} />
        <Button title='Add a task' onPress={addTaskHandler} />
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
          data={courseTasks}
          renderItem={(itemData) => {
            return <TaskItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
});
