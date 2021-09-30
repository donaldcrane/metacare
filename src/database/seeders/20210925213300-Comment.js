module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Comments", [
    {
      id: "0a973445-7f4e-412d-a880-96a7f708cc62",
      comment: "dog.jpg",
      movieId: "1",
      commenterIp: "192.168.40.12",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "330547ae-d310-4b4b-a70e-a11eb9dde8f9",
      comment: "dog.jpg",
      movieId: "2",
      commenterIp: "192.168.40.32",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "c375c640-81ff-405a-89a8-460ea2f71756",
      comment: "dog.jpg",
      movieId: "3",
      commenterIp: "192.168.40.25",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "a430e505-937b-4908-9422-7aa57044e85c",
      comment: "dog.jpg",
      movieId: "4",
      commenterIp: "192.168.40.2",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
