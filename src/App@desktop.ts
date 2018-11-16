import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { App as AppCommon } from './App';

import { Footer } from "./Components/Footer/Footer@desktop"
import { Header } from "./Components/Header/Header@desktop"

const cnApp = cn("App");
const cnHeader = cn("Header");
const cnFooter = cn("Footer");

const registry = new Registry({ id: cnApp() });

registry.set(cnHeader(), Header);
registry.set(cnFooter(), Footer);

export const AppDesktop = withRegistry(registry)(AppCommon);