import { Knex } from 'knex';
import { KnexUtils } from '../middleware/knex.config';
import { Personne } from './personne.model';

const db: Knex = KnexUtils.connect();

export const findAll = async (): Promise<Personne[]> => {
	return db.select().from('personne');
};

export const find = async (id: number): Promise<Personne> => {
	return db.select().from('personne').where('id', id);
};

export const create = async (newPersonne: Personne): Promise<Personne> => {
	//	let id: number = db('personne').returning('id').insert(newPersonne).into('personne');
	db('personne').insert(newPersonne).into('personne');
	return find(2);
};
