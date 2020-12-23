//import generator from "./gameGenerator"

// Array provide comment objects
// these one are build as :
// {id, gameId, username, email, text, createdDate}

const Comment = require('./commentSchema');

const all = async () => {
  return await Comment.find();
};

const allByGame = async (gameId) => {
  let listeComm;
  await Comment.find({gameId: gameId}, (err,comments) => {
    listeComm = comments;
  });
  return listeComm;
};

const count = async () => {
  let count;
  await Comment.find({}, (err, comments) => {
    count = comments.length;
  });
  return count;
};

const create = async({ gameId, username, email, text }) => {
  const comment = new Comment({
    _id: await count(),
    gameId: gameId,
    username: username || "Default Username",
    email: email || "default@default.com",
    text: text || "Default comment",
    createdDate: new Date(),
  });

  await comment.save();
  return allByGame(gameId);
};

export default {
  all,
  allByGame,
  create,
};
