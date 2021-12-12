import React, { useState } from 'react'
import { StyleSheet, View, Image, SafeAreaView, Animated, Dimensions } from 'react-native'
import CardAce from '../../assets/Ace_of_hearts.png'
import { cardHeight, cardPadding, height } from '../Constant'

const AceCardBottom = ({ cardNumber }) => {

    const [x, setX] = useState(new Animated.Value(0))
    const images = new Array(cardNumber || 2).fill(CardAce);
    return (
        <SafeAreaView style={[styles.card]}>
            <View style={styles.cardContainer}>
                {images.map((img, i) => {
                    const inputRange = [-cardHeight, 0];
                    const outputRange = [
                        cardHeight * i,
                        (cardHeight) * -i
                    ];
                    if (i > 0) {
                        inputRange.push(cardPadding * i);
                        outputRange.push((cardHeight) * -i);
                    }
                    const translateX = x.interpolate({
                        inputRange,
                        outputRange,
                        extrapolate: "clamp"
                    });
                    return (
                        <Animated.View style={{ transform: [{ translateX }] }} key={i}>
                            <Image source={img} style={styles.ImageAce} />
                        </Animated.View>
                    )
                })}
            </View>
        </SafeAreaView>
    )
}

export default AceCardBottom

const styles = StyleSheet.create({
    card: {
        justifyContent: "flex-start",

    },
    cardContainer: {
        height: cardHeight,
        flexDirection: "row",
        marginTop: height < 791 ? height * 0.05 : height * 0.09,
        alignSelf: "center",
        zIndex: -1,
        alignItems: "center",
        left: 125

    },
    content: {
        width: cardHeight * 2
    },
    ImageAce: {
        width: 60, height: 90
    }
})
