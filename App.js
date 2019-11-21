

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './app/screens/home';

import LoginScreen from './app/screens/login';
import SideMenu from './app/screens/sideMenu' ;
import firebase, { RemoteMessage } from 'react-native-firebase';


import { Navigation } from 'react-native-navigation';



Navigation.registerComponent('Rnn.Login' ,() =>LoginScreen);
Navigation.registerComponent('Rnn.Home' ,() =>HomeScreen);
Navigation.registerComponent('Rnn.SideMenu' ,() =>SideMenu);

Navigation.events().registerAppLaunchedListener(()=>{

  Navigation.setRoot({

    root :{
      sideMenu :{
        left:{
          component:{
            name: 'Rnn.SideMenu'
          }

        },
        
       center :{
           bottomTabs:{
             children :[{
               stack :{
                 children:[{
                   component:{
                     id :'HomeId',
                     name :'Rnn.Home' ,

                   }
                   
                 }], // end children of stack of home
                 options:{
                   topBar :{
                     title :{
                       text :'Home'
                     } ,
                     
                     leftButtons : [{
                       id: 'SideMenu' ,
                       icon : require('./app/images/menu.png'),

                        
                     }], // end of left button
                   }, // end of tobBar
                   bottomTab:{
                     text:'Home' ,
                     icon :require('./app/images/home.png'),
                   } // end bottomTab of options

                 } // end options of stack of home
               }},  //end of stack of home 
              {
                stack:{
                  children :[{
                    component:{
                      id:'LoginId' ,
                      name :'Rnn.Login'
                    }
                  }] ,
                  options :{
                    bottomTab :{
                      text : 'PP',
                      icon : require('./app/images/pp.png'),
                      testID : 'Home_1'
            
                    }
        
              
                 }//Home stack

              }
            }
   
             ]  // end children of bottom tab of center
           } // end bottomTabs Of center 
         } //end center of side menu

      }//end sidemenu

    } //end root

  });//end setRoot
  
});// end registerAppLaunchedListener   



/*_________________________________________________________ */
  /*Navigation.setRoot({
    root: {
      bottomTabs:{
        children:[{
          stack:{
            children :[{
              component:{
                name :'Rnn.Login'
              }
            }] ,
            options :{
              bottomTab :{
                Text : 'PP',
                icon : require('./app/images/pp.png'),
                testID : 'PP_1'
      
              }
  
          }*/
         // }//Login stack
     

     /*   },{
          stack:{
            children :[{
              component:{
                name :'Rnn.Home'
              }
            }] ,
            options :{
              bottomTab :{
                Text : 'Home',
                icon : require('./app/images/home.png'),
                testID : 'Home_1'
      
              }
  
          } */
          // }//Home stack
     

       // }], //children Of bottomTabs
       
     // }//bottomTabs
   
      
  //  }//root
 // }); //setRoot
    /*_____________________________________________________________________ */