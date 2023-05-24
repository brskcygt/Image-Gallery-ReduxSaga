const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=9`;

export const fetchImages = async () => {
  const response = await fetch(API_ENDPOINT);
    const json = await response.json();
    return json.photos.photo.map(
        ({ farm, server, id, secret }) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    );
};