import React, { useState } from 'react'
import { StyleSheet,View,Image,SafeAreaView,Animated } from 'react-native'
import CardAce from '../../assets/ace_of_hearts.png'
import {cardHeight,cardPadding} from '../Constants'

const AceCardBottom = ({cardNumber}) => {

   const [y, setY] = useState(new Animated.Value(0))
   const images = new Array(cardNumber || 2).fill(CardAce);
    return (

        <SafeAreaView style={[styles.card]}>
            <View style={styles.cardContainer}>
            {images.map((img,i) => {
                 const inputRange = [-cardHeight, 0];
                           const outputRange = [
                             cardHeight * i,
                             (cardHeight) * -i
                           ];
                           if (i > 0) {
                             inputRange.push(cardPadding * i);
                             outputRange.push((cardHeight) * -i);
                           }
                           const translateY = y.interpolate({
                             inputRange,
                             outputRange,
                             extrapolateRight: "clamp"
                           });
                return (
                    <Animated.View  key={i}>
                        <Image source={img} style={styles.ImageAce}  />
                    </Animated.View>

                )
            })}
           </View>
        </SafeAreaView>

    )
}

export default AceCardBottom

const styles = StyleSheet.create({
    card:{
        justifyContent:"flex-start",

    },
    cardContainer:{
        height: cardHeight,
        flexDirection:"row",
        marginTop:4,
        alignSelf:"center",
        zIndex:-1

    },
    ImageAce:{
        width:60,height:80
    }
})