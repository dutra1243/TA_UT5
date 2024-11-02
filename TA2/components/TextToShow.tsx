import { StyleSheet, Text, View } from 'react-native'
import { TextContext } from './TextProvider'
import React from 'react'

const TextToShow = () => {

    const [text, setText] = React.useContext(TextContext)

    return (
        <>
            <Text> {text === "" ? "Here goes your text" : text} </Text>
        </>
    )
}

export default TextToShow

const styles = StyleSheet.create({})