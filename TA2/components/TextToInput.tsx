import { TextInput, StyleSheet } from 'react-native'
import { TextContext } from './TextProvider'
import React from 'react'

const TextToInput = () => {

    const [text, setText] = React.useContext(TextContext)

    return (
        <>
            <TextInput value={text} onChangeText={setText} style={styles.input} placeholder="Insertar Texto" />

        </>
    )
}

export default TextToInput

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
})