import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, View } from 'react-native';
import styles from "../Styles";  

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const addTask = () => {
    if (task.trim() === '') {
      setError('Empty Task!!');
    } else {
      setTasks([...tasks, { name: task, done: false }]);
      setTask('');
      setError('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My ToDo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add" onPress={addTask} />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Text style={styles.taskCount}>{`${tasks.filter(task => task.done).length} done of ${tasks.length} tasks`}</Text>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <Text style={[styles.taskText, task.done && styles.taskTextCompleted]}>
            {task.name}
          </Text>
          <View style={styles.taskButtons}>
            <Button 
              title="Done" 
              onPress={() => toggleTask(index)} 
              color={task.done ? '#32CD32' : 'gray'} 
            />
            <Button 
              title="Delete" 
              onPress={() => deleteTask(index)} 
              color="red" 
            />
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
}
