import {
	Page,
	PageSection,
	PageSectionVariants,
	SkipToContent
} from '@patternfly/react-core';
import * as React from 'react';
import AppHeader from './appHeader';
import { AppLayoutContext } from './AppLayoutContext';
import './layout.css';


const AppLayout: React.FC = ({children}) => {

	const [breadcrumb, setHasBreadcrumb] = React.useState(null);
	const [connectCluster, setConnectCluster] = React.useState<number>(1);
  const showBreadcrumb = (b: any) => setHasBreadcrumb(b);
		
	const PageSkipToContent = (
		<SkipToContent href="#main-content-page-layout-default-nav">
			Skip to Content
		</SkipToContent>
	);

	return (
		
		<AppLayoutContext.Provider value={{ showBreadcrumb, connectCluster }}>
			<Page
				header={<AppHeader />}
				skipToContent={PageSkipToContent}
				breadcrumb={breadcrumb}
				className="app-page"
			>
				<PageSection variant={PageSectionVariants.light}>
					{children}
				</PageSection>
			</Page>
		</AppLayoutContext.Provider>
	)
}

export default AppLayout;
