import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Todo: {
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  noPadding: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red"
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
  },
  fillSpace: {
    flex: 1
  },
  rightAligned: {
    justifyContent: "flex-end"
  },
  topMargin: {
    marginTop: 16
  },
  bottomMargin: {
    marginBottom: 16
  },
  rightMargin: {
    marginRight: 20
  },
  leftMargin: {
    marginLeft: 16
  },
  backgroundCover: {
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F7FB',
    padding: 20,
    borderRadius: 10
  },
  backgroundCover1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black'
  },
  lightText: {
    color: "black"
  },
  errorText: {
    color: "#ff0000"
  },
  header: {
    fontSize: 30,
    color: "#7B61FF",
    alignSelf: "center",
    fontWeight: 'bold',
    marginBottom: 30
  },
  header2:{
    fontSize: 30,
    color: "black",
    alignSelf: "center",
    fontWeight: 'bold',
    marginBottom: 30
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 8,
    borderBottomWidth: 2,
    marginVertical: 8
  },
  lightTextInput: {
    borderBottomColor: "black"
  },
  darkTextInput: {
    borderBottomColor: "#000000"
  },
  inlineTextButton: {
    color: "#7B61FF"
  },
  pressedInlineTextButton: {
    color: "#87F1FF",
    opacity: 0.6
  },
  fab: {
   backgroundColor:"white"
 },
 btcancel: {
  width: 90,
  height:40,
  backgroundColor: 'red',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center'
},
btadd: {
  width: 90,
  height:40,
  backgroundColor: 'green',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft:10
},
bttextadd:{
  alignSelf: 'stretch',
    padding: 8,
    marginVertical: 8,
    backgroundColor: '#F6F7FB',
    padding: 20,
    borderRadius: 10
},
btaddtodo:{
  width: 130,
  height:40,
  backgroundColor: '#7B61FF',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: "center",
  marginTop: 20
},
btsendemail:{
  width: 220,
  height:50,
  backgroundColor: '#7B61FF',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: "center",
  marginTop: 20
},
btupdate:{
  width: 170,
  height:40,
  backgroundColor: 'green',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: "center",
  marginTop: 20
},
btdel:{
  width: 170,
  height:40,
  backgroundColor: '#7F7F7F',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: "center",
  marginTop: 5
},
btlogout:{
  width: 170,
  height:40,
  backgroundColor: 'red',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: "center",
  marginTop: 5
},
btback:{
  width: 170,
  height:40,
  backgroundColor: '#7B61FF',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: "center",
  marginTop: 5
},
btlogin:{
    width: 110,
    marginVertical: 15,
    alignSelf: "center",
    alignItems: 'center',
    backgroundColor: '#7B61FF',
    padding: 10,
    borderRadius: 5
},
btsignup:{
  width: 110,
  marginVertical: 15,
  alignSelf: "center",
  alignItems: 'center',
  backgroundColor: '#7B61FF',
  padding: 10,
  borderRadius: 5
},
btreset:{
  width: 180,
  marginVertical: 15,
  alignSelf: "center",
  alignItems: 'center',
  backgroundColor: '#7B61FF',
  padding: 10,
  borderRadius: 5
}
});