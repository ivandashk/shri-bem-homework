import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { App as AppCommon } from './App';

import { Footer } from "./Components/Footer/Footer@desktop"
import { Header } from "./Components/Header/Header@desktop"

const registry = new Registry({ id: cn("App")() });

registry.set(cn("Header")(), Header);
registry.set(cn("Footer")(), Footer);

export const AppDesktop = withRegistry(registry)(AppCommon);