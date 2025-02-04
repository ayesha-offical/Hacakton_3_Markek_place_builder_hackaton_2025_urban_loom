import { type SchemaTypeDefinition } from 'sanity'

import {categoryType} from './categoryType'

import { salesService } from './sale'
import { productType } from './ProductType'
import { orderType } from './orderType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ categoryType, salesService,productType,orderType],
}