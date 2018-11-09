import { cn } from '@bem-react/classname';
import * as React from 'react';
import { IMeasurementProps } from "../../CardInterfaces"
import './Measurement.scss'

const cnMeasurement = cn('Measurement');

const Measurement:  React.SFC<IMeasurementProps> = ({ text, value }) => (
    <div className={ cnMeasurement()  }>
        <div className={ cnMeasurement("Text") }>{ text }</div>
        <div className={ cnMeasurement("Value") }>{ value }</div>
    </div>
);

export default Measurement;