import { compose } from '@bem-react/core';
import { CardDataBase as Base } from './CardDataBase';
import { CardDataMeasurements } from './CardDataMeasurements';

export const CardData = compose(CardDataMeasurements)(Base);