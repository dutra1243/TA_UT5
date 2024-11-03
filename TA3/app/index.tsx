import ItemsInFlatList from "@/components/ItemsInFlatList";
import ItemsInput from "@/components/ItemsInput";
import TextProvider from "@/components/TextProvider";
import { Text, View } from "react-native";

export default function Index() {


  //IS scrolling properly, not sure why

  return (
    <>
      <TextProvider>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ItemsInput />
          <ItemsInFlatList />
        </View>
      </TextProvider>
    </>
  );
}
