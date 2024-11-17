import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import MapView from "react-native-maps";
import * as Location from 'expo-location';
import { useEffect, useRef, useState } from 'react';
import { Button, FAB, TextInput } from "react-native-paper";
import { styles } from '../styles/stylesIndex';
import { Modal } from '../../src/components/modal';


import { useForm, Controller } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


type FormAlertProps = {
    description: string
}
const alertUpSchema = yup.object({
    description: yup.string().required("*O campo acima não pode está vazio")
})


export default function Index({description}:FormAlertProps) {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [loading, setLoading] = useState(true);
    const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);
    
    const mapRef = useRef<MapView>(null);

    const { control, handleSubmit, setValue, formState:{errors}, reset } = useForm<FormAlertProps>({
        resolver: yupResolver(alertUpSchema),
        defaultValues: { description: description || '' }, 
    });

    const handleFormSubmit = ({description}:FormAlertProps) => {
        console.log('Formulário enviado com dados:', description); 
        setVisible(false); 
        reset(); 
    };
    
    

    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const requestLocationPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        return status === "granted";
    };

    const getUserLocation = async () => {
        return await Location.getCurrentPositionAsync({});
    };

    const fetchLocation = async () => {
        try {
            const hasPermission = await requestLocationPermission();

            if (!hasPermission) {
                setLocationPermissionDenied(true);
                return;
            }

            const userLocation = await getUserLocation();
            setLocation(userLocation);
            setLocationPermissionDenied(false);
        } finally {
            setLoading(false);
        }
    };

    const centerUserLocation = () => {
        if (location && mapRef.current) {
            mapRef.current.animateCamera({
                center: location.coords,
            });
        }
    };

    useEffect(() => {
        fetchLocation();
        Location.watchPositionAsync(
            {
                accuracy: Location.LocationAccuracy.Highest,
                timeInterval: 1000,
                distanceInterval: 1,
            },
            (res) => {
                setLocation(res);

                mapRef.current?.animateCamera({
                    center: res.coords,
                });
            });
    }, []);

  ;

    return (
        <View style={styles.container}>
            {locationPermissionDenied ? (
                <View style={styles.permissionContainer}>
                    <Text style={styles.permissionText}>
                        Precisamos da sua permissão para acessar a localização.
                    </Text>
                    <TouchableOpacity style={styles.permissionButton} onPress={fetchLocation}>
                        <Text style={styles.buttonText}>Tentar Novamente</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    {location ? (
                        <MapView
                            ref={mapRef}
                            style={styles.map}
                            initialRegion={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.002,
                                longitudeDelta: 0.002,
                            }}
                            showsUserLocation={true}
                            followsUserLocation={true}
                            showsMyLocationButton={false}
                            showsCompass={false}
                        />
                    ) : (
                        <MapView style={styles.map}
                            initialRegion={{
                                latitude: -3.10719,
                                longitude: -60.0261,
                                latitudeDelta: 0.002,
                                longitudeDelta: 0.002
                            }} />
                    )}
                    <FAB
                        icon="crosshairs-gps"
                        style={styles.fab}
                        onPress={centerUserLocation}
                        color="white"
                    />
                    
                    <FAB
                        icon="alert"
                        style={styles.fab2}
                        onPress={showModal} 
                        color="white"
                    />
                    <Modal
                        visible={visible}
                        onDismiss={() => {
                            setVisible(false);
                            reset({ description: "" }); 
                        }}
                        onConfirm={handleSubmit(handleFormSubmit)}
                        title="Descrição da ocorrência"
                        description={description} 
                        isForm={true} 
                        >
                         <View >

                            <Controller 
                            control={control} 
                            name='description' 

                            render={({ field: {onChange, value}}) => (
                            <TextInput
                                placeholder='Descreva a ocorrência...'
                                placeholderTextColor="#71717a" 
                                mode="outlined" 
                                theme={{colors: {background: "ffffff"} }}
                                onChangeText={onChange}
                                value={value}  
                                multiline={true}
                                textAlignVertical="top" 
                                style={styles.inputModal}
                            />
                            )}/>

                        </View>
                        {
                            errors.description?.message && <Text style={{color: 'red'}}>{ errors.description.message }</Text>
                        }
                    </Modal>

                </>
            )}
        </View>
    );
}
