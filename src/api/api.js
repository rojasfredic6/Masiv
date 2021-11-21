import trae from "trae";

const getComic = (data) => {
  const { id } = data;
  return trae.post("https://agile-shore-94623.herokuapp.com/comics", {
    id,
  });
};

const comicCount = () => {
  return trae.get("https://agile-shore-94623.herokuapp.com/comicscount");
};

export { getComic, comicCount };
