import React, { useState } from 'react'
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import Header from '../Screens/Layout/Header'
import AceCard from './AceCard'
import AceCardBottom from './AceCardBottom'
import { height } from '../Constant'



const CardBoard = () => {
    const leftValue = useState(new Animated.Value(-120))[0]
    const movingCard = () => {
        Animated.timing(leftValue, {
            toValue: -30,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    return (
        <View style={styles.cardContainer}>
            <Header />
            <View>
                <View style={styles.playerOne}><Text>Mehmat</Text></View>
                <View style={styles.playerTwo}><Text>Ayse</Text></View>
                <View style={styles.playerThree}><Text>Fatma</Text></View>
                <View style={styles.playerFour}><Text>Ahmet</Text></View>

                <TouchableOpacity style={styles.emptyCard} onPress={movingCard} />
            </View>
            <View>
                <Animated.View style={[styles.cardGroupOne, { left: leftValue }]}>
                    <AceCard />
                </Animated.View>
                <View style={styles.cardGroupTwo}>
                    <AceCard cardNumber={4} />
                </View>
                <View style={styles.cardGroupThree}>
                    <AceCard cardNumber={3} />
                </View>
            </View>
            <View>
                <AceCardBottom cardNumber={6} />
            </View>
        </View>
    )
}

export default CardBoard

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 50,
        flexGrow: 1,
        backgroundColor: "#008111",
    },
    playerOne: {
        backgroundColor: "#fff",
        width: '40%',
        alignItems: "center",
        alignSelf: "center"
    },
    playerTwo: {
        backgroundColor: "#fff",
        width: '40%',
        alignItems: "center",
        position: "absolute",
        top: 300,
        left: -70,
        transform: [{ rotate: '-90deg' }]
    },
    playerThree: {
        backgroundColor: "#fff",
        width: '40%',
        alignItems: "center",
        position: "absolute",
        top: 300,
        right: -70,
        transform: [{ rotate: '90deg' }]
    },
    playerFour: {
        backgroundColor: "#fff",
        width: '40%',
        alignItems: "center",
        position: "absolute",
        top: height < 791 ? height * 0.84 : height * 0.82,
        alignSelf: "center",
        justifyContent: "flex-end"
    },
    emptyCard: {
        width: 71,
        height: 104,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'rgba(255,255,255,0.5)',
        alignSelf: "center",
        marginTop: 50,
        borderRadius: 1,
    },
    cardGroupOne: { marginTop: 225 },
    cardGroupTwo: { left: -30, marginTop: 5 },
    cardGroupThree: { left: -60, marginTop: 5 }
})
