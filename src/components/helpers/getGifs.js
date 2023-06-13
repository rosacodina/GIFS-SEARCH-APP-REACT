
const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=90vV5rfRjkRQWjIm01xIQ16hxQ6hIuQY&q=${ category }&limit=20`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
};

export {getGifs}