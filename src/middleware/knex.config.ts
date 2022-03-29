import knex, { Knex } from 'knex';

export class KnexUtils {
	public static connect(): Knex {
		const config = {
			client: 'pg',
			version: '7.2',
			connection: {
				host: 'localhost',
				port: 5432,
				user: 'postgres',
				password: 'etienne',
				database: 'ma_database',
			},
		};
		let knex_conn: Knex = knex(config);
		return knex_conn;
	}
}
