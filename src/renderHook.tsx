import { RenderHookOptions, renderHook as originalRenderHook } from '@testing-library/react-hooks';

const renderHook = <P, R>(callback: (props: P) => R, options?: RenderHookOptions<P>): R => (
  originalRenderHook<P, R>(callback, options).result.current
);

export default renderHook;
