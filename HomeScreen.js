import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Context } from './Context';

class HomeScreen extends React.Component {
  render() {

    return (
      <View style={styles.container}>
                      <Button
                        title="Add a Note"
                        onPress={() =>
                          this.props.navigation.navigate('Create')
                        }
                      />
                     {
                       this.context.notes.map((note, index) => (
                         <Button
                           key={ note.title }
                           title={ `${ note.title }` }
                           onPress={() =>
                            {this.context.changeIndex(index)
                            this.props.navigation.navigate('Change')}
                           }
                         />
                       ))
                     }
      <Text>You have { this.context.notes.length } notes!</Text>

      </View>
    );
  }
}

HomeScreen.contextType = Context;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
