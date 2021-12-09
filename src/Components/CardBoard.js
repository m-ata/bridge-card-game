import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../Screens/Layout/Header'

const CardBoard = () => {
    return (
        <View style={styles.cardContainer}>
          <Header />
           <View>
               <View style={styles.playerOne}><Text>Mehmat</Text></View>
               <View style={styles.playerTwo}><Text>Ayse</Text></View>
               <View style={styles.playerThree}><Text>Fatma</Text></View>
               <View style={styles.playerFour}><Text>Ahmet</Text></View>
               <View style={styles.emptyCard} />
           </View>
        </View>
    )
}

export default CardBoard;

const styles = StyleSheet.create({

    cardContainer: {
        marginTop: 50,
        flexGrow: 1,
        backgroundColor: "#008111",
    },

    playerOne:{
        backgroundColor:"#fff",
        width:'40%',
        alignItems:"center",
        alignSelf:"center"
    },
    playerTwo:{
        backgroundColor:"#fff",
        width:'40%',
        alignItems:"center",
        position:"absolute",
        top: 300,
        left:-70,
        transform: [{ rotate: '-90deg'}]
    },
    playerThree:{
        backgroundColor:"#fff",
        width:'40%',
        alignItems:"center",
        position:"absolute",
        top: 300,
        right:-70,
        transform: [{ rotate: '90deg'}]
    },
    playerFour:{
        backgroundColor:"#fff",
        width:'40%',
        alignItems:"center",
        position:"absolute",
        top:602,
        alignSelf:"center"
    },
    emptyCard: {
        width:71,
        height:104,
        borderWidth:1,
        borderStyle:'dashed',
        borderColor:'rgba(255,255,255,0.5)',
        alignSelf:"center",
        marginTop:50,
        borderRadius: 1,
   }

})