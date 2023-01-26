import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface IngredientAttributes {
  id: number;
  name: string;
  slug: string;
  description?: string;
  foodGroup?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface IngredientInput extends Optional<IngredientAttributes, 'id' | 'slug'> {}
export interface IngredientOuput extends Required<IngredientAttributes> {}