import ItemsInFlatList from "@/components/ItemsInFlatList";
import ItemsInput from "@/components/ItemsInput";
import TextProvider from "@/components/TextProvider";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <TextProvider>
        <ScrollView
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ItemsInput />
          <ItemsInFlatList />
        </ScrollView>
      </TextProvider>
    </>
  );
}
