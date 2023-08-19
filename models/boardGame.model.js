const { Sequelize, STRING } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
  const BoardGame = sequelize.define("boardGame", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    recommendedPlayers: {
      type: Sequelize.INTEGER,
    },
    ageGroup: {
      type: Sequelize.INTEGER,
    },
  });
  return BoardGame;
};
