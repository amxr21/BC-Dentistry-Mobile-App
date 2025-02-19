import { View, Text } from 'react-native'
import React from 'react'

import { CustomButton } from './index'

const AccesptReject = ({func}) => {
  return (
    <View className="flex flex-row gap-x-4">
            <CustomButton
                key={2}
                classes={"grow"}
                containerClasses={"border border-red-500 p-2 rounded-xl bg-red-500"}
                text={'Reject'}
                textClasses={"text-center text-white font-semibold text-lg"}
                handleClick={func}
            />

            <CustomButton
                key={4}
                classes={"grow"}
                containerClasses={"border border-green-500 p-2 rounded-xl bg-green-500"}
                text={'Accept'}
                textClasses={"text-center text-white font-semibold text-lg"}
                handleClick={func}
            />

        </View>

  )
}

export default AccesptReject