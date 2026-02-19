export const AirbnbColors = {
  primary: '#E31C5D',

  textPrimary: '#000000',
  textSecondary: '#6A6A6A',

  white: '#FFFFFF',
  lightGray: '#DDDDDD',

  tabInactive: '#6A6A6A',
  tabActive: '#E31C5D',

  background: '#FFFFFF',
};

export const AirbnbFonts = {
  bold: 'Inter_700Bold',

  xs: 10,
  sm: 12,
  base: 14,
  md: 16,
  xl: 22,
};

export interface BookingData {
  city: string;
  title: string;
  hostName: string;
  bookingStart: string;
  bookingEnd: string;
  bookingImage: string;
  guestImage: string;
}

export const bookingData: BookingData = {
  city: 'Montréal',
  title: 'Appartement • Montréal',
  hostName: 'Angelo',
  bookingStart: '2026-05-26T13:00:00.000Z',
  bookingEnd: '2026-06-04T09:00:00.000Z',
  bookingImage: 'https://i.goopics.net/4iiedo.jpg',
  guestImage: 'https://i.goopics.net/j2kv1t.jpg',
};
