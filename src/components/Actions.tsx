import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import CheckupSheet from "./CheckupSheet";

export default function Actions() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <View style={styles.row}>
      <Pressable style={styles.mainButton} onPress={() => setIsSheetOpen(true)}>
        <Text style={styles.mainText}>Agendar chequeo</Text>
      </Pressable>
      <Pressable style={styles.iconButton}>
        <MaterialCommunityIcons
          name="stethoscope"
          size={22}
          color={colors.text}
        />
      </Pressable>
      <Pressable style={styles.iconButton}>
        <MaterialCommunityIcons
          name="file-download-outline"
          size={22}
          color={colors.text}
        />
      </Pressable>
      <Pressable style={styles.iconButton}>
        <Ionicons name="paper-plane-outline" size={20} color={colors.text} />
      </Pressable>
      <CheckupSheet
        visible={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  mainButton: {
    backgroundColor: colors.dark,
    borderRadius: 24,
    paddingHorizontal: 20,
    height: 44,
    justifyContent: "center",
  },
  mainText: { fontSize: 15, fontWeight: "bold", color: "#FFFFFF" },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.soft,
    justifyContent: "center",
    alignItems: "center",
  },
});
