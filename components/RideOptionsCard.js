import { useNavigation } from '@react-navigation/native'
import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import { Icon, Image } from 'react-native-elements'

import tw from 'tailwind-react-native-classnames'
import NavigateCard from './NavigateCard'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data = [
    {
        id: '666',
        title: 'UberX',
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: '777',
        title: 'Uber XL',
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: '888',
        title: 'Uber Black',
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    }
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {

    const navigation = useNavigation();
    const [selected, setSelected] = useState();
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

    return (

      <SafeAreaView style={tw`bg-white flex-grow pt-3`}>
        <View>
            <TouchableOpacity
            onPress={() => navigation.navigate("NavigateCard")}
            style={tw`absolute top-3 left-5 p-3 rounded-full`}
            >
                <Icon name='chevron-left' type='fontawesome' />
            </TouchableOpacity>
            <Text style={tw`text-center py-5 text-xl`}> Selecione uma categoria - {travelTimeInformation?.distance.text} </Text>
        </View>
        <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item: {id, title, multiplier, image}, item}) => (
            <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && "bg-gray-200"}`}
            >
                <Image 
                style={{width: 100, height:100, resizeMode:'contain'}}
                source={{ uri: image}}
                />
                <View style={tw`-ml-6`}>
                    <Text style={tw`text-xl font-semibold`}>{title}</Text>
                    <Text>Duração: {travelTimeInformation?.duration.text}</Text>
                </View>
                <Text style={tw`text-xl`}>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(
                        (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                    )}

                </Text>
            </TouchableOpacity>
        )}
        />
        <View>
            <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
                <Text style={tw`text-center text-white text-xl`}>Pedir {selected?.title}</Text>
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    )
}

export default RideOptionsCard
