import { View, Text, StyleSheet } from 'react-native';
import { List } from 'lucide-react-native';
import { AirbnbColors, AirbnbFonts, BookingData } from '@/constants/airbnb';

type Props = {
  booking: BookingData;
};

export default function TripsHeader({ booking }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Voyages</Text>
        <View style={styles.menuButton}>
          <List size={20} color={AirbnbColors.textPrimary} strokeWidth={2.5} />
        </View>
      </View>
      <Text style={styles.city}>{booking.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C8C8C8',
  },
  title: {
    fontSize: AirbnbFonts.xl,
    fontFamily: AirbnbFonts.bold,
    color: AirbnbColors.textPrimary,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  city: {
    fontSize: AirbnbFonts.md,
    fontFamily: AirbnbFonts.bold,
    color: AirbnbColors.textPrimary,
    paddingTop: 8,
    paddingBottom: 4,
  },
});
