import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const TextContext = React.createContext<any>(null)

export interface ItemDataDTO {
    text: string,
    id: number
}

const TextProvider = ({ children }: { children: React.ReactNode }) => {

    const [listArray, setArray] = React.useState<ItemDataDTO[]>([])

    return (
        <>
            <TextContext.Provider value={[listArray, setArray]}>
                {children}
            </TextContext.Provider>
        </>
    )
}

export default TextProvider

const styles = StyleSheet.create({})