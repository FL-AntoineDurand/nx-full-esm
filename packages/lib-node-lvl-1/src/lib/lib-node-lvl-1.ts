import { libNodeLvl2 } from '@caca2/lib-node-lvl-2';
import { libReactLvl2 } from '@caca2/lib-react-lvl-2';

export function libNodeLvl1(): string {
  return `[lib-node-lvl-1 [${libNodeLvl2()}] [${libReactLvl2()}]]`;
}
