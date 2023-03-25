import { View, Text } from 'react-native'
import React from 'react'

import { SliderBox } from "react-native-image-slider-box"

const SlideShow = () => {
    const images = [
        require("../assets/books1.jpg"),
        require("../assets/books2.jpg"),
        require("../assets/books3.jpg")
    ]
    return (
        <View>
            {/* <Text>SlideShow</Text> */}
            <SliderBox images={images} dotColor="#fff" inactiveDotColor="#ddd" imageLoadingColor="#fff" autoplay={true} autoplayInterval={2000} circleLoop={true} sliderBoxHeight={175} />
        </View>
    )
}

export default SlideShow