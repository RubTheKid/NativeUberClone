import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
    // <View style={styles.container}>
    //     <Text>our app!</Text>
    //     <StatusBar style="auto" />
    // </View>
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image 
            style={{
                width: 100, height:100, resizeMode:'contain'
            }}
            source={{
                uri: "https://links.papareact.com/gzs"
            }} />
        </View>
    </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        color:'blue',
        alignItems:'center',
        justifyContent: 'center'
    }
  });
  