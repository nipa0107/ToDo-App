import { View, Text, TextInput ,TouchableOpacity } from 'react-native';
import React from 'react';
import AppStyles from '../styles/AppStyles';

export default function AddToDoModal(props) {
  let [todo, setTodo] = React.useState("");
  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.header2}>Add ToDo</Text>
      <TextInput 
          style={[AppStyles.bttextadd]} 
          placeholder='ToDo'
          placeholderTextColor="#BEBEBE"
          value={todo}
          onChangeText={setTodo} />
      <View style={[AppStyles.rowContainer]}>
        <TouchableOpacity style={AppStyles.btcancel}  onPress={props.onClose} >
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Cancel</Text></TouchableOpacity>
        <TouchableOpacity style={AppStyles.btadd} onPress={() => {
          props.addToDo(todo);
          setTodo("");
          props.onClose();
        }} >
          <Text style={{ color: 'white', fontSize: 18 }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}