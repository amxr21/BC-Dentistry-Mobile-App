import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { RequestsHeader, DataRequest } from '../../components';

const API_BASE_URL = 'http://openuae.fortiddns.com:28081'; 

const Requests = () => {
    const [requests, setRequests] = useState([]); // Store API response
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/getAllRequestsForPatient/Patient1`);
                console.log("Fetched Requests:", response.data);
                
                if (response.data.length > 0) {
                    setRequests(response.data);
                } else {
                    console.warn("No pending requests found.");
                }
            } catch (error) {
                console.error("API Error:", error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);

    return (
        <View>
            <StatusBar style='light' />

            {/* Requests Header */}
            <RequestsHeader requests={requests} />

            <ScrollView className='px-8 flex flex-col gap-y-8 h-[60vh]'>

                <View className="flex flex-col gap-6 py-10">
                    {loading ? (
                        <Text>Loading requests...</Text>
                    ) : requests.length === 0 ? (
                        <Text>No pending requests</Text>
                    ) : (
                        requests.filter((request) => request.status == 'PENDING_PATIENT_CONSENT').map((request) => (
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
                            />
                        ))
                    )}
                </View>

            </ScrollView>
        </View>
    );
};

export default Requests;
