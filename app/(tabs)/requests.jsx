import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { RequestsHeader, DataRequest } from '../../components'

import { dataRequests } from '../../data' 

const requests = () => {
  
  return (
    <SafeAreaView>
      <StatusBar style='dark' />

      <RequestsHeader requests={dataRequests} />



      <ScrollView className='px-8 flex flex-col gap-y-8 h-[60vh]'>

        <View className="flex flex-col gap-6 py-10">
          {
            dataRequests.map((request) => {
              return (
                <DataRequest
                  key={request.id}
                  type = {request.type}
                  from = {request.from}
                  to = {request.to}
                  status = {request.status}
                  id = {request.id}
                  about = {request.about}
                  date = {request.date}
                  time = {request.time}
                />

              )
            })
          }

        </View>




      </ScrollView>
    </SafeAreaView>
  )
}

export default requests