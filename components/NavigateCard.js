import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { setDestination } from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
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