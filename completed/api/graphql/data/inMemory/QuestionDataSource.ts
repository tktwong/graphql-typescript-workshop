import { DataSource } from "apollo-datasource";
import { arrayRandomiser } from "../../../utils";
import { QuestionDataStore, QuestionModel } from "../types";

export class QuestionDataSource
  extends DataSource
  implements QuestionDataStore {
  #questions: QuestionModel[];
  constructor() {
    super();
    this.#questions = require("../../../../trivia.json");
  }
  getQuestion(id: string): Promise<QuestionModel> {
    return Promise.resolve(this.#questions.find((q) => q.id === id));
  }

  getQuestions(): Promise<QuestionModel[]> {
    return Promise.resolve(arrayRandomiser(this.#questions).slice(0, 10));
  }
}
