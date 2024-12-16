import User from '../models/User.model.js';

class UsersController {
  async listAll(req, res) {
    try {
      const allUsers = await User.find({});
      res.status(200).json(allUsers);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async createUser(req, res) {
    try {
      await User.create(req.body);
      res
        .status(200)
        .json({
          message: `User ${req.body.first_name} ${req.body.last_name} created on database successfully!`,
        });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndUpdate(id, req.body);

      const updatedUser = await User.findById(id);
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async deleteUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);

      if (!user) {
        return res
          .status(404)
          .json({
            message:
              `No user profile associated with the inserted id: "${id}" on the database!`,
          });
      }

      res
        .status(200)
        .json({ message: `User ${req.body.first_name} ${req.body.last_name} deleted from the database successfully!` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new UsersController();
