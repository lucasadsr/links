import { colors } from "@/styles/colors";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  const backgroundColor = colors.gray[950];

  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor={backgroundColor} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor },
        }}
      />
    </SafeAreaProvider>
  );
}
