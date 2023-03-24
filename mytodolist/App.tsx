import React from "react";
import {View, Text, SafeAreaView, Button} from "react-native";

const App = () => {

  //function sayHello(){
  //  console.log("Merhabalar!");
  //}

  const sayHello = (label) => {         // arrow function şeklinde de yazabiliriz
    console.log("Merhaba " + label)
  }

  return(
    <SafeAreaView>
    <View >
      <Text>Hello World</Text>
      <Text>Hello World 2</Text>
    </View>
    <Text>Hello World 3</Text>
    <Button 
    title="Here Press Me!"     //buton'da mutlaka olması gerekli

    //onPress={sayHello}       //onPress fonksiyon aldığı için sayHello fonksiyonunu buraya direk yazdık. yapısı bu şekilde onPress={() => {}} . **KESİNLİKLE onPress={sayHello()} şeklinde yazılmaz çünkü fonksiyonun
    // içeriğini bir kere yazar biz istemeden. butona bastıkça istediğimiz çıktıyı alamayız. fonksiyonu çağırmayıp yazdırıyor


    onPress={() => sayHello("Bahar")}      // fonksiyon parametre alıyor ise bu şekilde yaz. 

    disabled={false}  //komponentin kullanımına izin vermiyor disable={true} ise; ayrıca disable = disable={true}. Default değeri false'tur.

    color="#f194ff"
    />                      
    </SafeAreaView>
  );
}
export default App;      

