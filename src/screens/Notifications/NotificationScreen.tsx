import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation/AppStack";
import API from "../../services/api";


export default function NotificationScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [preferences, setPreferences] = useState({
      wash_reminders: true,
      subscription_alerts: true,
      payment_updates: true,
      promotional_offers: false,
    });

    useEffect(() => {
  loadPreferences();
}, []);

const loadPreferences = async () => {
  try {
    setLoading(true);

    const response = await API.get(
      '/customer/notification-preferences'
    );

    setPreferences(response.data.preferences);
  } catch (error) {
    console.log('NOTIFICATION LOAD ERROR:', error);
  } finally {
    setLoading(false);
  }
};
const togglePreference = async (
  key: keyof typeof preferences
) => {
  const updated = {
    ...preferences,
    [key]: !preferences[key],
  };

  setPreferences(updated);

  try {
    setSaving(true);

    await API.put(
      '/customer/notification-preferences',
      updated
    );
  } catch (error: any) {
  console.log(
    'NOTIFICATION SAVE ERROR:',
    error?.response?.data || error.message
  );

  setPreferences(preferences);

  Alert.alert(
    'Error',
    'Failed to update notification preferences.'
  );
} finally {
    setSaving(false);
  }
};

if (loading) {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator
        size="large"
        color="#1565C0"
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="arrow-left"
            size={24}
            color="#111827"
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          Notifications
        </Text>

        <View style={{ width: 24 }} />
      </View>

      {/* Buttons */}

     <ScrollView
  contentContainerStyle={styles.content}
  showsVerticalScrollIndicator={false}>

  <Text style={styles.subtitle}>
    Manage how SparkleWash keeps you updated.
  </Text>

  <View style={styles.card}>

    <NotificationToggle
      icon="bell-ring-outline"
      title="Wash Reminders"
      subtitle="Get reminders before your scheduled wash."
      enabled={preferences.wash_reminders}
      onPress={() =>
        togglePreference('wash_reminders')
      }
    />

    <NotificationToggle
      icon="calendar-alert-outline"
      title="Subscription Alerts"
      subtitle="Renewal and expiry reminders."
      enabled={preferences.subscription_alerts}
      onPress={() =>
        togglePreference('subscription_alerts')
      }
    />

    <NotificationToggle
      icon="credit-card-outline"
      title="Payment Updates"
      subtitle="Payment success and invoice alerts."
      enabled={preferences.payment_updates}
      onPress={() =>
        togglePreference('payment_updates')
      }
    />

    <NotificationToggle
      icon="tag-outline"
      title="Promotional Offers"
      subtitle="Discounts and special offers."
      enabled={preferences.promotional_offers}
      onPress={() =>
        togglePreference('promotional_offers')
      }
    />
  </View>

  {saving && (
    <View style={styles.savingBox}>
      <ActivityIndicator size="small" color="#1565C0" />
      <Text style={styles.savingText}>
        Saving preferences...
      </Text>
    </View>
  )}
</ScrollView>
    </SafeAreaView>
  );
}

function NotificationToggle({
  icon,
  title,
  subtitle,
  enabled,
  onPress,
}: {
  icon: string;
  title: string;
  subtitle: string;
  enabled: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.85}
      onPress={onPress}>

      <View style={styles.iconBox}>
        <MaterialIcons
          name={icon as any}
          size={24}
          color="#1565C0"
        />
      </View>

      <View style={{ flex: 1, marginLeft: 14 }}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>

      <MaterialIcons
        name={
          enabled
            ? ('toggle-switch' as any)
            : ('toggle-switch-off-outline' as any)
        }
        size={42}
        color={enabled ? '#16A34A' : '#9CA3AF'}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: "#FFF",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 16,
  },

  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 2,
  },

  actionText: {
    marginLeft: 8,
    color: "#2563EB",
    fontWeight: "600",
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  subtitle: {
  marginBottom: 24,
  fontSize: 15,
  color: '#6B7280',
  lineHeight: 22,
},

card: {
  backgroundColor: '#FFFFFF',
  borderRadius: 22,
  paddingVertical: 6,
  borderWidth: 1,
  borderColor: '#E5E7EB',
  shadowColor: '#000',
  shadowOpacity: 0.04,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 3 },
  elevation: 2,
},

item: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingVertical: 18,
  borderBottomWidth: 1,
  borderBottomColor: '#F3F4F6',
},

iconBox: {
  width: 48,
  height: 48,
  borderRadius: 14,
  backgroundColor: '#E8F1FD',
  justifyContent: 'center',
  alignItems: 'center',
},

itemTitle: {
  fontSize: 16,
  fontWeight: '700',
  color: '#111827',
},

itemSubtitle: {
  marginTop: 4,
  fontSize: 13,
  color: '#6B7280',
  lineHeight: 18,
},

savingBox: {
  marginTop: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: 14,
  paddingVertical: 12,
  borderWidth: 1,
  borderColor: '#E5E7EB',
},

savingText: {
  marginLeft: 10,
  fontSize: 14,
  color: '#1565C0',
  fontWeight: '600',
},
});