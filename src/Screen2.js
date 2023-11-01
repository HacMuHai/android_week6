import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native';

export default function App() {

    const arrBikes = [
        {
            img:require('../assets/bitwo-removebg-preview.png'),
            name:'Pinarello',
            price:'1800',
            type:1
        },
        {
            img:require('../assets/bithree_removebg-preview.png'),
            name:'Pina Mountai',
            price:'1600',
            type:2
        },
        {
            img:require('../assets/bione-removebg-preview.png'),
            name:'Pina Bike',
            price:'150',
            type:3
        },
        {
            img:require('../assets/bifour_-removebg-preview.png'),
            name:'Pinarello',
            price:'1700',
            type:1
        },
        {
            img:require('../assets/bitwo-removebg-preview.png'),
            name:'Pinarello',
            price:'1850',
            type:2
        },
        {
            img:require('../assets/bithree_removebg-preview.png'),
            name:'Pinarello',
            price:'1300',
            type:2
        }
    ]

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

             <View style={{ flex: 1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{height:29,fontFamily:"Ubuntu",
                        fontSize:25, fontWeight:700, color:'#E94141'}}>The world’s Best Bike</Text>
             </View>

             <View style={{ flex: 1, flexDirection:'row',justifyContent:'space-around',alignItems:'center', width:'90%',margin:'auto'}}>
                <Pressable style={{width:100,height:25, borderWidth:2,borderColor:'#E94141',borderRadius:5}}>
                    <Text style={{ flex: 1, height:25,fontFamily:"Voltaire",
                        fontSize:20, fontWeight:400, color:'#E94141',textAlign:'center'}}>All</Text>
                </Pressable>
                <Pressable style={{width:100,height:25, borderWidth:2,borderColor:'#E9414187',borderRadius:5}}>
                    <Text style={{ flex: 1, height:25,fontFamily:"Voltaire",
                        fontSize:20, fontWeight:400, color:'#E9414187',textAlign:'center'}}>Roadbike</Text>
                </Pressable>
                <Pressable style={{width:100,height:25, borderWidth:2,borderColor:'#E9414187',borderRadius:5}}>
                    <Text style={{ flex: 1, height:25,fontFamily:"Voltaire",
                        fontSize:20, fontWeight:400, color:'#E9414187',textAlign:'center'}}>Mountain</Text>
                </Pressable>
             </View>

             <View style={{ flex: 7}}>
                    <FlatList
                        numColumns={2}
                        data={arrBikes}
                        columnWrapperStyle={{ gap: 10 }}
                        contentContainerStyle={{ paddingVertical: 10 }}
                        renderItem={({item})=>{
                            return(
                                <View style={{flex:1,borderWidth:1, marginVertical: 10}}>
                                    <Image
                                        source={item.img}
                                        style={{width:128, height:124, resizeMode: 'contain' }}
                                    />
                                    <Text>aaaa</Text>
                                </View>
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
