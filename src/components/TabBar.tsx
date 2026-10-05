import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";
export default function TabBar() {
  return (
    <View style={styles.bar}>
      <Ionicons name="heart-outline" size={24} color={colors.pink} />
      <Ionicons name="calendar-clear-outline" size={22} color="#FFFFFF" />
      <View style={styles.addButton}>
        <Ionicons name="add" size={30} color={colors.dark} />
      </View>
      <Ionicons name="chatbox-ellipses-outline" size={22} color="#FFFFFF" />
      <Ionicons name="person-outline" size={22} color="#FFFFFF" />
    </View>
  );
}
const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.dark,
    borderRadius: 28,
    height: 64,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.pink,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -36,
    borderWidth: 4,
    borderColor: colors.background,
  },
});
