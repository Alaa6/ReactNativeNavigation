import { Navigation } from 'react-native-navigation';
import HomeScreen from './home';
import    PushController  from '../pushController'

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button,
    View,
    Text,
    StatusBar,
  } from 'react-native';
 
  Navigation.registerComponent('Rnn.Home' ,() =>HomeScreen);



   const pushToHomeScreen = ()=> {

  // Navigation.dismissModal('LoginId');
    Navigation.dismissAllModals();
    Navigation.showModal({
      stack:{
        children:[{
           component:{
             name:'Rnn.Home'
           }
        }] ,
        options:{
          topBar:{
            title:{
              text:'Home'
            }
          }
        }
      }
    });

   /*Navigation.push('LoginId', {
        component: {
          name: 'Rnn.Home',
          
        }
      });*/


      /*Navigation.showOverlay({
        component: {
          name: 'Rnn.Home',
          options: {
            overlay: {
              interceptTouchOutside: true
            }
          }
        }
      });*/

    /*  Navigation.setRoot({
        root: {
          stack:{
            children :[{
              component:{
                name :'Rnn.Home'
              }
            }]
          }
          
        }
      });*/

   }
  
  
export default class LoginScreen extends Component {


    componentWillMount (){
       
        setTimeout(()=>{

            

        },3000)
    }
  render() {
    return (
      
      <View style ={styles.container}>
        <Text style ={styles.text}>Profile Screen</Text>

        <View style ={styles.button}>
        <Button  title='Home Screen' onPress={()=> pushToHomeScreen()}></Button>

        </View>
        <PushController/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container :{
        flex :1,
        justifyContent:'center'

    },
    text :{

     textAlign :'center',
     fontSize:25
   

    },
    button :{
        textAlign :'center',
        borderRadius:5,
        marginVertical:10,
        marginHorizontal:20



    },
});