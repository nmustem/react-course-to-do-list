import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseTasks, setCourseTasks] = useState([]);

  function startAddTaskHandler() {
    setModalIsVisible(true);
  };

  function endAddTaskHandler() {
    setModalIsVisible(false);
  };

  function addTaskHandler(enteredTaskText) {
    setCourseTasks((currentCourseTasks) => [
      ...currentCourseTasks,
      { text: enteredTaskText, id: Math.random().toString() }
    ]);
    endAddTaskHandler();
  };

  function deleteTaskHandler(id) {
    setCourseTasks((currentCourseTasks) => {
      return currentCourseTasks.filter((task) => task.id !== id)
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add a new task' color="#FBDEA2" onPress={startAddTaskHandler} />
        <TaskInput visible={modalIsVisible} onAddTask={addTaskHandler} onCancel={endAddTaskHandler} />
        <View style={styles.tasksContainer}>
          <FlatList
            data={courseTasks}
            renderItem={(itemData) => {
              return (
                <TaskItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDeleteItem={deleteTaskHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
  },
});
