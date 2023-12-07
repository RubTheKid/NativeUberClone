import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker ,PROVIDER_GOOGLE} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_APIKEY } from '@env';


const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  return (
      <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.0123,
        longitudeDelta: 0.0421
      }}
      >
        {origin && destination && (
          <MapViewDirections 
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor='black'
          />
        )}

        {origin?.location && (
            <Marker coordinate={{ 
            latitude: origin.location.lat,
            longitude: origin.location.lng,
        }}
            title="Partida"
            description={origin.description}
            identifier='origin'
            />
        )}
    </MapView>

  )
}

export default Map

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
      },
})