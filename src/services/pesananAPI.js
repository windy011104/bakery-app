import axios from 'axios';

const API_URL = 'https://dhfcykarscpafidcmuwm.supabase.co/rest/v1/pelanggan_loyal';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZmN5a2Fyc2NwYWZpZGNtdXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQ4ODksImV4cCI6MjA2NTUyMDg4OX0.nd_gvyNavdaiwgn3PbXCzhMAPOy149Xll6MaCoymyDY';

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
  Prefer: 'return=representation',
};

// Create pesanan
export const createPesanan = async (data) => {
  const response = await axios.post(API_URL, data, { headers });
  return response.data;
};

// Get semua pesanan
export const fetchPesanan = async () => {
  const response = await axios.get(API_URL, { headers });
  return response.data;
};
