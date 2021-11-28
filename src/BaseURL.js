let token = "104da59e492c4b12b219b40df1c319c4";

let BaseUrl = "https://api.rawg.io/api/games?key=" + token;

function formatDate(date) {
  let d = new Date(date || new Date().getTime());

  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

  return `${ye}-${mo}-${da}`;
}

const lastYear = new Date().getFullYear();
const nextYear = new Date().getFullYear() + 2;

export const PopularGamesUrl = `${BaseUrl}&dates=${formatDate(
  `${lastYear}-01-01`,
)},${formatDate()},&page_size=10`;
export const newGamesUrl = `${BaseUrl}&dates=${formatDate(
  `${nextYear}-01-01`,
)},${formatDate()},&ordering=added&page_size=10`;

export const FeaturedGamesUrl = `${BaseUrl}&dates=${formatDate()},${formatDate(
  `${nextYear}-09-01`,
)},&ordering=-created&page_size=10`;

BaseUrl = "https://api.rawg.io/api/games";

export const GamesDetailsUrl = (id) => `${BaseUrl}/${id}?key=${token}`;

export const GamesScreenShotsUrl = (id) =>
  `${BaseUrl}/${id}/screenshots?key=${token}`;
export const GamesSearchUrl = (search) =>
  `${BaseUrl}?key=${token}&search=${search}`;