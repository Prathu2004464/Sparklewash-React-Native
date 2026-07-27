import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface AddPaymentBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onSelectCard: () => void;
  onSelectUPI: () => void;
}

export default function AddPaymentBottomSheet({
  visible,
  onClose,
  onSelectCard,
  onSelectUPI,
}: AddPaymentBottomSheetProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.sheet}>
              <View style={styles.handle} />

              <Text style={styles.title}>
                Add Payment Method
              </Text>

              <TouchableOpacity
                style={styles.option}
                onPress={onSelectCard}
              >
                <View style={styles.iconContainer}>
                  <MaterialIcons
                    name="credit-card-outline"
                    size={24}
                    color="#2563EB"
                  />
                </View>

                <View style={styles.textContainer}>
                  <Text style={styles.optionTitle}>
                    Debit / Credit Card
                  </Text>
                  <Text style={styles.optionSubtitle}>
                    Visa, Mastercard, RuPay
                  </Text>
                </View>

                <MaterialIcons
                  name="chevron-right"
                  size={22}
                  color="#9CA3AF"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.option}
                onPress={onSelectUPI}
              >
                <View style={styles.iconContainer}>
                  <MaterialIcons
                    name="wallet-outline"
                    size={24}
                    color="#2563EB"
                  />
                </View>

                <View style={styles.textContainer}>
                  <Text style={styles.optionTitle}>
                    UPI
                  </Text>
                  <Text style={styles.optionSubtitle}>
                    Pay using your UPI ID
                  </Text>
                </View>

                <MaterialIcons
                  name="chevron-right"
                  size={22}
                  color="#9CA3AF"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelText}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
  },

  sheet: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
  },

  handle: {
    width: 50,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#D1D5DB",
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 24,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  textContainer: {
    flex: 1,
  },

  optionTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111827",
  },

  optionSubtitle: {
    marginTop: 2,
    color: "#6B7280",
    fontSize: 14,
  },

  cancelButton: {
    marginTop: 20,
    backgroundColor: "#F3F4F6",
    height: 54,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  cancelText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
});