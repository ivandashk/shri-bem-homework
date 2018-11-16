import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { App as AppCommon } from './App';

import { Footer } from "./Components/Footer/Footer@mobile"
import { Header } from "./Components/Header/Header@mobile"

const cnApp = cn("App");
const cnHeader = cn("Header");
const cnFooter = cn("Header");

const registry = new Registry({ id: cnApp() });

registry.set(cnHeader(), Header);
registry.set(cnFooter(), Footer);

export const AppMobile = withRegistry(registry)(AppCommon);