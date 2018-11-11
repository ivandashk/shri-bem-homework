import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { App as AppCommon } from './App';

import { Header } from "./Components/Header/Header@mobile"

const registry = new Registry({ id: cn("App")() });

registry.set(cn("Header")(), Header);

export const AppMobile = withRegistry(registry)(AppCommon);