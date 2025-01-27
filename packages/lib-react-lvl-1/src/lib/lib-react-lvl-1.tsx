import { libReactLvl2, LibReactLvl2 } from '@caca2/lib-react-lvl-2';

import { libNodeLvl2 } from '@caca2/lib-node-lvl-2';

import styles from './lib-react-lvl-1.module.scss';

export function LibReactLvl1() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibReactLvl1!</h1>
      <LibReactLvl2 />
      <p>{libNodeLvl2()}</p>
    </div>
  );
}

export default LibReactLvl1;

export function function_from_lib_react_lvl_1(): string {
  return `[lib-react-lvl-1 [${libNodeLvl2()}] [${libReactLvl2()}]]`;
}
