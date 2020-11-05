import { render as originalRender, RenderOptions, RenderResult } from '@testing-library/react';
import React, { ComponentType, FunctionComponent, ReactNode } from 'react';

type IRender = (
  ui: JSX.Element,
  providers?: ComponentType[] | ComponentType,
  options?: Omit<RenderOptions, 'queries'>
) => RenderResult;

type IRenderProvider = (
  providers: ComponentType[],
  children: ReactNode,
) => JSX.Element;

const render: IRender = (ui, provider, options) => {
  if (!provider) return originalRender(ui, { ...options });

  const renderProvider: IRenderProvider = (providers, children) => {
    const [Provider, ...rest] = providers;

    return (
      <Provider>
        {rest.length
          ? renderProvider(rest, children)
          : children
        }
      </Provider>
    );
  };

  const providers = Array.isArray(provider) ? [...provider] : [provider];
  const Providers: FunctionComponent = ({ children }) => renderProvider(providers, children);

  return originalRender(ui, { wrapper: Providers, ...options });
};

export default render;
