import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Modal, Linking } from 'react-native';

export default function MainBage({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const[number,setnumber]=useState("")
    const handleButtonPresspolice = () => {
        setModalVisible(true);
        setnumber("100")
    };
    const handleButtonPressambolans = () => {
        setModalVisible(true);
        setnumber("101")

    };  const handleButtonPress = () => {
        setModalVisible(true);
        setnumber("102")

    };

    const handleCall = () => {
        const phoneNumber = `tel:${number}`; // Change to the desired phone number
        Linking.openURL(phoneNumber)
            .catch(err => console.error('An error occurred', err));
        setModalVisible(false);
    };

    const handleLocation = () => {
        console.log('Location button pressed');
        setModalVisible(false);
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPresspolice}>
                <View style={styles.category}>
                    <Image source={require('../../assets/police.png')} style={styles.image} />
                    <Text style={styles.buttonText}>  مركز الشرطة    </Text>
                    <Text style={styles.buttonText}> 100    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPressambolans}>
                <View style={styles.category}>
                    <Image source={require('../../assets/ampolans.png')} style={styles.image} />
                    <Text style={styles.buttonText}>      الاسعاف     </Text>
                    <Text style={styles.buttonText}>   101  </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <View style={styles.category}>
                    <Image source={require('../../assets/tfai.png')} style={styles.image} />
                    <Text style={styles.buttonText}>    الاطفائية     </Text>
                    <Text style={styles.buttonText}>   102    </Text>
                </View>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeText}>X</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalText}> اتصل عالمركز او ابحث عن اقرب مركز اليك </Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.modalButton} onPress={handleCall}>
                                <Text style={styles.modalButtonText}>الاتصال</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={handleLocation}>
                                <Text style={styles.modalButtonText}>الموقع</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    category: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#6AB62F',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#6AB62F',
        fontSize: 20,
        fontWeight: '700',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        color: '#6AB62F',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    modalButton: {
        flex: 1,
        backgroundColor: '#6AB62F',
        borderRadius: 25,
        paddingVertical: 12,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    closeText: {
        fontSize: 24,
        color: '#6AB62F',
        fontWeight: 'bold',
    },
});
