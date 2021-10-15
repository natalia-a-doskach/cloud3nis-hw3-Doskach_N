import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, Image,BackHandler } from 'react-native';
import { Context } from './Context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

class ChangeScreen extends React.Component {
      state;
      constructor(props, context) {
        super(props, context)
        this.launchImageLibrary = this.launchImageLibrary.bind(this);
        this.state = {
            title: this.context.notes[this.context.currentNoteIndex].title,
            note: this.context.notes[this.context.currentNoteIndex].note,
           fileUris: context.notes[this.context.currentNoteIndex].images
          }
      }
  launchImageLibrary(){
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      launchImageLibrary(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
          console.log('response', JSON.stringify(response));
          this.setState({
            fileUris: [...this.state.fileUris, response.assets[0].uri]
          });
        }
      });
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
        <TextInput
        defaultValue={this.context.notes[this.context.currentNoteIndex].title}
        onChangeText={value => this.setState({ title: value })}
        placeholder= "title"
        />
        <TextInput
        defaultValue={this.context.notes[this.context.currentNoteIndex].note}
        onChangeText={value => this.setState({ note: value })}
        placeholder="note"
        />
                <Button
                  title="Back to home"
                  onPress={() =>
                 {let note = {
                    "title": this.state.title,
                    "note": this.state.note,
                    "images": this.state.fileUris
                  }
                  this.context.changeNote(note)
                  this.props.navigation.navigate('Home')}
                  }
                />
                                <Button
                                  title="Add More Pictures"
                                  onPress={this.launchImageLibrary}
                                />
                                               {
                                                  this.state.fileUris.map((uri, index) => (
                                                  <Image
                                                        id={index}
                                                        style={{width: 100, height: 100}}
                                                        source={{uri: uri
                                                      }}/>
                                                  ))
                                                }

      </View>
    );
  }
}

ChangeScreen.contextType = Context;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChangeScreen;
