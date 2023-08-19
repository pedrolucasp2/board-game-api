const db = require("../models");

const BoardGame = db.boardGame;
const Op = db.Sequelize.Op;

//create
//findAll
//findone
//update
//delete
//deleteAll
function validateGame(game) {
  const errors = [];

  if (!game.title || game.title.trim() === "") {
    errors.push("O titulo do jogo é obrigatório");
  }

  if (!game.description || game.description.trim().length < 30) {
    errors.push("A descrição deve ter ao menos 30 caracteres");
  }

  if (!game.recommendedPlayers || game.recommendedPlayers < 2) {
    errors.push("O mínimo de jogadores recomendados é 2");
  }

  if (!game.ageGroup || game.ageGroup < 0) {
    errors.push("A faixa etária mínima é 0");
  }

  if (errors.length > 0) {
    return { status: "error", errors };
  }

  return { status: "success", game };
}

exports.create = (req, res) => {
  const validationResult = validateGame(req.body);

  if (validationResult.status == "error") {
    res.status(400).send(validationResult);
    return;
  }

  const boardGame = {
    title: req.body.title,
    description: req.body.description,
    recommendedPlayers: req.body.recommendedPlayers,
    ageGroup: req.body.ageGroup,
  };

  BoardGame.create(boardGame)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.massage || "Algum erro ocorreu enquanto criavamos o jogo",
      });
    });
};

exports.findAll = (req, res) => {
 
  const title = req.query.title;
 

  let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  BoardGame.findAll({ where: condition })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu enquanto recuperavamos  os jogos.",
      });
    });
};

exports.findOne = (req, res) => {
  //busca usuario por id (find by id)
  const id = req.params.id;
  //pegando parametros pela url
  BoardGame.findByPk(id)
    //tratando
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao buscar jogo com id: " + id,
      });
    });
};

exports.update = (req, res) => {
  //att um usuario
  const id = req.params.id;
  let body = req.body;
  BoardGame.update(body, {
    where: { id: id },
  }).then((occ) => {
    if (occ == 1) {
      res.send({
        message: "O jogo foi atualizado com sucesso.",
      });
      return;
    }
    res.send({
      message: "Não foi possivel atualizar o jogo.",
    });
  });
};

exports.delete = (req, res) => {
  //deleta um usuario

  const id = req.params.id;

  BoardGame.destroy({
    where: {
      id: id,
    },
  }).then((occ) => {
    if (occ == 1) {
      res.send({
        message: "O jogo foi deleteado!",
      });
      return;
    }
    res.send({
      message: `Não foi possivel deletar jogo; o id${id} não foi encontrado`,
    });
  });
};

exports.deleteAll = (req, res) => {
  //deleta todos os usuarios

  BoardGame.destroy({
    where: {},
    truncate: false,
  })
    .then((count) => {
      res.send({
        message: `Aqui eu deletei: ${count}`,
      });
    })

    .catch((err) => {
      res.status(500).send({
        message: "Não foi possivel deletar os jogos",
      });
    });
};
