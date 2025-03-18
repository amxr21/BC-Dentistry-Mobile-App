// import { View, Text } from 'react-native'
// import React from 'react'

// import { CustomButton } from './index'

// const AccesptReject = ({func}) => {
//   return (
//     <View className="flex flex-row gap-x-4">
//             <CustomButton
//                 key={2}
//                 classes={"grow"}
//                 containerClasses={"border border-red-500 p-2 rounded-xl bg-red-500"}
//                 text={'Reject'}
//                 textClasses={"text-center text-white font-semibold text-lg"}
//                 handleClick={func}
//             />

//             <CustomButton
//                 key={4}
//                 classes={"grow"}
//                 containerClasses={"border border-green-500 p-2 rounded-xl bg-green-500"}
//                 text={'Accept'}
//                 textClasses={"text-center text-white font-semibold text-lg"}
//                 handleClick={func}
//             />

//         </View>

//   )
// }

// export default AccesptReject
import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { CustomButton } from './index';

const API_BASE_URL = 'http://192.168.10.22:8081'; 

const AccesptReject = ({ requestID, patientID, updateStatus }) => {
    const [loading, setLoading] = useState(false);

    const handleAccept = async () => {
      setLoading(true);
      try {
          const response = await axios.post(`${API_BASE_URL}/provideConsent`, {
              patientID,
              requestID,
          });
          console.log("Consent Granted:", response.data);
          Alert.alert("Success", "Request accepted successfully!");
          updateStatus("CONSENT_GRANTED"); // 🔥 UI will update dynamically
      } catch (error) {
          console.error("Error Accepting Request:", error.response?.data || error.message);
          Alert.alert("Error", "Failed to accept request.");
      } finally {
          setLoading(false);
      }
  };
  
  const handleReject = async () => {
      setLoading(true);
      try {
          const response = await axios.post(`${API_BASE_URL}/rejectRequest`, {
              patientID,
              requestID,
              rejectionReason: "Not authorized", // You can modify this
          });
          console.log("Request Rejected:", response.data);
          Alert.alert("Success", "Request rejected successfully!");
          updateStatus("REQUEST_REJECTED"); // 🔥 UI will update dynamically
      } catch (error) {
          console.error("Error Rejecting Request:", error.response?.data || error.message);
          Alert.alert("Error", "Failed to reject request.");
      } finally {
          setLoading(false);
      }
  };
  

    return (
        <View className="flex flex-row gap-x-4">
            <CustomButton
                key="reject"
                classes={"grow"}
                containerClasses={"border border-red-500 p-2 rounded-xl bg-red-500"}
                text={loading ? "Rejecting..." : "Reject"}
                textClasses={"text-center text-white font-semibold text-lg"}
                handleClick={handleReject}
                disabled={loading}
            />

            <CustomButton
                key="accept"
                classes={"grow"}
                containerClasses={"border border-green-500 p-2 rounded-xl bg-green-500"}
                text={loading ? "Accepting..." : "Accept"}
                textClasses={"text-center text-white font-semibold text-lg"}
                handleClick={handleAccept}
                disabled={loading}
            />
        </View>
    );
};

export default AccesptReject;
