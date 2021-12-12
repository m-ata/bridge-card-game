import React, { useState } from 'react'
import { StyleSheet,View,Image,SafeAreaView,Animated } from 'react-native'
import CardAce from '../../assets/Ace_of_hearts.png'
import {cardHeight,cardPadding} from '../Constant'

const AceCard = ({cardNumber}) => {
 
   const [y, setY] = useState(new Animated.Value(0))
   const images = new Array(cardNumber || 1).fill(CardAce);
    return (
       
        <SafeAreaView style={styles.root}>
            <View style={[styles.card]}>
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
                    <Animated.View style={{ transform: [{ translateY }] }} key={i}>
                        <Image source={img} style={styles.ImageAce}  />
                    </Animated.View>

                )
            })}
           </View>
           <Animated.ScrollView
            scrollEventThrottle={16}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { y }
                  }
                }
              ],
              { useNativeDriver: true }
            )}
          />
           </View>
        </SafeAreaView>

           
       
    )
}

export default AceCard

const styles = StyleSheet.create({
    root: {
        justifyContent:"flex-start",
        alignItems:'flex-start',
        transform: [{ rotate: '90deg'}]
      },
    card:{
        height: cardHeight,
        borderRadius: 10
    },
    cardContainer:{
        height: cardHeight,
    },
    ImageAce:{
        width:50,height:80
    }
})
