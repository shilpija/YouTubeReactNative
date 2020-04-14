import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import './App.css';
import Youtube from './components/youtube.js';

function App() {
  return (
    <View className="App">
     <Text>Hello World</Text> 
      <Youtube></Youtube>
    </View>
  );
}

export default App; 
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello Shilpi!!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });