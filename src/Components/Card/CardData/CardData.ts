import { compose } from '@bem-react/core';
import { CardDataBase as Base } from './CardDataBase';
import { CardDataButtons } from './CardDataButtons';
import { CardDataMeasurements } from './CardDataMeasurements';
import { CardDataMusic } from './CardDataMusic';

export const CardData = compose(
    CardDataMeasurements, 
    CardDataButtons,
    CardDataMusic
)(Base);