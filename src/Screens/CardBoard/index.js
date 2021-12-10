import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CardBoard from '../../Components/CardBoard'
const CardBoardScreen = () => {
    return (
        <View style={styles.CardBoard}>
            <CardBoard />
        </View>
    )
}

export default CardBoardScreen

const styles = StyleSheet.create({
    CardBoard:{
        flex:1
    }
})