import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker ,PROVIDER_GOOGLE} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'


const Map = () => {
  
  return (
      <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: -22.499500021190148, 
        longitude: -44.034567746130435,
        latitudeDelta: 0.0123,
        longitudeDelta: 0.0421
      }}
      />

  )
}

export default Map

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
      },
})