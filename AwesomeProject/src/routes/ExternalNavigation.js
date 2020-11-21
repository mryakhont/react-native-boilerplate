import * as React from 'react';

let isReadyRef = false;
export /**
 * @param {boolean} ready
 */
const readyForNavigation = (ready) => (isReadyRef = ready);

export const navigationRef = React.createRef();

export function navigate(name, params = {}) {
  if (isReadyRef === true && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}
