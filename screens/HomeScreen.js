import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";

import tw from 'tailwind-react-native-classnames';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination, setOrigin } from "../slices/navSlice";

import NavFavourites from "../components/NavFavourites";


const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image 
            style={{
                width: 100, height:100, resizeMode:'contain'
            }}
            source={{
                uri: "https://links.papareact.com/gzs"
            }} />
            <GooglePlacesAutocomplete 
            placeholder="Digite o local do início da viagem"
            styles={{ container:{
                flex: 0,
            },
            textInput:{
                fontSize: 18,
            },
            }}
            onPress={(data, details = null) =>{
                dispatch(setOrigin({location: details.geometry.location, description:data.description}))
                dispatch(setDestination(null))
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            enablePoweredByContainer={false}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'pt-BR'
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            />

            <NavOptions />
            <NavFavourites />
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
  
