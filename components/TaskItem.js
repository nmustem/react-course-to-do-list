import { Pressable, StyleSheet, Text, View } from "react-native";

function TaskItem(props) {
    return (
        <View style={styles.taskItem}>
            <Pressable
                android_ripple={{ color: '#87ACFD'}}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.taskText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default TaskItem;

const styles = StyleSheet.create({
    pressedItem: {
        opacity: 0.5
    },
    taskItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#1B4CB7',
    },
    taskText: {
        color: 'white',
        padding: 8,
    }
});