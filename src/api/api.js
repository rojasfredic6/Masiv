import trae from "trae";

const getComic = (data) => {
  const { id } = data;
  return trae.post("http://localhost:1337/comics", {
    id,
  });
};

export { getComic };
