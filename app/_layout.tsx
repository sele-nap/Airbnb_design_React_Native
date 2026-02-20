import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'AirbnbCereal-Book': require('@/assets/fonts/AirbnbCereal_W_Bk.otf'),
    'AirbnbCereal-Medium': require('@/assets/fonts/AirbnbCereal_W_Md.otf'),
    'AirbnbCereal-Bold': require('@/assets/fonts/AirbnbCereal_W_Bd.otf'),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
