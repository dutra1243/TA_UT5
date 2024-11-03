import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { ItemDataDTO, TextContext } from './TextProvider'
import React from 'react'

export const TextItem = (props: ItemDataDTO) => {

    const [id, setId] = React.useState(props.id)

    const [text, setText] = React.useContext(TextContext)

    const handleDelete = () => {


        setText(text.filter((item: ItemDataDTO) => item.id !== id))
    }

    return (
        <>
            <Text>{props.text}</Text>
            <Button onPress={handleDelete} title='Delete'></Button>
        </>
    )
}

const ItemsInFlatList = () => {

    const [text, setText] = React.useContext(TextContext)

    return (
        <>
            <FlatList data={text} renderItem={(item) => <TextItem text={item.item.text} id={item.item.id} ></TextItem>}>

            </FlatList>
        </>
    )
}

export default ItemsInFlatList

const styles = StyleSheet.create({})