import * as React from 'react';

export interface IAppLayoutContext {
  showBreadcrumb: (breadcrumb: any) => void;
  connectCluster: any
}

export const AppLayoutContextDefaultValue = {} as IAppLayoutContext;

export const AppLayoutContext = React.createContext<IAppLayoutContext>(
  AppLayoutContextDefaultValue
);
