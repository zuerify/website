import { PrismaClient } from '@prisma/client';

const db = new PrismaClient({
	log: [
		{ emit: 'stdout', level: 'query' },
		{ emit: 'stdout', level: 'info' },
		{ emit: 'stdout', level: 'warn' },
		{ emit: 'stdout', level: 'error' }
	],
	errorFormat: 'pretty'
});

await db.$connect();

export { db };
