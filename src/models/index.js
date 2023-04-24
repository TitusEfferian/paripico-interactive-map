// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ParipicoCircle, ParipicoCircleSectionChild } = initSchema(schema);

export {
  ParipicoCircle,
  ParipicoCircleSectionChild
};