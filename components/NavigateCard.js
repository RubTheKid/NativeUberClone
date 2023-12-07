import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useNavigation } from '@react-navigation/native'

import { setDestination } from '../slices/navSlice'

import { GOOGLE_MAPS_APIKEY } from '@env';

import tw from 'tailwind-react-native-classnames'
import NavFavourites from './NavFavourites'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl pt-0`}>Boa tarde!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete
            placeholder='Vamos para onde?'
            styles={inputStyles}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            fetchDetails={true}
            minLength={3}
            enablePoweredByContainer={false}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language:'pt-BR'
            }}
            onPress={(data, details = null) => {
                dispatch(setDestination({
                    location: details.geometry.location,
                    description: data.description
                }))

                navigation.navigate('RideOptionsCard')
            }}
            />
        </View>
        <NavFavourites />
      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`} >
        <TouchableOpacity onPress={() => navigation.navigate("RideOptionsCard")} style={tw`flex flex-row justify-between bg-black w-28 px-4 py-3 rounded-full`}>
            <Icon name='car' type='font-awesome' color='white' size={16} />
            <Text style={tw`text-white text-center`}>Viagens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row justify-between bg-white w-28 px-4 py-3 rounded-full`}>
            <Icon name='fast-food-outline' type='ionicon' color='black' size={16} />
            <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const inputStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius:0,
        fontSize: 18,
        marginLeft: 14,
        marginRight: 14
    },
    textinputContainer: {
        paddingHorizontal: 20, 
        paddingBottom: 0
    }

    
})