import { Text, View } from "react-native";
import ImageList from "@/components/ImageList";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageList />
    </View>
  );
}
