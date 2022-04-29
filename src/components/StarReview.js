import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import R from '../assets/R';

const StarReview = ({ rate, numberStar = false }) => {
    
    var starComponents = [];
    var fullStar = Math.floor(rate)
    var noStar = Math.floor(5 - rate)
    var halfStar = 5 - fullStar - noStar


    // Full Star
    for (var i = 0; i < fullStar; i++) {
        starComponents.push(
            <Image
                key={`full-${i}`}
                source={R.images.star_full}
                resizeMode="cover"
                style={{
                    width: 16,
                    height: 16,
                    tintColor:R.colors.main,
                    marginHorizontal:3
                }}
            />
        )
    }

    // Half Star
    for (var i = 0; i < halfStar; i++) {
        starComponents.push(
            <Image
                key={`half-${i}`}
                source={R.images.star_haflf}
                resizeMode="cover"
                style={{
                    width: 16,
                    height: 16,
                    tintColor:R.colors.main,
                    marginHorizontal:3
                }}
            />
        )
    }

    // No Star
    for (var i = 0; i < noStar; i++) {
        starComponents.push(
            <Image
                key={`empty-${i}`}
                source={R.images.star_empty}
                resizeMode="cover"
                style={{
                    width: 16,
                    height: 16,
                    marginHorizontal:3
                }}
            />
        )
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            {starComponents}
            <Text style={{ 
                marginLeft: 8,
                marginTop:3, 
                fontSize:14,
                color:R.colors.color777
            }}>
                {numberStar && (
                    <Text>({rate})</Text>
                )}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default StarReview;