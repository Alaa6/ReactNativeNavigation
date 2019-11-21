
import { Navigation } from 'react-native-navigation';


import ProfileScreen from './profile';
import AllCoursesScreen from './AllCourses';
import RecycleTestComponent from './Recycler' ;
import AllStudentScreen from './AllStudent'


import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text,
    Image ,
  } from 'react-native';
 
  Navigation.registerComponent('Rnn.profile' ,() => ProfileScreen);
  Navigation.registerComponent('Rnn.AllCourses' ,()=>AllCoursesScreen);
  Navigation.registerComponent('Rnn.AllStudentScreen' ,()=>AllStudentScreen);

   const pushToAllCoursesScreen =()=>{

    Navigation.dismissAllModals();
    Navigation.showModal({
      stack :{
        children:[{
          component:{
            name: 'Rnn.AllCourses'
          }
        }] ,
        options:{
          topBar:{
            title:{
              text :'All Courses'
            }
            
          }
        }
      }
    });

   }

   



   const pushToProfileScreen = ()=> {

    Navigation.dismissAllModals();
    Navigation.showModal({
      stack:{
        children:[{
           component:{
             name:'Rnn.profile'
           }
        }] ,
        options:{
          topBar:{
            title:{
              text:'UserName'
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
   pushToAllStudentScreen =()=>{ 

    Navigation.dismissAllModals();
    Navigation.showModal({
      stack:{
        children:[{
           component:{
             name:'Rnn.AllStudentScreen'
           }
        }] ,
        options:{
          topBar:{
            title:{
              text:'All Students'
            }
          }
        }
      }
    });


   }
  
  
export default class SideMenu extends Component {

  render() {
    return (
       
      <View style ={styles.container}>
        <View style ={styles.imagesView}>
            <Image 
            style={styles.images}
            source={require('../images/profile.png')}
            />
            
        </View>
        <View style ={styles.txtView}>
           
           <Text style ={styles.text} onPress ={()=> pushToProfileScreen()}>Profile</Text>
           <Text style ={styles.text} onPress ={()=> pushToAllStudentScreen()}>All Students</Text>
           <Text style ={styles.text} onPress ={()=> pushToAllCoursesScreen()}>All Courses</Text>
           <Text style ={styles.text}>Add Course</Text>
           <Text style ={styles.text}>Ask Doctor</Text>
           <Text style ={styles.text}>logout</Text>
         </View>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container :{
        flex :1,
       
        backgroundColor :'white' ,
        

    },
    imagesView :{
       
        height:220 ,
        backgroundColor: 'gray' ,
      

       

    } ,
    images :{
         width :100,
         height:100 ,
         marginHorizontal :100 ,
         marginVertical :100 ,
         borderRadius :100


    } ,
    txtView :{
        marginTop: 50,

    } ,
    text :{
        
     marginLeft :25 ,
     marginRight:25 ,
     marginTop: 10,
     fontSize:25 ,
    


    },
    button :{
        textAlign :'center',
        borderRadius:5,
        marginVertical:10,
        marginHorizontal:20



    },
});