import { compose } from '@bem-react/core';
import { CardDetailsBase as Base } from './CardDetailsBase';
import { CardDetailsCritical } from './CardDetailsCritical';

export const CardDetails = compose(CardDetailsCritical)(Base);