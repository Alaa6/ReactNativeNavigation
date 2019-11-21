import { Navigation } from 'react-native-navigation';
import LoginScreen from './login';

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

 
  Navigation.registerComponent('Rnn.pp' ,() =>LoginScreen);

  burgerBtn =({btnId})=>{
    const {componentId} = this.props ;

    if(btnId === 'SideMenu')
    {
      Navigation.mergeOptions(componentId,{
        sideMenu:{
          left:{
            visible:true ,
          }
        }

      });

    }

  }
  const profileBtn=()=>{
   // Navigation.dismissModal('HomeId');
   Navigation.dismissAllModals();
     Navigation.showModal({
       stack:{
         children:[{
            component:{
              name:'Rnn.pp'
            }
         }] ,
         options:{
           topBar:{
             title:{
               text:'Profile'
             }
           }
         }
       }
     });
    /*Navigation.push( 'HomeId',{   //this.props.componentId
      component:{
        name:'Rnn.Login'
      }
    });*/
    /*Navigation.setRoot({
        root: {
          stack:{
            children :[{
              component:{
                name :'Rnn.Login'
              }
            }]
          }
          
        }
      });*/
  }
  
export default class HomeScreen extends Component {


  render() {



    return (
       
        
      <View style ={styles.container}>
        <Text style ={styles.text}>Home Screen</Text>

        <View style ={styles.button}>
        <Button  title='Profile Screen' onPress={()=>profileBtn()}></Button>

        </View>
       
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
