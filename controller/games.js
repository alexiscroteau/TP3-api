import { ErrorCustomResponse, SuccessCustomResponse } from "../lib/customResponse"
import Game from "../model/game"
import Category from "../model/category"

export async function getGames(req, res) {
  res.send(new SuccessCustomResponse( 200, "Games list received.", await Game.all() ));
}

export async function getGamesByCategory(req, res) {
  const {category} = req.params;

  if (!Category.isExist(category)) {
    res.status(404).send(
      new ErrorCustomResponse(404, `Error get all games by cagetory - category ${category} doesn't exist`)
    );
    return;
  }
  
  res.send(new SuccessCustomResponse(200, "Games list received.", await Game.allByCategory(category)));
}

export function getGamesCount(req, res) {
  res.send(new SuccessCustomResponse( 200, "Games count received.", {count : Game.count()} ));
}

export async function getGame(req, res) {
  const {id} = req.params
  const game = await Game.find(id);

  if(!game) {
    res.status(404).send(new ErrorCustomResponse(404, `Game ${id} not found`));
    return;
  }

  res.send(new SuccessCustomResponse( 
    200, `Game ${id} received.`, game)
  )
}

export async function putGame(req, res) {
  const {category} = req.body;

  if (!Category.isExist(category)) {
    res.status(404).send(
      new ErrorCustomResponse(404, `Error create game - category ${category} doesn't exist`)
    );
    return;
  }

  const gameCreated = Game.create(req.body);
  res.send(gameCreated)
}