import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export const ImageItem = (props: {
    id: string,
    url: string,
    desc: string,
}) => {

    return (
        <View style={styles.item} >
            <Image style={styles.image} src={props.url} ></Image>
            <Text style={styles.text} > {props.desc} </Text>
        </View>
    )
}

const ImageList = () => {

    const DATA = [
        {
            id: '1',
            url: 'https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=',
            desc: 'First Item',
        },
        {
            id: '2',
            url: 'https://wallpapers.com/images/featured/coolest-pictures-88c269e953ar0aw4.jpg',
            desc: 'Second Item',
        },
        {
            id: '3',
            url: "https://img.freepik.com/free-photo/view-3d-cool-modern-bird_23-2150946449.jpg",
            desc: 'Third Item'
        },
        {
            id: '4',
            url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            desc: 'Fourth Item'
        },
        {
            id: '5',
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMyzfmXp2bWMGCMLw2JC4uXpXR1qEGTCBvw&s",
            desc: 'Fifth Item'
        },
        {
            id: '6',
            url: "https://www.dropicts.com/wp-content/uploads/how-to-take-aesthetic-pictures-1024x683.jpg",
            desc: 'Sixth Item'
        }
    ];


    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <ImageItem id={item.id} url={item.url} desc={item.desc} />}></FlatList >
        </View >
    )
}

export default ImageList

const styles = StyleSheet.create({
    item: {
        margin: 10,
    },
    image: {
        width: 400,
        height: 200,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})