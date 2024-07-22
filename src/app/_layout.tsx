import { Stack } from "expo-router";

export default function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="sign-in/index"
        options={{
          title: "Sign In",
          gestureEnabled: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="(main)"
        options={{
          headerShown: false,
          gestureEnabled: false,
          fullScreenGestureEnabled: false,
          animation: "fade",
        }}
      />
    </Stack>
  );
}
