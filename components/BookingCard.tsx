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
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: AirbnbColors.white,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 220,
    borderRadius: 16,
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: AirbnbColors.white,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: AirbnbFonts.base,
    fontWeight: AirbnbFonts.semiBold,
    color: AirbnbColors.textPrimary,
  },
  info: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: AirbnbFonts.bold,
    color: AirbnbColors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: AirbnbFonts.base,
    color: AirbnbColors.textSecondary,
  },
  hostRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E0E0E0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 999,
  },
  button: {
    backgroundColor: '#EFEFEF',
    borderRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: AirbnbFonts.base,
    fontWeight: AirbnbFonts.semiBold,
    color: AirbnbColors.textPrimary,
    textAlign: 'center',
  },
});
