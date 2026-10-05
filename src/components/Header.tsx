import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";
export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.backButton}>
        <Ionicons name="arrow-back" size={22} color={colors.text} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: { flexDirection: "row" },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.text,
    justifyContent: "center",
    alignItems: "center",
  },
});
