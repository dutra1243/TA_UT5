import { View, Text, Button } from 'react-native'
import React from 'react'

const Counter = () => {

    const [count, setCount] = React.useState(0)


    return (
        <>
            <Text style={{
                fontSize: 24,
                fontWeight: "bold"
            }}>{count}</Text>
            <View style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Button title="+1" onPress={() => setCount(count + 1)} />
                <Button title="-1" onPress={(() => setCount(count - 1))} />
            </View>
        </>
    )
}

export default Counter