import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { Pressable } from 'react-native'

const BookmarkButton = ({icon, color, onPress}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed?{opacity:0.2}:null}>
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default BookmarkButton