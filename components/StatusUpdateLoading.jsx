import { View, Text } from 'react-native'
import React from 'react'

const StatusUpdateLoading = ({reff, status}) => {
  return (
    <View ref={reff} className={`bg-white ${status} p-8 h-full flex items-center justify-center gap-4 w-full absolute left-0 top-0 z-50 overflow-hidden`}>
        <View className={`bg-red-500 rounded-full w-16 h-16`}><Text>a</Text></View>
        <Text>Updating your request Status...</Text>
    </View>
  )
}

export default StatusUpdateLoading