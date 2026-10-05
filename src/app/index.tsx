import Actions from "@/components/Actions";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import ScoreRing from "../components/ScoreRing";
import TabBar from "../components/TabBar";
import { colors } from "../constants/colors";
export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Header />
        <ScoreRing />
        <Actions />
      </View>
      <TabBar />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 44,
    gap: 14,
    justifyContent: "space-between",
  },
});
