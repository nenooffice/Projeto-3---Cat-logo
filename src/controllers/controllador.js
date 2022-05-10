import {
  connection
} from '../database/connection.js';

import {
  filmes
} from '../models/models.js';

let message = '';
let type = '';



export const getIndex = async (req, res) => {
  try {
    const listaFilmes = await filmes.findAll();
    console.log(listaFilmes);
    res.render('index.ejs', {
      listaFilmes,
      message,
      type
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const filmesDetalhes = await filmes.findByPk(req.params.id);
    res.render('detalhes.ejs', {
      filmesDetalhes
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDeletar = async (req, res) => {
  try {
    await filmes.destroy({
      where: {
        id: req.params.id
      }
    });
    message = 'Filme deletado com sucesso!';
    type = 'success';
    res.redirect('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const getCriar = (req, res) => {
  res.render('criar.ejs');
}

export const postCriar = async (req, res) => {
  const { titulo, ano, diretor, genero, imagem} = req.body;
  try {
    if (!titulo || !ano || !diretor || !genero || !imagem ) {
      message = 'Preencha todos os campos!';
      type = 'danger';
    } else {
      await filmes.create({
        titulo,
        ano,
        genero,
        diretor,
        imagem,
      });
      message = "Filme cadastrado com sucesso!";
      type = "success";
      res.redirect('/');
    }
  } catch (error) {
    res.render(error.message);
  }
}

export const getEditar = async (req, res) => {
  try {
    const editando = await filmes.findByPk(req.params.id);
    res.render('editar.ejs', {
      editando
    });
  } catch (error) {
    console.log(error.message);
  }
}

export const postEditar = async (req, res) => {
  try {
  const { titulo, ano, diretor, genero, capa } = req.body;
  await filmes.update({
    titulo: titulo,
    ano: ano,
    diretor: diretor,
    genero: genero,
    capa: capa,
  }, {
    where: {
      id: req.params.id
    }
  });
  message = "Filme editado com sucesso!";
  type = "success";
  res.redirect('/');
  } catch (error) {
    console.log(error.message);
  }
}





