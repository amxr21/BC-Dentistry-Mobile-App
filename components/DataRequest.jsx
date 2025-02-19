import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'

import { CustomButton, DataRequestElement, AccesptReject, StatusUpdateLoading } from './index'




const DataRequest = ({type, from, to, status, id, about, date, time}) => {

    const requestCard = useRef()

    const [ isExpanded, setIsExpanded ] = useState(false);

    const [ isAccepted, setIsAccepted ] = useState(false)

    const expandCard = () => {
        setIsExpanded((p) => !p)
    }

    const changeStatus = () => {
        setIsAccepted((p) => !p)
        
    }
    const [statusBg, setStatusBg] = useState('min-h-0 h-0'); // use state for statusBg

 
    useEffect(() => {
        if (isAccepted) {
            setStatusBg('min-h-full h-full');
            setTimeout(() => {
                setStatusBg('min-h-0 h-0');
            }, 3000);
        } else {
            setStatusBg('min-h-0 h-0');
        }

    }, [isAccepted])
    


  return (
    <View className="bg-white relative  rounded-xl overflow-hidden">
        
        <StatusUpdateLoading
            reff = {requestCard}
            status = {statusBg}
        />

        <View className="flex p-4 flex-col gap-y-2 rounded-xl">
            <View className={`${type.toLowerCase() == 'off-chain' ? "bg-red-600" : "bg-green-600" } rounded-xl`}>
                <Text className="text-white px-3 py-2  text-2xl uppercase font-bold">{type}</Text>
            </View>


            {
                isExpanded && 
                <DataRequestElement 
                    containerClasses={"flex flex-row justify-between gap-x-8"}
                    details={id}
                    detailsClasses={`grow text-right text-xl uppercase font-bold`}
                    header={"ID:"}
                    headerClasses={"text-xl"}
                />
            }

                <DataRequestElement 
                    containerClasses={""}
                    header={"Request from:"}
                    headerClasses={"text-xl"}
                    details={`Dr. ${from}`}
                    detailsClasses={"text-2xl font-bold"}
                />


            {
                isExpanded && 
                <>
                    <DataRequestElement 
                        containerClasses={""}
                        header={"Request for:"}
                        headerClasses={"text-xl"}
                        details={`${to}`}
                        detailsClasses={"text-2xl font-bold"}
                    />

                    <DataRequestElement 
                        containerClasses={"flex flex-row justify-between"}
                        header={"For: "}
                        headerClasses={"text-xl font-semibold"}
                        details={about}
                        detailsClasses={"text-xl font-semibold"}
                    />

                </>

            }
                    <DataRequestElement 
                        containerClasses={"flex flex-row justify-between gap-x-8"}
                        header={"Status:"}
                        headerClasses={"text-xl"}
                        details={status}
                        detailsClasses={`grow text-right text-xl uppercase font-bold ${status.toLowerCase() == 'pending'? 'text-[#FF9500]': status.toLowerCase() == 'granted' ? 'text-green-500' : 'text-red-600'}`}
                    />

            

            {
                isExpanded && 
                <>
                    <DataRequestElement 
                        containerClasses={"flex flex-row justify-between"}
                        header={"Requested at:"}
                        headerClasses={"text-lg text-gray-300 font-normal italic"}
                        details={`${date.replace('-','.').replace('-','.')} : ${time}`}
                        detailsClasses={"text-lg text-gray-300 font-normal italic"}
                    />
                    <AccesptReject func={changeStatus} />

                </>

            }


            <CustomButton
                key={1}
                classes={""}
                containerClasses={"border-t pt-3 mt-2"}
                text={!isExpanded ? 'Show Details' : 'Hide Details'}
                textClasses={"text-center"}
                handleClick={expandCard}
            />

        </View>



    </View>
  )
}

export default DataRequest