//Base URL
const base_url = 'https://api.rawg.io/api/';

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    return month < 10 ? `0${month}` : month;
}

const getCurrentDay = () => {
    const day = new Date().getDay();
    return day < 10 ? `0${day}` : day;
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular/upcoming/new games
// const popular_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordring=-rating&page_size=20`;
// const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// const new_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

// simulating pagination
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page=1&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page=2&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;
// Game details
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_RAWG_API_KEY}`;
// Game screenshots
export const gameScreenshotsUrl = (game_id) => `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API_KEY}`;
// Searched games
export const searchedGameUrl = (game_name) => `${base_url}games?key=${process.env.REACT_APP_RAWG_API_KEY}&search=${game_name}&page_size=10`;