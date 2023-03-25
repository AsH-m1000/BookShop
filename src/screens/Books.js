import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SlideShow from '../components/SlideShow';
import Picks from '../components/Picks';

const Books = () => {
    return (
        <>
            {/* <ScrollView> */}
            <SlideShow />
            <Picks horizontal={true} name={"TopPicks"} bookname={"cartoon"} size={200} images={3} />
            <Picks horizontal={false} name={"Featured Picks"} bookname={"angle"} size={325} images={2} />
            {/* </ScrollView> */}
        </>
    );
};


export default Books;
