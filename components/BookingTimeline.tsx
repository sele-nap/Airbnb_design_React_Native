import { View, Text, Image, StyleSheet } from 'react-native';
import { AirbnbColors, AirbnbFonts, BookingData } from '@/constants/airbnb';

type Props = {
  booking: BookingData;
};

function formatDay(isoDate: string) {
  const date = new Date(isoDate);
  return {
    label: date.toLocaleDateString('fr-FR', { weekday: 'short' }),
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
      <View style={styles.connector} />
      {items.map((item, index) => (
        <View key={index} style={styles.row}>
          <View style={styles.leftCol}>
            <Text style={styles.dayLabel}>{item.day.label}</Text>
            <View style={styles.dayCircle}>
              <Text style={styles.dayNumber}>{item.day.number}</Text>
            </View>
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
    gap: 8,
    position: 'relative',
    marginLeft: -16,
    paddingLeft: 16,
  },
  connector: {
    position: 'absolute',
    width: 1.5,
    top: 69,
    bottom: 69,
    left: 31,
    backgroundColor: '#EFEFEF',
    zIndex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  leftCol: {
    width: 30,
    alignItems: 'center',
    zIndex: 2,
  },
  dayLabel: {
    fontSize: AirbnbFonts.xs,
    fontFamily: AirbnbFonts.bold,
    color: AirbnbColors.textPrimary,
    marginBottom: 4,
  },
  dayCircle: {
    width: 30,
    height: 30,
    borderRadius: 999,
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumber: {
    fontSize: AirbnbFonts.base,
    fontFamily: AirbnbFonts.bold,
    color: AirbnbColors.textSecondary,
    includeFontPadding: false,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AirbnbColors.white,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 12,
    boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.10)',
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 58,
    height: 58,
    borderRadius: 8,
  },
  description: {
    flex: 1,
    fontSize: AirbnbFonts.base,
    fontFamily: AirbnbFonts.medium,
    color: AirbnbColors.textPrimary,
  },
});
