import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native';

export default function App({navigation,route}) {

    const arrBikes = [
        {
            id:1,
            img: require('../assets/bitwo-removebg-preview.png'),
            name: 'Pinarello',
            price: '1800',
            type: 1
        },
        {
            id:2,
            img: require('../assets/bithree_removebg-preview.png'),
            name: 'Pina Mountai',
            price: '1600',
            type: 2
        },
        {
            id:3,
            img: require('../assets/bione-removebg-preview.png'),
            name: 'Pina Bike',
            price: '1500',
            type: 1
        },
        {
            id:4,
            img: require('../assets/bifour_-removebg-preview.png'),
            name: 'Pinarello',
            price: '1700',
            type: 1
        },
        {
            id:5,
            img: require('../assets/bitwo-removebg-preview.png'),
            name: 'Pinarello',
            price: '1850',
            type: 2
        },
        {
            id:6,
            img: require('../assets/bithree_removebg-preview.png'),
            name: 'Pinarello',
            price: '1300',
            type: 2
        }
    ]

    const [color,setColor]=useState(-1)
    const [arrView,setArrView] = useState(arrBikes)

    function changeType(type){
        if(type === -1){
            setArrView(arrBikes)
        }else{
            setArrView(arrBikes.filter((value)=>{
                return value.type === type
            }))
        }
        setColor(type)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{
                    height: 29, fontFamily: "Ubuntu",
                    fontSize: 25, fontWeight: 700, color: '#E94141'
                }}>The world’s Best Bike</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '90%', margin: 'auto' }}>
                <Pressable style={[{ width: 100, height: 25, borderWidth: 2, borderColor: '#E9414187', borderRadius: 5 },color==-1?{borderColor:'#E94141'}:null]}
                    onPress={()=>changeType(-1)}
                >
                    <Text style={[{
                        flex: 1, height: 25, fontFamily: "Voltaire",
                        fontSize: 20, fontWeight: 400, color: '#E9414187', textAlign: 'center'
                    },color==-1?{color:'#E94141'}:null]}>All</Text>
                </Pressable>
                <Pressable style={[{ width: 100, height: 25, borderWidth: 2, borderColor: '#E9414187', borderRadius: 5 },color==1?{borderColor:'#E94141'}:null]}
                    onPress={()=>changeType(1)}
                >
                    <Text style={[{
                        flex: 1, height: 25, fontFamily: "Voltaire",
                        fontSize: 20, fontWeight: 400, color: '#E9414187', textAlign: 'center'
                    },color==1?{color:'#E94141'}:null]}>Roadbike</Text>
                </Pressable>
                <Pressable style={[{ width: 100, height: 25, borderWidth: 2, borderColor: '#E9414187', borderRadius: 5 },color==2?{borderColor:'#E94141'}:null]}
                    onPress={()=>changeType(2)}
                >
                    <Text style={[{
                        flex: 1, height: 25, fontFamily: "Voltaire",
                        fontSize: 20, fontWeight: 400, color: '#E9414187', textAlign: 'center'
                    },color==2?{color:'#E94141'}:null]}>Mountain</Text>
                </Pressable>
            </View>

            <View style={{ flex: 7, alignItems: 'center' }}>
                <FlatList
                    numColumns={2}
                    data={arrView}
                    renderItem={({ item }) => {
                        return (
                            <Pressable 
                                style={{
                                    height: 200, width: 167, borderWidth: 1, marginLeft: 5, marginRight: 5, marginBottom: 10, borderRadius: 10,
                                    backgroundColor: '#F7BA8326', alignItems: 'center'
                                }}
                                onPress={()=>navigation.push('Screen3',{item:item})}
                            >
                                <Image
                                    source={item.img}
                                    style={{ flex: 1, width: 135, height: 127, resizeMode: 'contain' }}
                                />
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 400,fontFamily:'Voltaire' }}>{item.name}</Text>
                                    <View style={{ flexDirection:'row',alignItems: 'center' }}>
                                        <Image
                                            source={require('../assets/$.png')}
                                            style={{ width: 15, height: 15, resizeMode: 'contain' }}
                                        />
                                        <Text style={{ fontSize: 20, fontWeight: 400 }}>{item.price}</Text>
                                    </View>

                                </View>
                            </Pressable>
                        )
                    }}
                ></FlatList>
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
