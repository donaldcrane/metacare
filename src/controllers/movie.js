import axios from "axios";
import _ from "lodash";
import database from "../models";

/**
 * @class AdmintransactionController
 * @description create transaction, get all transactions, get a transaction, delete a transaction
 * @exports AdminController
 */
export default class MovieController {
  /**
     * @param {object} req - The user request object
     * @param {object} res - The user response object
     * @returns {object} Success message
     */
  static async getMovies(req, res) {
    try {
      const movies = await axios.get("https://swapi.dev/api/films/");
      if (!movies) return res.status(404).json({ status: 404, error: "Sorry Star wars movie does not exist." });
      let data = {};
      const { results } = movies.data;
      data = (results).map(movie => (
        {
          title: movie.title,
          opening_crawl: movie.opening_crawl,
          release_date: movie.release_date,
        }
      ));
      const result = data.sort((a, b) => a.release_date - b.release_date);
      return res.status(200).json({
        status: 200,
        message: "Movie fetched successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: error.message });
    }
  }

  /**
     * @param {object} req - The user request object
     * @param {object} res - The user response object
     * @returns {object} Success message
     */
  static async fetchCharacter(req, res) {
    try {
      const peoples = await axios.get("https://swapi.dev/api/people/");
      const { results } = peoples.data;
      const result = results.sort((a, b) => a.height - b.height);
      let height = 0;
      for (let i = 0; i < results.length; i++) {
        height += parseInt(results[i].height, 10);
      }
      const feet = height / 34;
      const inches = height / 24.53;
      return res.status(200).json({
        status: 200,
        message: "Character fetched successfully.",
        data: result,

        meta: {
          totalCharacter: result.length,
          totalHeight: `Total height is ${height} Cm ${feet} Feet, ${inches} Inches`
        }
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }
}
