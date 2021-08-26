import React from 'react'
import { Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import {
  RestauranteFoto,
  RestauranteInfo,
  RestauranteView
} from './styles'

const RestauranteItem = ({ foto, nome, key, nota, categoria, distancia, valorFrete, tempoEntrega }) => {
  return (
    <RestauranteView key={key}>
      <RestauranteFoto
        source={{
          uri: foto.trim(),
          resizeMode: 'cover'
        }}
      />
      <RestauranteInfo>
        <Text>{nome}</Text>
        <Text><AntDesign name="star" size={12} color="#F9A825" />{nota} - {categoria} - {distancia}</Text>
        <Text>{tempoEntrega} - R$ {valorFrete}</Text>
        <Text></Text>
      </RestauranteInfo>
    </RestauranteView>
  )
}

export default RestauranteItem