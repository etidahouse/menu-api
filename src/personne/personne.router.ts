import express, { Request, Response } from 'express';
import { Personne } from './personne.model';
import * as PersonneService from './personne.service';

export const personneRouter = express.Router();

// GET personnes

personneRouter.get('/', async (req: Request, res: Response) => {
	try {
		const personne: Personne[] = await PersonneService.findAll();
		res.status(200).send(personne);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

// GET personnes/:id

personneRouter.get('/:id', async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id, 10);

	try {
		const personne: Personne = await PersonneService.find(id);

		if (personne) {
			return res.status(200).send(personne);
		}

		res.status(404).send('personne not found');
	} catch (e) {
		res.status(500).send(e.message);
	}
});

// POST personnes

personneRouter.post('/', async (req: Request, res: Response) => {
	try {
		const personne: Personne = req.body;

		const newItem = await PersonneService.create(personne);

		res.status(201).json(newItem);
	} catch (e) {
		res.status(500).send(e.message);
	}
});
