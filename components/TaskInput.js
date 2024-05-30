import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/task.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your TODO list'
                    onChangeText={goalInputHandler}
                    value={enteredTaskText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#FB9DA7' />
                        {/* the Button component does not have the style prop. This is why it is wrapped in a View component */}
                    </View>
                    <View style={styles.button}>
                        <Button title='Add task' onPress={addTaskHandler} color='#FBDEA2' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default TaskInput;

const styles = StyleSheet.create({
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#78A580'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#FAF4E7',
        backgroundColor: '#FAF4E7',
        color: '#444341',
        borderRadius: 6,
        width: '100%',
        padding: 10,
    },
});
