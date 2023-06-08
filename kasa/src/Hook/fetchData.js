export async function fetchData(id) {
  try {
    const response = await fetch('/kasa.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    const accommodation = jsonData.find((item) => item.id === id);
    return accommodation;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    return null;
  }
}
