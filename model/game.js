import generator from "./gameGenerator"

const Game = require('./gameSchema');

// Array provide game objects
// these one are build as :
// {id. title, author, bannerPath, name, grade, category, content, createdDate}
let list = [];

const generate = async () => {
  const games = await Game.find();
  if(games[0] == null){
    console.log('BD générée');
    list = await generator.generate();
    fillDB();
  }
}

const fillDB = async() => {
  for(let i = 0; i < list.length; ++i){
    const game = new Game({
      _id: list[i].id,
      title: list[i].title, 
      author: list[i].author,
      bannerPath: list[i].bannerPath,
      name: list[i].name,
      grade: list[i].grade,
      category: list[i].category,
      content: list[i].content,
      createdDate: list[i].createdDate,
      isPublic: list[i].isPublic
    }) 
    await game.save();
  }
}

const all = async () => {
  return await Game.find();
}

const allByCategory = async (category) => {
  let listCat;
  await Game.find({category: category}, (err,games) => {
    listCat = games;
  });
  return listCat;
}

const count = async() => {
  let count;
  await Game.find({}, (err, games) => {
    count = games.length;
  });
  return count;
}

const find = async (id) => {
  return await Game.findById(id);
}

const isExist = async (id) => {
  return id < await count();
}

const create = async ({title, author, bannerPath, name, grade, category, content, isPublic}) => {
  const game = new Game({
    _id: await count(),
    title: title || "Default Title",
    author: author || "Default author",
    bannerPath: bannerPath || generator.getDefaultImageUrl(count()),
    name: name || "Default Game",
    grade: grade || 0,
    category: category,
    content: content || "Default text",
    createdDate: new Date(),
    isPublic: isPublic,
  });
  await game.save();
  return game;
}

export default {
  generate,
  all,
  allByCategory,
  find,
  isExist,
  count,
  create
};