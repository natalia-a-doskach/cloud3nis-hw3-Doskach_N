import React from 'react';
import { StyleSheet, Text, View,Button, SafeAreaView, Pressable, ScrollView, Dimensions } from 'react-native';
import { Context } from './Context';

class HomeScreen extends React.Component {
  render() {

    return (
      <SafeAreaView style={styles.container}>
                      <Pressable
                        title="Add a Note"
                        style={styles.button}
                        onPress={() =>
                          this.props.navigation.navigate('Create')
                        }
                      ><Text style={styles.text}>Add A Note</Text></Pressable>
                      <View style={styles.scroll}>
                      <ScrollView snapToInterval={Dimensions.get('screen').width} contentContainerStyle={{minHeight: '100%'}}>
                     {
                       this.context.notes.map((note, index) => (
                         <Pressable
                           style={styles.buttons}
                           key={ index }
                           title={ `${ note.title }` }
                           onPress={() =>
                            {this.context.changeIndex(index)
                            this.props.navigation.navigate('Change')}
                           }
                         ><Text style={styles.text}>{note.title}</Text></Pressable>
                       ))
                     }
                     </ScrollView>
                     </View>

      </SafeAreaView>
    );
  }
}

HomeScreen.contextType = Context;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: "5%"
  },
    scroll: {
      flex: 1,
      width: "100%",
    },
  button: {
    alignItems: 'center',
    width: "100%",
    justifyContent: 'center',
    margin: 15,
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#108afc',
    textColor: 'white'
  },
    buttons: {
      alignItems: 'center',
      width: "100%",
      justifyContent: 'center',
      paddingVertical: 15,
      marginVertical:3,
      borderRadius: 10,
      backgroundColor: '#BCDCF9',
      textColor: 'black'
    },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default HomeScreen;
