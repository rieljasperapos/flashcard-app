import { useLocalSearchParams } from "expo-router"
import { View, StyleSheet } from "react-native"
import DeckScreen from "@/components/DeckScreen";

import { staticTopicData } from "@/constants/staticData";

export default function FlashCard() {
  const { id } = useLocalSearchParams();
  const cards = staticTopicData[Number(id)];

  return (
    <View style={styles.container}>
      <DeckScreen topic={cards} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})