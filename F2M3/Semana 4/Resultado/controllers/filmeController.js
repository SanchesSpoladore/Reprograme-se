const Filme = require('../models/filme');

module.exports = {
  async create(req, res) {
    try {
      const {
        titulo,
        categoria,
        genero,
        link_sinopse
      } = req.body;
      const filme = await Filme.create({
        titulo,
        categoria,
        genero,
        link_sinopse
      });
      res.status(201).json(filme);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal Server Error'
      });
    }
  },

  async getById(req, res) {
    try {
      const {
        id
      } = req.params;
      const filme = await Filme.findByPk(id);
      if (!filme) {
        return res.status(404).json({
          message: 'Filme not found'
        });
      }
      res.json(filme);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal Server Error'
      });
    }
  },

  async update(req, res) {
    try {
      const {
        id
      } = req.params;
      const {
        titulo,
        categoria,
        genero,
        link_sinopse
      } = req.body;
      const filme = await Filme.findByPk(id);
      if (!filme) {
        return res.status(404).json({
          message: 'Filme not found'
        });
      }
      await filme.update({
        titulo,
        categoria,
        genero,
        link_sinopse
      });
      res.json(filme);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal Server Error'
      });
    }
  },

  async delete(req, res) {
    try {
      const {
        id
      } = req.params;
      const filme = await Filme.findByPk(id);
      if (!filme) {
        return res.status(404).json({
          message: 'Filme not found'
        });
      }
      await filme.destroy();
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal Server Error'
      });
    }
  },

  async getAll(req, res) {
    try {
      const filmes = await Filme.findAll();
      res.json(filmes);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal Server Error'
      });
    }
  }
};