export const AirbnbColors = {
  primary: '#FF385C',

  textPrimary: '#222222',
  textSecondary: '#717171',

  white: '#FFFFFF',
  lightGray: '#DDDDDD',
  subtleGray: '#F7F7F7',

  tabInactive: '#6A6A6A',
  tabActive: '#FF385C',

  background: '#FFFFFF',
  border: '#EBEBEB',
};

export const AirbnbFonts = {
  regular: '400' as const,
  medium: '500' as const,
  semiBold: '600' as const,
  bold: '700' as const,

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
