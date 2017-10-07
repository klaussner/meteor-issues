import { foo } from './foo.js';
// import { foo } from './foo.re-export.js';

export function bar() {
  console.log(!!foo);
}
