import {
  getGames,
  getGamesByCategory,
  getGamesCount,
  getGame,
  putGame,
} from "./controller/games.js";

import { getCommentsByGame, putComment } from "./controller/comments.js";

import { getCategories } from "./controller/categories.js";

const routes = (app) => {
  app.route("/games").get(getGames);

  app.route("/games/category/:category").get(getGamesByCategory);

  app.route("/games/count").get(getGamesCount);

  app.route("/game/:id").get(getGame);

  app.route("/game").put(putGame);

  app.route("/game/:gameId/comments").get(getCommentsByGame);

  app.route("/game/:gameId/comment").put(putComment);

  app.route("/categories").get(getCategories);
};

export default routes;
