import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCounter(counter + 1)}
      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <Text>{counter}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCounter(counter - 1)}
      >
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 40,
    width: 40,
  },
  text: {
    color: 'white',
  },
});
export default App;
