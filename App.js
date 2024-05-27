import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {
  const [courseTasks, setCourseTasks] = useState([]);

  function addTaskHandler(enteredTaskText) {
    setCourseTasks((currentCourseTasks) => [
      ...currentCourseTasks,
      { text: enteredTaskText, id: Math.random().toString() }
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <TaskInput onAddTask={addTaskHandler} />
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
  tasksContainer: {
    flex: 5,
  },
});
