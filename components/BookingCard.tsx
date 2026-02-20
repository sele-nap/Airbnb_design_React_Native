import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AirbnbColors, AirbnbFonts, BookingData } from '@/constants/airbnb';

type Props = {
  booking: BookingData;
};

function getMonthsAway(isoDate: string) {
  const now = new Date();
  const start = new Date(isoDate);
  return (start.getFullYear() - now.getFullYear()) * 12 + (start.getMonth() - now.getMonth());
}

function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
}

export default function BookingCard({ booking }: Props) {
  const monthsAway = getMonthsAway(booking.bookingStart);
  const dateRange = `${formatDate(booking.bookingStart)} – ${formatDate(booking.bookingEnd)}`;

  return (
    <View style={styles.shadow}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: booking.bookingImage }} style={styles.image} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {monthsAway > 0 ? `Dans ${monthsAway} mois` : 'Bientôt'}
            </Text>
          </View>
        </View>

        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>{booking.title}</Text>
          <Text style={styles.subtitle}>{dateRange} · Hôte : {booking.hostName}</Text>

          <View style={styles.hostRow}>
            <Image source={{ uri: booking.guestImage }} style={styles.avatar} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Afficher{'\n'}l'annonce</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: AirbnbColors.white,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.13)',
  },
  card: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    margin: 10,
  },
  image: {
    width: '100%',
    flex: 1,
    borderRadius: 16,
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: AirbnbColors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: AirbnbFonts.sm,
    fontFamily: AirbnbFonts.medium,
    color: AirbnbColors.textPrimary,
  },
  info: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: AirbnbFonts.bold,
    color: AirbnbColors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: AirbnbFonts.sm,
    fontFamily: AirbnbFonts.book,
    color: AirbnbColors.textSecondary,
  },
  hostRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#C8C8C8',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 999,
  },
  button: {
    backgroundColor: '#EFEFEF',
    borderRadius: 14,
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: AirbnbFonts.xs,
    fontFamily: AirbnbFonts.bold,
    color: AirbnbColors.textPrimary,
    textAlign: 'left',
  },
});
