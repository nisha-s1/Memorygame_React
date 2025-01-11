
export const fetchImages = async () => {
  const pages = [1, 2];  // Pages to fetch (you can add more pages if needed)
  const imageRequests = pages.map(page => 
    fetch(`https://api.thecatapi.com/v1/images/search?limit=8 &page=${page}`)
      .then((response) => response.json())
  );

  // Wait for all requests to finish
  const data = await Promise.all(imageRequests);

  // Combine the data from all pages and format it with ids
  const combinedImages = data.flat().map((item, index) => ({
    id: index,
    image: item.url
  }));

  return combinedImages;
};
