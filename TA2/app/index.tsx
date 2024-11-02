import TextToInput from "@/components/TextToInput";
import { Text, View } from "react-native";
import React from "react";
import TextToShow from "@/components/TextToShow";
import TextProvider from "@/components/TextProvider";
import { StyleSheet } from "react-native";

export default function Index() {

  const [text, setText] = React.useState('')

  return (
    <>
      <TextProvider>
        <View style={styles.textContainer}>
          <TextToInput />
          <TextToShow />
        </View>
      </TextProvider>
    </>
  );
}


export const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '90%',
  },
});
