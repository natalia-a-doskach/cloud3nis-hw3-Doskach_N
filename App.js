import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Context} from './Context';
import HomeScreen from './HomeScreen';
import CreateScreen from './CreateScreen';
import ChangeScreen from './ChangeScreen';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      currentNoteIndex: -1,
    };
  }

  addNote = note => {
    this.setState({notes: [...this.state.notes, note]});
  };

  changeNote = note => {
    let index = this.state.currentNoteIndex;
    this.setState({
      notes: [
        ...this.state.notes.slice(0, index),
        note,
        ...this.state.notes.slice(index + 1),
      ],
    });
  };

  changeIndex = index => {
    this.setState({currentNoteIndex: index});
  };

  render() {
    return (
      <Context.Provider
        value={{
          currentNoteIndex: this.state.currentNoteIndex,
          notes: this.state.notes,
          addNote: this.addNote,
          changeNote: this.changeNote,
          changeIndex: this.changeIndex,
        }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Create" component={CreateScreen} />
            <Stack.Screen name="Change" component={ChangeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
