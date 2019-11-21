import React, {Component} from "react";
import PushNotification from "react-native-push-notification";



export default class PushController extends Component{
    

componentDidMount (){
    PushNotification.configure({
         /*____________onRegister_____________otional____________ */

        onRegister :function(token){  // called when token us generate .
            console.log("TOKEN:", token);

        },
        /*_____________onNotification________required______________ */
        onNotification :function(notification){  //when a remote or local notification is opened or received .
            
            console.log("NOTIFICATION:", notification);
            
        } ,
         /*_____________senderID________required in android_________ */
         senderID :"640955199225" ,

         popInitialNotification:true ,
         requestPermissions:true ,

    })
};

render(){
    return null;
};

}