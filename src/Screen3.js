import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App({ navigation, route }) {

    const { bike } = route.params

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E941411A', borderRadius: 15, margin: 10 }}>
                <Image
                    source={bike.img}
                    style={{ width: 320, height: 340, resizeMode: 'contain' }}
                />
            </View>


            <View style={{ flex: 1, gap: 10, alignItems: 'flex-start', margin: 10 }}>
                <Text style={{ fontFamily: 'Voltaire', fontSize: 25, fontWeight: 600 }}>{bike.name}</Text>
                <View style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
                    <Text style={{ fontFamily: 'Voltaire', fontSize: 25, fontWeight: 400, color: '#00000096' }}>15% OFF {bike.price}$</Text>
                    <Text style={{ fontFamily: 'Voltaire', fontSize: 25, fontWeight: 400, textDecorationLine: 'line-through' }}>{Math.floor(bike.price/85*100)}</Text>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', gap: 10, margin: 10 }}>
                <Text style={{ fontFamily: 'Voltaire', fontSize: 25, fontWeight: 600 }}>Description</Text>
                <Text style={{ fontFamily: 'Voltaire', fontSize: 22, fontWeight: 400, color: '#00000091' }}>{bike.Description}</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 10, gap: 5 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/heart (1).png')}
                            style={{ width: 35, height: 35, resizeMode: 'contain', tintColor: 'black' }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5, }}>
                    <TouchableOpacity style={[{ width: 274, height: 54, backgroundColor: '#E94141', borderRadius: 50, justifyContent: 'center' }]}
                        onPress={()=>navigation.navigate('Screen2')}
                    >
                        <Text style={[{
                            height: 25, fontFamily: "Voltaire",
                            fontSize: 25, fontWeight: 400, color: 'white', textAlign: 'center'
                        }]}>Add to card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
