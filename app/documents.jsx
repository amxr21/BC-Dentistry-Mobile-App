import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useEffect, useState } from 'react';
import React from 'react'
import axios from 'axios';
import { NoRequests, Document } from '../components';



const API_BASE_URL = 'http://openuae.fortiddns.com:28081'; 



const documents = () => {
    const [ documents, setDocuments ] = useState([])
    const [ loading, setIsLoading ] = useState(false)

    

    useEffect(() => {
        const fetchDoucments = async () => {
            try{
                setIsLoading(true)
                const response = axios.get(`${API_BASE_URL}/getAllRequestsForPatient/Patient1`)

                const uploadedDocuments = await response.data?.filter((data) => {data.documents})
                uploadedDocuments == undefined ? setDocuments([]) : setDocuments(uploadedDocuments)
                console.log(documents);
                
            }catch(error){
                console.error("API error", error.message)
            }

            finally{
                setIsLoading(false)
            }
        }

        fetchDoucments()

    }, [])

  return (
    <SafeAreaView>
        <View className='flex flex-col gap-4 p-6'>
        {
            documents.length == 0 && <NoRequests text={"You havn't uploaded any documents "} />
        }
        {
            documents.length > 0 &&
            <Document
                key={1}
                title='Document Title'
                type={'PDF'}
                size={'1 MB'}
                content={''}
            />
        }

        </View>
    </SafeAreaView>
  )
}

export default documents