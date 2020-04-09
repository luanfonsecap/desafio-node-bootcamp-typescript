import { Router } from "express";
import { celebrate } from "celebrate";

const routes = Router();

import RepositoriesController from "./controllers/RepositoriesController";
import checkId from "./middlewares/checkId";

import repositoriesValidator from "./validators/repositoriesValidator";

routes.get("/repositories", RepositoriesController.index);

routes.post(
  "/repositories",
  celebrate(repositoriesValidator.store),
  RepositoriesController.store
);

routes.put(
  "/repositories/:id",
  celebrate(repositoriesValidator.update),
  checkId,
  RepositoriesController.update
);

routes.delete("/repositories/:id", checkId, RepositoriesController.destroy);

routes.post("/repositories/:id/like", checkId, RepositoriesController.like);

export default routes;
