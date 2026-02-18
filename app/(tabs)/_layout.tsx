import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none', position: 'absolute', height: 0 } }}>
      <Tabs.Screen name="index" />
    </Tabs>
  );
}
