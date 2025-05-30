import { View,TouchableOpacity, Text, Modal, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import InlineTextButton from '../components/InlineTextButton';
import AppStyles from '../styles/AppStyles';
import { auth, db } from "../firebase";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore"; 
import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import AddToDoModal from '../components/AddToDoModal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {FAB} from 'react-native-paper';

export default function ToDo({ navigation }) {
  let [modalVisible, setModalVisible] = React.useState(false);
  let [isLoading, setIsLoading] = React.useState(true);
  let [isRefreshing, setIsRefreshing] = React.useState(false);
  let [toDos, setToDos] = React.useState([]);

  let loadToDoList = async () => {
    const q = query(collection(db, "todos"), where("userId", "==", auth.currentUser.uid));

    const querySnapshot = await getDocs(q);
    let toDos = [];
    querySnapshot.forEach((doc) => {
      let toDo = doc.data();
      toDo.id = doc.id;
      toDos.push(toDo);
    });

    setToDos(toDos);
    setIsLoading(false);
    setIsRefreshing(false);
  };

  if (isLoading) {
    loadToDoList();
  }

  let checkToDoItem = (item, isChecked) => {
    const toDoRef = doc(db, 'todos', item.id);
    setDoc(toDoRef, { completed: isChecked }, { merge: true });
  };

  let deleteToDo = async (toDoId) => {
    await deleteDoc(doc(db, "todos", toDoId));
    let updatedToDos = [...toDos].filter((item) => item.id != toDoId);
    setToDos(updatedToDos);
  };

  let renderToDoItem = ({item}) => {
    return (
      <View style={[AppStyles.rowContainer, AppStyles.rightMargin, AppStyles.leftMargin]}>
        <View style={AppStyles.fillSpace}>
          <BouncyCheckbox
            isChecked={item.complated}
            size={25}
            fillColor="#7B61FF"
            unfillColor="#FFFFFF"
            text={item.text}
            iconStyle={{ borderColor: "#258ea6" }}
            onPress={(isChecked) => { checkToDoItem(item, isChecked)}}
          />
        </View>
        <InlineTextButton text="Delete" color="red" onPress={() => deleteToDo(item.id)} />
      </View>
    );
  }

  let showToDoList = () => {
    return (
      <FlatList
        data={toDos}
        refreshing={isRefreshing}
        onRefresh={() => {
          loadToDoList();
          setIsRefreshing(true);
        }}
        renderItem={renderToDoItem}
        keyExtractor={item => item.id} />
    )
  };

  let showContent = () => {
    return (
      <View>
        {isLoading ? <ActivityIndicator size="large" /> : showToDoList() }
        <TouchableOpacity style={AppStyles.btaddtodo}
          onPress={() => setModalVisible(true)} >
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18 }}>Add ToDo</Text>
          </TouchableOpacity>
      </View>
    );
  };

  let showSendVerificationEmail = () => {
    return (
      <View>
        <Text style={{color: 'black', fontSize: 18,alignSelf: "center" }}>Please verify your email to use ToDo</Text>
        <TouchableOpacity style={AppStyles.btsendemail} onPress={() => sendEmailVerification(auth.currentUser)} >
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18 }}>Send Verification Email</Text>
        </TouchableOpacity>
      </View>
    );
  };

  let addToDo = async (todo) => {
    let toDoToSave = {
      text: todo,
      completed: false,
      userId: auth.currentUser.uid
    };
    const docRef = await addDoc(collection(db, "todos"), toDoToSave);

    toDoToSave.id = docRef.id;

    let updatedToDos = [...toDos];
    updatedToDos.push(toDoToSave);

    setToDos(updatedToDos);
  };
  
  return (
    <View backgroundColor= 'white'>
      <View style={[AppStyles.rowContainer, AppStyles.rightAligned, AppStyles.rightMargin, AppStyles.topMargin]}>
        <FAB style={AppStyles.fab} icon="account-circle" color="black" onPress={() => navigation.navigate("ManageAccount")}/>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <AddToDoModal 
          onClose={() => setModalVisible(false)}
          addToDo={addToDo} />
      </Modal>
      <Text style={AppStyles.header2}>ToDoList</Text>
      <View>
      {auth.currentUser.emailVerified ? showContent() : showSendVerificationEmail()}
      </View>
    </View>
  )
}