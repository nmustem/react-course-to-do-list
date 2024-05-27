import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function TaskInput(props) {
    const [enteredTaskText, setEnteredTaskText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredTaskText(enteredText);
    };

    function addTaskHandler() {
        props.onAddTask(enteredTaskText);
        setEnteredTaskText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Your TODO list'
                onChangeText={goalInputHandler}
                value={enteredTaskText}
            />
            <Button title='Add a task' onPress={addTaskHandler} />
        </View>
    );
}

export default TaskInput;

const styles = StyleSheet.create({
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
});
