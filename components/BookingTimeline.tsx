import { View, Text, Image, StyleSheet } from 'react-native';
import { AirbnbColors, AirbnbFonts, BookingData } from '@/constants/airbnb';

type Props = {
  booking: BookingData;
};

function formatDay(isoDate: string) {
  const date = new Date(isoDate);
  return {
    label: date.toLocaleDateString('fr-FR', { weekday: 'short' }).replace('.', ''),
    number: date.getDate(),
  };
}

const checkinIcon = require('@/assets/images/door-open.png');
const checkoutIcon = require('@/assets/images/door-close.png');

export default function BookingTimeline({ booking }: Props) {
  const items = [
    { day: formatDay(booking.bookingStart), icon: checkinIcon, description: 'Arrivée à partir de 5:00 PM' },
    { day: formatDay(booking.bookingEnd), icon: checkoutIcon, description: 'Départ avant 11:00 AM' },
  ];

  return (
    <View style={styles.wrapper}>
      {items.map((item, index) => (
        <View key={index} style={styles.row}>
          <View style={styles.leftCol}>
            <Text style={styles.dayLabel}>{item.day.label}</Text>
            <View style={styles.dayCircle}>
              <Text style={styles.dayNumber}>{item.day.number}</Text>
            </View>
            {index === 0 && <View style={styles.connector} />}
          </View>
          <View style={styles.card}>
            <View style={styles.iconBox}>
              <Image source={item.icon} style={styles.icon} />
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 10,
  },
  leftCol: {
    width: 44,
    alignItems: 'center',
    paddingTop: 6,
  },
  dayLabel: {
    fontSize: AirbnbFonts.xs,
    fontWeight: AirbnbFonts.medium,
    color: AirbnbColors.textSecondary,
    marginBottom: 4,
  },
  dayCircle: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumber: {
    fontSize: AirbnbFonts.md,
    fontWeight: AirbnbFonts.bold,
    color: AirbnbColors.textPrimary,
  },
  connector: {
    width: 1.5,
    flex: 1,
    minHeight: 20,
    backgroundColor: '#D0D0D0',
    marginTop: 4,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AirbnbColors.white,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 8,
  },
  description: {
    flex: 1,
    fontSize: AirbnbFonts.base,
    fontWeight: AirbnbFonts.medium,
    color: AirbnbColors.textPrimary,
  },
});
