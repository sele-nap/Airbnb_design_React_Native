import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none', position: 'absolute', height: 0 } }}>
      <Tabs.Screen name="index" />
    </Tabs>
  );
}
