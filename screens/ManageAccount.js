import { TouchableOpacity, View, TextInput, Text } from 'react-native';
import React from 'react';
import AppStyles from '../styles/AppStyles';
import { auth, db } from "../firebase";
import { collection, query, where, getDocs, writeBatch } from "firebase/firestore"; 
import { signOut, updatePassword, signInWithEmailAndPassword, deleteUser } from 'firebase/auth';

export default function ManageAccount({ navigation }) {
  
  let [newPassword, setNewPassword] = React.useState("");
  let [currentPassword, setCurrentPassword] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");
  let logout = () => {
    signOut(auth).then(() => {
      navigation.popToTop();
    });
  }

  let updateUserPassword = () => {
    signInWithEmailAndPassword(auth, auth.currentUser.email, currentPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        updatePassword(user, newPassword).then(() => {
          setNewPassword("");
          setErrorMessage("");
          setCurrentPassword("");
        }).catch((error) => {
          setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  let deleteUserAndToDos = () => {
    if (currentPassword === "") {
      setErrorMessage("Must enter current password to delete account");
    } else {
      signInWithEmailAndPassword(auth, auth.currentUser.email, currentPassword)
      .then((userCredential) => {
        const user = userCredential.user;

        // Get all todos for user and delete
        let batch = writeBatch(db);
        const q = query(collection(db, "todos"), where("userId", "==", user.uid));
        getDocs(q).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            batch.delete(doc.ref);
          });
          batch.commit();
  
          deleteUser(user).then(() => {
            navigation.popToTop();
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }
  };

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.header2}>ManageAccount</Text>
      <Text style={AppStyles.errorText}>{errorMessage}</Text>
      <View style={AppStyles.backgroundCover}>
      <TextInput 
          style={[AppStyles.textInput, AppStyles.darkTextInput]} 
          placeholder='Current Password'
          placeholderTextColor="#BEBEBE"
          value={currentPassword}
          secureTextEntry={true}
          onChangeText={setCurrentPassword} />
      <TextInput 
          style={[AppStyles.textInput, AppStyles.darkTextInput]} 
          placeholder='New Password'
          placeholderTextColor="#BEBEBE"
          value={newPassword}
          secureTextEntry={true}
          onChangeText={setNewPassword} />
          </View>
      <TouchableOpacity style={AppStyles.btupdate}  onPress={updateUserPassword} ><Text style={{fontWeight: 'bold', color: 'white', fontSize: 18 }}>Update Password</Text></TouchableOpacity>
      <TouchableOpacity style={AppStyles.btdel} onPress={deleteUserAndToDos} ><Text style={{fontWeight: 'bold', color: 'white', fontSize: 18 }}>Delete Account</Text></TouchableOpacity>
      <TouchableOpacity style={AppStyles.btlogout} onPress={logout} ><Text style={{fontWeight: 'bold', color: 'white', fontSize: 18 }}>Log out</Text ></TouchableOpacity>
      <TouchableOpacity style={AppStyles.btback} onPress={() => navigation.pop()} ><Text style={{ fontWeight: 'bold',color: 'white', fontSize: 18 }}>Back to ToDos</Text></TouchableOpacity>
    </View>
  );
}