import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { colors } from "../constants/colors";

type Message = {
  from: "bot" | "me";
  text: string;
};
type Props = {
  visible: boolean;
  onClose: () => void;
};
export default function ChatSheet({ visible, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hola Taigo, vi que tu puntaje bajó 28% la semana pasada.",
    },
    { from: "bot", text: "¿Dormiste menos o cambió algo en tu rutina?" },
  ]);
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
          <View style={styles.header}>
            <Text style={styles.title}>Asistente Intelly</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.text} />
            </Pressable>
          </View>
          <ScrollView
            style={styles.messages}
            contentContainerStyle={styles.messagesContent}
          >
            {messages.map((message, index) => (
              <View
                key={index}
                style={
                  message.from === "me" ? styles.myBubble : styles.botBubble
                }
              >
                <Text
                  style={message.from === "me" ? styles.myText : styles.botText}
                >
                  {message.text}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0, 0, 0, 0.4)" },
  backdrop: { flex: 1 },
  sheet: {
    height: "70%",
    backgroundColor: colors.background,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
    paddingBottom: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold", color: colors.text },
  messages: { flex: 1 },
  messagesContent: { gap: 8, paddingVertical: 16 },
  botBubble: {
    alignSelf: "flex-start",
    maxWidth: "80%",
    backgroundColor: colors.pink,
    borderRadius: 18,
    borderTopLeftRadius: 4,
    padding: 12,
  },
  myBubble: {
    alignSelf: "flex-end",
    maxWidth: "80%",
    backgroundColor: colors.dark,
    borderRadius: 18,
    borderTopRightRadius: 4,
    padding: 12,
  },
  botText: { fontSize: 14, color: colors.text },
  myText: { fontSize: 14, color: "#FFFFFF" },
});
