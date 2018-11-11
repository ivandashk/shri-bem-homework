import { cn } from '@bem-react/classname';
import * as React from 'react';
import './Button.scss';

const cnButton = cn('Button');

interface IButtonProps {
    text: string;
    accent: boolean;
}

const Button:  React.SFC<IButtonProps> = ({ text, accent }) => (
    <div className={ cnButton({ accent }) }>{ text }</div>
);

export default Button;