module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('addresses', {
    cep: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    logradouro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    complemento: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bairro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    localidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    uf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ibge: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ddd: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    siafi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('addresses'),
};
