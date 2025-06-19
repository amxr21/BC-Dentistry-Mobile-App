import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'

import { CustomButton, DataRequestElement, AccesptReject, StatusUpdateLoading } from './index'




const DataRequest = ({type, from, to, status, id, about, date, time, optionsVisible = true, clinicName, dataType}) => {

    const requestCard = useRef()

    const [ isExpanded, setIsExpanded ] = useState(false);


    const [ requestLoading, setRequestLoading ] = useState(false)

    // const [ isAccepted, setIsAccepted ] = useState(false)



    const animatedHeight = useRef(new Animated.Value(0)).current



    const [currentStatus, setCurrentStatus] = useState(status); // Store current request status



    const requestCardButton = useRef()
    
    const expandCard = (e) => {

        console.log(currentStatus.toLowerCase());
        

        if(isExpanded){
            Animated.timing(animatedHeight, {
                toValue:0,
                duration: 300,
                useNativeDriver: false,
            }).start(setIsExpanded((p) => !p))
        }
        else{
            setIsExpanded(true)
            Animated.timing(animatedHeight, {
                toValue: 200,
                duration: 300,
                useNativeDriver: false,
            }).start()
            
        }
    }
 
    

  return (
    <View className="bg-white relative rounded-xl overflow-hidden">

        {
            requestLoading && <StatusUpdateLoading
                reff = {requestCard}
                status = {status}
                requestLoadingStatus={requestLoading}
                setrequestLoadingFunc={setRequestLoading}
            />
        }

        <View className="flex p-4 flex-col gap-y-2 rounded-xl">
            <View className={`${(currentStatus.toLowerCase() == 'request_rejected' || status == "REJECTED") ? "bg-red-600" : currentStatus.toLowerCase() == 'pending_patient_consent' ? 'bg-[#FF9500]' : "bg-green-600" } rounded-xl`}>
                <Text className="text-white px-3 py-2  text-2xl uppercase font-bold">{currentStatus.toLowerCase() == "consent_granted" ? "GRANTED" : currentStatus.toLowerCase() == "pending_patient_consent" ? "PENDING" : (currentStatus.toLowerCase() == "request_rejected" || status == "REJECTED" ) ? "REJECTED" : ""}</Text>
            </View>

                <DataRequestElement 
                    containerClasses={""}
                    header={"Request from:"}
                    headerClasses={"text-xl"}
                    details={`Dr. ${from}`}
                    detailsClasses={"text-2xl font-bold"}
                />
                {!optionsVisible && <DataRequestElement 
                    containerClasses={"flex flex-row justify-between"}
                    header={"Requested at:"}
                    headerClasses={"text-lg text-gray-300 font-normal italic"}
                    details={`${date.replace('-','.').replace('-','.')} : ${time}`}
                    detailsClasses={"text-lg text-gray-300 font-normal italic"}
                />}

            <Animated.View style={{height: animatedHeight, overflow:'hidden'}}>
                <>
                    {/* <DataRequestElement 
                        header={"ID:"}
                        containerClasses={"flex flex-col justify-between overflow-hidden"}
                        details={id}
                        headerClasses={"text-xl"}
                        detailsClasses={`text- text-xl uppercase font-bold`}
                    /> */}
                    <DataRequestElement 
                        header={"Clinic:"}
                        containerClasses={"flex flex-col justify-between overflow-hidden"}
                        details={clinicName}
                        headerClasses={"text-xl"}
                        detailsClasses={`text- text-xl font-bold`}
                    />
                    <DataRequestElement 
                        header={"For:"}
                        containerClasses={"flex justify-between overflow-hidden"}
                        details={dataType}
                        headerClasses={"text-xl"}
                        detailsClasses={`text- text-xl font-bold`}
                    />
                    {/* <DataRequestElement 
                        header={"Request for:"}
                        containerClasses={""}
                        headerClasses={"text-xl"}
                        details={`${to}`}
                        detailsClasses={"text-2xl font-bold"}
                    /> */}

                    {/* <DataRequestElement 
                        header={"For: "}
                        containerClasses={"flex flex-row justify-between"}
                        headerClasses={"text-xl font-semibold"}
                        details={about}
                        detailsClasses={"text-xl font-semibold"}
                    /> */}

            
                    <DataRequestElement 
                        containerClasses={"flex flex-row justify-between"}
                        header={"Requested at:"}
                        headerClasses={"text-lg text-gray-300 font-normal italic"}
                        details={`${date.replace('-','.').replace('-','.')} : ${time}`}
                        detailsClasses={"text-lg text-gray-300 font-normal italic"}
                    />
                        {/* <AccesptReject func={changeStatus} /> */}
                        
                        
                    <AccesptReject requestID={id} patientID={to} updateStatus={setCurrentStatus} setCardStatus={setIsExpanded} requestLoadingStatus={requestLoading} setrequestLoadingFunc={setRequestLoading} expandCardFunc={expandCard} />


                </>

            </Animated.View>


            <DataRequestElement 
                header={"Type:"}
                containerClasses={"flex flex-row justify-between gap-x-8"}
                headerClasses={"text-xl"}
                details={type}  //  Updated dynamically
                detailsClasses={`grow text-right text-xl uppercase font-bold 
                    ${currentStatus === 'pending_patient_consent' ? 'text-[#FF9500]' :
                    currentStatus === 'CONSENT_GRANTED' ? 'text-green-500' :
                    'text-red-600'}`}
            />


            {
                optionsVisible && <CustomButton
                    key={1}
                    classes={""}
                    reff={requestCardButton}
                    containerClasses={"border-t pt-3 mt-2"}
                    text={!isExpanded ? 'Show Details' : 'Hide Details'}
                    textClasses={"text-center"}
                    handleClick={expandCard}
                />

            }


        </View>



    </View>
  )
}

export default DataRequest