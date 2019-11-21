import { Navigation } from 'react-native-navigation';
import HomeScreen from './home';

import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button,
    View,
    Text,
    Dimensions,
    StatusBar,
  } from 'react-native';


  const ViewTypes = {
    FULL: 0,
    LEFT:1 ,
   
};

 
  
export default class AllStudentScreen extends Component {

   
   constructor(arge) {
       super(arge);

       let {width} =Dimensions.get("window");

       let dataProvider = new DataProvider((r1 ,r2 ) => {   // define the data for each element
           return r1 !==r2 ;
          });


       this._layoutProvider =new LayoutProvider(  //define the layout (height , width) of each element
        index => {
            if(index %2 === 0 )
                return ViewTypes.FULL;
            else 
               return ViewTypes.LEFT;
            
        },
    
        (type, dim) => {
            switch (type) {
                
               case ViewTypes.LEFT:

                    dim.width = width;
                    dim.height = 140;
                    break;

              case ViewTypes.FULL:

                    dim.width = width;
                    dim.height = 140;
                    break;

               
                default:
                    dim.width = 0;
                    dim.height = 0;
            }
        }
    );
    
       
         this._rowRenderer = this._rowRenderer.bind(this);  

     this.state ={
        dataProvider  : dataProvider.cloneWithRows(this._getData()),
        StateResult  :'' ,
        page:1,
    };
 
   }

   

   _generateArray(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = i;
    }
    return arr;
}

componentWillMount(){
    this._getData();
 }


  _getData () {
    var that = this;
    let email = new Array(20);
    let names = new Array(20); 
    let gender = new Array(20);

     
     var url = `https://randomuser.me/api/?page=1&results=20` ;
    console.log("-----------url:"+url);


        fetch(url ,{method :'Get'})
        .then(function(response){ 
            return response.json();})

        .then(function(result){

           that.setState({ StateResult : result.results ,refreshing :false ,loading:false})
            console.log(that.state.StateResult);

            for (let i = 0; i < 20; i++) {
                email[i] = result.results[i].email;  
                //names[i] = result.results[i].name.first;
                gender[i] =result.results[i].gender;  
            }
            
            
            
         })
         .catch(function(error){
             console.log("-------- error ------- "+ error);
             alert('result :'+ error);
         });

            return (gender ,email)  ;
        
      
      

   
  }

_rowRenderer (type  ,data) { // data  = data from data provider
     //You can return any view here, CellContainer has no special significance
     switch (type) {
       
        case ViewTypes.FULL:
            return (
                <View style={styles.container}>
                   <Text  style={styles.nameText}>  {data}  </Text>
                 
           
                </View>
            );

            case ViewTypes.FULL:
            return (
                <View style={styles.container}>
                   <Text  style={styles.nameText}>  {data}  </Text>
                 
           
                </View>
            );

           
        default:
            return null;
    }
     
    
}


  render() {
      console.log('this.state.dataProvider ',this.state.dataProvider);
      
    return (
    <RecyclerListView 
       layoutProvider={this._layoutProvider}
       dataProvider ={this.state.dataProvider}
       rowRenderer ={this._rowRenderer}/>
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
    nameText :
    {

       fontSize:30,
       marginLeft : 10,

   },
   emailText :
   {

       fontSize:20,
       marginLeft : 10,
   
    },
});