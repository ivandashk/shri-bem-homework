import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { App as AppCommon } from './App';

import { Footer } from "./Components/Footer/Footer@mobile"
import { Header } from "./Components/Header/Header@mobile"

const registry = new Registry({ id: cn("App")() });

registry.set(cn("Header")(), Header);
registry.set(cn("Footer")(), Footer);

export const AppMobile = withRegistry(registry)(AppCommon);