import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

import { CustomExpandable } from "./index"
import { icons } from '../constants'

import { useRouter, Link } from 'expo-router'



const Brief = ({name, id}) => {
    const route = useRouter()


  return (
    <View className='gap-y-7 rounded-lg'>
        <View className='header w-full flex flex-row gap-x-8'>
            <Image source={""} className='bg-gray-300 w-20 h-20 rounded-[1.5rem]' />
            <View className='flex gap-y-1 justify-center'>
                <Text className='text-4xl font-bold'>{name}</Text>
                <Text className='text-xl'>ID: {id}</Text>
            </View>
        </View>
        

        <View className='flex w-full overflow-hidden justify-between flex-row gap-4'>
            <CustomExpandable
                handlePress={() => {route.push('/proceedRequests')}}
                icon={icons.Approve}
                bgColor={'green-600'}
                textColor={'white'}
                text={'Approved Requests'}
            />
            <CustomExpandable
                icon={icons.Attachment}
                bgColor={'blue-950'}
                textColor={'white'}
                text={'test'}
            />

        </View>

    </View>
  )
}

export default Brief