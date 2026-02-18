import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TripsHeader from '@/components/TripsHeader';
import BookingCard from '@/components/BookingCard';
import BookingTimeline from '@/components/BookingTimeline';
import BottomNavBar from '@/components/BottomNavBar';
import { bookingData, AirbnbColors } from '@/constants/airbnb';

export default function TripsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <TripsHeader booking={bookingData} />
      <View style={styles.content}>
        <BookingCard booking={bookingData} />
        <BookingTimeline booking={bookingData} />
      </View>
      <BottomNavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AirbnbColors.background,
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
