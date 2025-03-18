import { View, Text } from 'react-native'
import React from 'react'

const StatusUpdateLoading = ({reff, status}) => {
  return (
    <View ref={reff} className={`bg-white ${status} ${status != "min-h-0 h-0" ? 'p-8' : "p-0"} flex items-center justify-center gap-4 w-full absolute left-0 top-0 z-50 overflow-hidden`}>
        <View className={`bg-red-500 rounded-full ${status != "min-h-0 h-0" ? 'w-16 h-16' : "h-0 w-0"}`}></View>
        <Text>Updating your request Status...</Text>
    </View>
  )
}

export default StatusUpdateLoading