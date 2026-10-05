import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
export default function HealthSystems() {
  return (
    <View style={styles.section}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Sistemas del cuerpo</Text>
        <View style={styles.filter}>
          <Text style={styles.filterText}>Todos</Text>
          <Ionicons name="chevron-down" size={14} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="dna" size={20} color={colors.text} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Sistema Vascular</Text>
          <View style={styles.track}>
            <View style={styles.fill} />
          </View>
        </View>
        <Text style={styles.value}>8.9</Text>
        <Text style={styles.max}>de 10</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  section: { gap: 14 },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 22, fontWeight: "bold", color: colors.text },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: colors.dark,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  filterText: { fontSize: 13, color: "#FFFFFF" },
  item: { flexDirection: "row", alignItems: "center", gap: 12 },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
  },
  info: { flex: 1, gap: 6 },
  name: { fontSize: 14, color: colors.text },
  track: { height: 12, borderRadius: 6, backgroundColor: colors.soft },
  fill: {
    width: "10%",
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.yellow,
  },
  value: { fontSize: 22, fontWeight: "bold", color: colors.text },
  max: { fontSize: 11, color: colors.textMuted },
});
