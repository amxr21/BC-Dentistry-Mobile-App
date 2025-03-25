import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="proceedRequests" options={{headerShown: true, headerTitle:'Approved Requests', headerBackTitle:'Info'}} />
      <Stack.Screen name="(auth)" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
) 
}
