import {
  connection
} from '../database/connection.js';

import {
  filmes
} from '../models/models.js';

export const getIndex = async (req, res) => {
  try {
    const listaFilmes = await filmes.findAll();
    console.log(listaFilmes);
    res.render('index.ejs', {
      listaFilmes
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
    res.redirect('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const getCriar = (req, res) => {
  res.render('criar.ejs');
}

export const postCriar = async (req, res) => {
  const { titulo, ano, diretor, genero, capa, iframe } = req.body;
  try {
    if (!nome || !ano || !diretor || !genero || !capa || !iframe) {
      res.send('Preencha todos os campos!');
    } else {
      await filmes.create({
        titulo,
        ano,
        diretor,
        genero,
        capa,
        iframe
      });
      res.render('criar.ejs');
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
  const { titulo, ano, diretor, genero, capa, iframe } = req.body;
  await filmes.update({
    titulo: titulo,
    ano: ano,
    diretor: diretor,
    genero: genero,
    capa: capa,
    iframe: iframe
  }, {
    where: {
      id: req.params.id
    }
  });
  res.redirect('/');
  } catch (error) {
    console.log(error.message);
  }
}





