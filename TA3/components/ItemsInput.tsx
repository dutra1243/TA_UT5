import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React from 'react'
import { TextContext } from './TextProvider'

const ItemsInput = () => {

    const [listArray, setArray] = React.useContext(TextContext)

    const [text, setText] = React.useState('')

    const [count, setCount] = React.useState(0)

    return (
        <>
            <TextInput value={text} onChangeText={setText} style={styles.input} placeholder='Add an item!'></TextInput>
            <Button title='Add' onPress={() => {
                if (text === '') {
                    Alert.alert('Error', 'Please enter some text before adding an item.');
                    return
                }
                setArray([...listArray, { text: text, id: count }])
                setCount(count + 1)
                setText('')
            }}></Button>
        </>
    )
}

export default ItemsInput

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
    },
})