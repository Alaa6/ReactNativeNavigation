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

   
};

const courses =[{
   
        course1 : 'OS' ,
        course2 : 'data mining ',
        course3 : 'e-commerce ' ,
        course4 : 'Big data  ',
        course5 : 'Network Security',

  

}]


 
  
export default class AllCoursesScreen extends Component {

    
   
   constructor(arge) {
       super(arge);

       let {width} =Dimensions.get("window");

       let dataProvider = new DataProvider((r1 ,r2 ) => {   // define the data for each element
           return r1 !==r2 ;
          });


       this._layoutProvider =new LayoutProvider(  //define the layout (height , width) of each element
        index => {
            if(index )
                return ViewTypes.FULL;
            
        },
    
        (type, dim) => {
            switch (type) {
                case ViewTypes.FULL:

                    dim.width = width;
                    dim.height = 160;
                    break;
               
                default:
                    dim.width = 0;
                    dim.height = 0;
            }
        }
    );
    
       
         this._rowRenderer = this._rowRenderer.bind(this);  

     this.state ={
        dataProvider  : dataProvider.cloneWithRows(this._courses()),
       //dataProvider  : dataProvider.,
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

_courses() {
    let arr = new Array(5);
    for (let i = 0; i < 5; i++) {
        arr[i] = courses[i];
    }
    return arr;
}

componentWillMount(){
    this._getData();
 }


  _getData () {
    var that = this;
    let arr = new Array(20);
   
     
     var url = `https://randomuser.me/api/?page=1&results=20` ;
    console.log("-----------url:"+url);


        fetch(url ,{method :'Get'})
        .then(function(response){ 
            return response.json();})

        .then(function(result){

           that.setState({ StateResult : result.results ,refreshing :false ,loading:false})
            console.log(that.state.StateResult);

            for (let i = 0; i < 20; i++) {
                arr[i] = result.results[i].name.first;  // msh byl72 ysm3
            }
            
            
            
         })
         .catch(function(error){
             console.log("-------- error ------- "+ error);
             alert('result :'+ error);
         });
         return arr;

         
        
      
      

   
  }

_rowRenderer (type  ,data   ) {
     //You can return any view here, CellContainer has no special significance
     switch (type) {
       
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