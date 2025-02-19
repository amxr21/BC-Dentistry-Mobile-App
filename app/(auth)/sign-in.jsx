import { View, Text, SafeAreaView, ScrollView, Image,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

import { icons, Images } from "../../constants"
import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'
import { Link, router, useRouter } from 'expo-router'

const signIn = () => {

    const [ form, setForm ] = useState({
        email: "", 
        password: ""
    })


    const [ isSubmitting, setIsSubmitting ] = useState(false)

    const route = useRouter()



    const signIn = () => {
        if(form.email == "" || form.password == "") {Alert.alert("All fields are required"); return}
        

        setIsSubmitting(true)


        try{
            console.log(form);
            route.replace('/home')
        }catch(error){
            Alert.alert("Error", error.message)
        } 
        finally{
            setIsSubmitting(false)
        }
    }




  return (
    <SafeAreaView className="bg-dblue h-full">
        <Image source={Images.LogoShadow} resizeMode="contain" className="h-[32em] w-[32em] absolute -right-10 bottom-0 opacity-5 bg-blend-overlay" />
        <ScrollView>
            <View className="flex min-h-full px-8 py-16">
                <View className="flex gap-4 mb-10">
                    <Image source={icons.Logo} resizeMode='cover' className="w-16 h-16"/>
                    <Text className="text-white text-3xl font-bold">BC Dentistry</Text>
                </View>

                <View className="flex flex-col gap-y-8">
                    <CustomInput 
                        handleChange={(text) => setForm({...form, email: text})} 
                        type="email-address" 
                        value={form.email}
                        label='Email'
                        placeHolder={"user@example.com"} 
                        inputStyle={''} 
                    />
                    <CustomInput 
                        handleChange={(text) => setForm({...form, password: text})} 
                        type="password" 
                        value={form.password}
                        label='Password'
                        placeHolder={"password"}
                        inputStyle={''} 
                    />

                </View>




                <CustomButton text={'Login'} handleClick={signIn} style='mt-12' />



                <View className="mt-4">
                    <Text className='text-gray-400 text-sm'>
                        Don't have an account? <Link href="/sign-up" className='underline'>Sign up</Link> here
                    </Text>
                </View>




            </View>

            
        </ScrollView>
    </SafeAreaView>
  )
}

export default signIn