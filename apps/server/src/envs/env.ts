import { env as dev } from './env.dev';
import { env as prod } from './env.prod';

console.log(process.env.NODE_ENV);

const env = process.env.NODE_ENV === 'production' ? prod : dev;

export { env };
