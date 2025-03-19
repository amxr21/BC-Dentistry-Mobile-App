import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { icons } from '../constants'

const CustomExpandable = ({bgColor, textColor, icon, text, handlePress}) => {
  return (

    <TouchableOpacity onPress={handlePress} className={`flex flex-col justify-between grow h-28 rounded-xl p-4 bg-${bgColor}`}>
        <View>
            <Image source={icon} tintColor={'white'} resizeMode='contain' className='w-7 h-7' />
        </View>
        <View className=''>
            <Text className={`text-${textColor} text-md w-32`}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CustomExpandable