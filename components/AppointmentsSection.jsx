import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Appointments from './Appointments'




const AppointmentsSection = () => {


    const [status, setStatus] = useState('Upcoming')




    return (
        <View>
            <Text className="text-xl font-semibold mb-2">Appointments</Text>
            <View className="flex flex-col gap-y-2">
                <View id='appointmentStatus' className="bg-gray-300 flex flex-row p-[0.4rem] w-full rounded-xl">
                    
                    

                    {
                        status == 'Upcoming'
                        ?
                        (<>
                            
                            <View className=" bg-white px-3 py-2 flex-1 rounded-2xl mr-2">
                                <Text className="text-lg font-semibold text-center">Upcoming</Text>
                            </View>
                            
                            <TouchableOpacity className="flex-1 " onPress={() => {setStatus('Completed')}}>
                                <View className="px-3 py-2 rounded-xl">
                                    <Text className="text-lg text-gray-500 font-medium text-center">Completed</Text>
                                </View>
                            </TouchableOpacity>
                        </>)
                        :
                        (<>
                            <TouchableOpacity className="flex-1 "  onPress={() => {setStatus('Upcoming')}}>
                                <View className=" px-3 py-2 rounded-2xl mr-2">
                                    <Text className="text-lg text-gray-500 font-medium text-center">Upcoming</Text>
                                </View>

                            </TouchableOpacity>
                            <View className={`bg-white px-3 py-2 flex-1 rounded-xl`}>
                                <Text className="text-lg font-semibold text-center">Completed</Text>
                            </View>
                        </>)
                    }

                </View>

                <Appointments status={status} />

            </View>


        </View>
    )
}

export default AppointmentsSection