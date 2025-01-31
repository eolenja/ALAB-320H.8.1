const API_BASE_URL = 'https://swapi.dev/api';

export async function getAllStarships() {
  try {
    const response = await fetch(`${API_BASE_URL}/starships/`);
    const data = await response.json();
    return data.results; // Return the array of starships
  } catch (error) {
    console.error('Error fetching starships:', error);
    return [];
  }
}


