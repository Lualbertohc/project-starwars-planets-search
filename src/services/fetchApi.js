const fetchAPI = async () => {
  const response = await fetch('https://swapi.dev/api/planets');
  const planets = await response.json();
  return planets;
};

export default fetchAPI;
