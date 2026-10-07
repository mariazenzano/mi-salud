import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

const days = ["Lun 12", "Mar 13", "Mié 14", "Jue 15", "Vie 16"];
type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: (day: string) => void;
};
export default function CheckupSheet({ visible, onClose, onConfirm }: Props) {
  const [selected, setSelected] = useState("");
  function handleConfirm() {
    if (selected === "") return;
    onConfirm(selected);
    onClose();
  }
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <Text style={styles.title}>Agenda tu chequeo</Text>
          <Text style={styles.subtitle}>Elige el día que prefieras</Text>
          <View style={styles.days}>
            {days.map((day) => (
              <Pressable
                key={day}
                style={[styles.chip, day === selected && styles.chipSelected]}
                onPress={() => setSelected(day)}
              >
                <Text
                  style={[
                    styles.chipText,
                    day === selected && styles.chipTextSelected,
                  ]}
                >
                  {day}
                </Text>
              </Pressable>
            ))}
          </View>
          <Pressable style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirmar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0, 0, 0, 0.47)" },
  backdrop: { flex: 1 },
  sheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
    paddingBottom: 40,
    gap: 12,
  },
  handle: {
    alignSelf: "center",
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.soft,
  },
  title: { fontSize: 22, fontWeight: "bold", color: colors.text },
  subtitle: { fontSize: 14, color: colors.textMuted },
  days: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: {
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.soft,
    justifyContent: "center",
  },
  chipText: { fontSize: 14, fontWeight: "bold", color: colors.text },
  chipSelected: { backgroundColor: colors.green },
  chipTextSelected: { color: "#FFFFFF" },
  confirmButton: {
    backgroundColor: colors.pink,
    borderRadius: 24,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  confirmText: { fontSize: 16, fontWeight: "bold", color: colors.text },
});
