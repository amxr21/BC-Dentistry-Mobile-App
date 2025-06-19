import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { DataRequest, NoRequests } from '../components'
import axios from 'axios';

const API_BASE_URL = 'http://openuae.fortiddns.com:28081'; 


const proceedRequests = () => {

  const [reqests, setRequests] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    axios.get(`${API_BASE_URL}/getAllRequestsForPatient/Patient1`)
    .then((response)=> {
      setIsLoading(true)
      setRequests(response.data)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [])





  return (
    <SafeAreaView>
        <View className='flex flex-col gap-4 p-6'>
          <View>
            {/* <Text className='text-2xl font-semibold'>Processed Requests</Text> */}
            {
              reqests == 0 && !isLoading &&
              <>
                <NoRequests text={'No Approved Requests'}/>
                <Text className='text-md font-light text-gray-400 mt-5'>Here you can find all the requests for which you have agreed to share your information.</Text>
              </>
              }
          </View>

          <ScrollView className='pb-4 h-[82vh]'>
            <View className="flex flex-col gap-y-4">
              {
                isLoading && reqests == 0 && <View><Text>It is loading</Text></View>
              }

              {
                !isLoading && reqests != 0 && reqests.filter((request)=>request.status == 'CONSENT_GRANTED').map((request) => {
                  return (
                    <DataRequest
                        key={request.requestID}  // Use API ID
                        type={request.type || "on-chain"}  
                        from={request.doctorID}
                        to={request.patientID}
                        status={request.status}
                        id={request.requestID}
                        about={request.about || "N/A"}
                        date={request.date || "N/A"}
                        time={request.time || "N/A"}
                        optionsVisible={false}
                    />
                  )
                })
              }
            </View>
               
          </ScrollView>
        </View>


    </SafeAreaView>
  )
}

export default proceedRequests