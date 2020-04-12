import { Request, Response } from 'express'
import { uuid } from 'uuidv4'

interface Repository {
  id: string;
  title: string;
  url: string;
  techs: string[];
  likes: number;
}

let repositories: Array<Repository> = []

class RepositoriesController {
	public index (req: Request, res: Response): Response {
		return res.json(repositories)
	}

	public store (req: Request, res: Response): Response {
		const { title, url, techs } = req.body

		const repository: Repository = {
			id: uuid(),
			title,
			url,
			techs,
			likes: 0
		}

		repositories.push(repository)

		return res.json(repository)
	}

	public update (req: Request, res: Response): Response {
		const { id } = req.params
		const { title, url, techs } = req.body

		const index = repositories.findIndex((repo) => repo.id === id)

		repositories[index] = {
			id,
			title,
			url,
			techs,
			likes: repositories[index].likes
		}

		return res.json(repositories[index])
	}

	public destroy (req: Request, res: Response): Response {
		const { id } = req.params

		repositories = repositories.filter((repo) => repo.id !== id)

		return res.status(204).send()
	}

	public like (req: Request, res: Response): Response {
		const { id } = req.params

		const repository = repositories.find((repo) => repo.id === id)

		if (repository) {
			repository.likes++
		} else {
			return res.status(400).json({ error: 'Repository does not exist' })
		}

		return res.json({ likes: repository.likes })
	}
}

export default new RepositoriesController()
