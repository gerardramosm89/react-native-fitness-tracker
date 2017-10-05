import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  handlePress = () => {
    console.log('trying to alert')
    alert('Hello');
  }
  render() {
    return (
      <View>
        <AddEntry />
      </View>
    )
  }
}