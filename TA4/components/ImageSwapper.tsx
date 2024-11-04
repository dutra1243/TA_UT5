import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageSwapper = () => {

    const images = ["https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=", "https://wallpapers.com/images/featured/coolest-pictures-88c269e953ar0aw4.jpg"]

    const [currentImage, setCurrentImage] = React.useState(images[0])
    const [currentText, setCurrentText] = React.useState("Yo durante la semana")

    const handlePress = () => {
        if (currentImage === images[0]) {
            setCurrentImage(images[1])
            setCurrentText("Yo el fin de semana")
        } else {
            setCurrentImage(images[0])
            setCurrentText("Yo durante la semana")
        }
    }

    return (
        <>
            <Button onPress={handlePress} title="Cambiar imagen"></Button>
            <Text style={styles.text}>{currentText}</Text>
            <Image style={styles.image} src={currentImage} alt="hola soy una imagen."></Image>
        </>
    )
}

export default ImageSwapper

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 200,
        backgroundColor: "black",
        borderRadius: 25,
    },
    text: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
    },
})