import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "../constants/colors";

export default function ScoreRing() {
  return (
    <View style={styles.ring}>
      {/* Escudo */}
      <View style={styles.shield}>
        <MaterialCommunityIcons
          name="shield-check-outline"
          size={22}
          color={colors.text}
          style={styles.shieldIcon}
        />
      </View>

      {/* Riñón */}
      <View style={styles.kidney}>
        <MaterialCommunityIcons
          name="water-outline"
          size={20}
          color={colors.text}
        />
      </View>

      {/* Estómago */}
      <View style={styles.stomach}>
        <MaterialCommunityIcons
          name="stomach"
          size={22}
          color={colors.text}
          style={styles.stomachIcon}
        />
      </View>

      {/* Corazón */}
      <View style={styles.heart}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={22}
          color={colors.text}
          style={styles.heartIcon}
        />
      </View>

      {/* Cerebro */}
      <View style={styles.brain}>
        <MaterialCommunityIcons
          name="brain"
          size={22}
          color={colors.text}
          style={styles.brainIcon}
        />
      </View>

      {/* Pulmones */}
      <View style={styles.lungs}>
        <MaterialCommunityIcons name="lungs" size={22} color={colors.text} />
      </View>

      {/* ADN */}
      <View style={styles.dna}>
        <MaterialCommunityIcons
          name="dna"
          size={22}
          color={colors.text}
          style={styles.dnaIcon}
        />
      </View>

      {/* Hueso */}
      <View style={styles.bone}>
        <MaterialCommunityIcons name="bone" size={20} color={colors.text} />
      </View>

      {/* Centro */}
      <View style={styles.center}>
        <Text style={styles.score}>9.1</Text>

        <View style={styles.labelRow}>
          <Text style={styles.label}>tu puntaje de salud</Text>

          <Ionicons
            name="information-circle-outline"
            size={14}
            color={colors.textMuted}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ring: {
    width: 280,
    height: 280,
    alignSelf: "center",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  score: {
    fontSize: 72,
    fontWeight: "bold",
    color: colors.text,
  },

  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  label: {
    fontSize: 13,
    color: colors.textMuted,
  },

  shield: {
    position: "absolute",
    left: 147,
    top: 26,
    width: 100,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "32deg" }],
  },

  shieldIcon: {
    transform: [{ rotate: "-32deg" }],
  },

  kidney: {
    position: "absolute",
    left: 105,
    top: 13,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.pink,
    justifyContent: "center",
    alignItems: "center",
  },

  stomach: {
    position: "absolute",
    left: 213,
    top: 114,
    width: 70,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "88deg" }],
  },

  stomachIcon: {
    transform: [{ rotate: "-88deg" }],
  },

  heart: {
    position: "absolute",
    left: 154,
    top: 201,
    width: 110,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.pink,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "-40deg" }],
  },

  heartIcon: {
    transform: [{ rotate: "40deg" }],
  },

  brain: {
    position: "absolute",
    left: 34,
    top: 213,
    width: 110,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "28deg" }],
  },

  brainIcon: {
    transform: [{ rotate: "-28deg" }],
  },

  lungs: {
    position: "absolute",
    left: 14,
    top: 146,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
  },

  dna: {
    position: "absolute",
    left: 2,
    top: 72,
    width: 80,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "-65deg" }],
  },

  dnaIcon: {
    transform: [{ rotate: "65deg" }],
  },

  bone: {
    position: "absolute",
    left: 60,
    top: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
});
