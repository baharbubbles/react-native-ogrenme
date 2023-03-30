import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import Card from "./component/card";


const App = () => {

 
  return(
    <SafeAreaView style={style.container}>

      <Card 
       title="Franz Kafka" 
       text="İnsanlar hakkında çok az bilgin var Milena, bunu sürekli söylüyorum sana." />
      <Card 
       title="Stefan Zweig" 
       text="Bekledim, bekledim, seni kaderimi beklercesine bekledim." />
      <Card 
       title="Jack London"  
       text="Kitap okuyorsun ve yapayalnız buluyorsun kendini." />
                         
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: "#e0e0e0"
  },
});


export default App;      

