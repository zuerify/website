import { PrismaClient } from '@prisma/client';

const db = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
	errorFormat: 'pretty'
});

export { db };
