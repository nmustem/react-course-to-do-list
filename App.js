import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

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
        {/*<FlatList> --> is specifically built for scrollable lists. Internally it will only render de items that are visible
          and all the items that are off screen will only be loaded an rendered lazily as they are needed because the user is scrolling */}

        <FlatList
          data={courseTasks}
          renderItem={(itemData) => {
            return (
              <View style={styles.taskItem}>
                <Text style={styles.taskText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
        {/* El keyExtractor no és necessari si els objectes de la llista tenen una propietat anomenada key */}

        {/* <ScrollView> --> we do not want to use ScrollView for a list that can be really long, as it could lead us to 
            performance issues. ScrollView is perfect for an article for example, that we know the space it´s gonna take aprox
          
          <ScrollView>
            {courseTasks.map((goal) => (
              <View key={goal} style={styles.taskItem}>
                <Text style={styles.taskText}>{goal}</Text>
              </View>
          </ScrollView>
        */}
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
