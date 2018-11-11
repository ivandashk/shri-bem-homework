import { compose } from '@bem-react/core';
import { CardDataBase as Base } from './CardDataBase';
import { CardDataButtons } from './CardDataButtons';
import { CardDataMeasurements } from './CardDataMeasurements';

export const CardData = compose(CardDataMeasurements, CardDataButtons)(Base);