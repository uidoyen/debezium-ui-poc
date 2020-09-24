import { Services } from "@debezium/ui-services";
import { Brand, Form, PageHeader } from '@patternfly/react-core';
import * as React from 'react';
import { useHistory } from "react-router-dom";
import { fetch_retry } from "src/app/shared";
import BrandLogo from '../../../assets/images/debezium_logo_300px.png';
import { BasicSelectInput } from '../components';

export const KafkaConnectCluster: React.FC = () => {
	
	const [connectCluster, setConnectCluster] = React.useState<string>("");
	const [connectClusters, setConnectClusters] = React.useState<string[]>([""]);
	
	const [loading, setLoading] = React.useState(true);
	const [apiError, setApiError] = React.useState<boolean>(false);
	const [errorMsg, setErrorMsg] = React.useState<Error>(new Error());
	
	const history = useHistory();
	const homeClick = () =>{
		history.push("/")
	}

	React.useEffect(() => {
    const globalsService = Services.getGlobalsService();
    fetch_retry(globalsService.getConnectCluster, globalsService)
      .then((cClusters: string[]) => {
        setLoading(false);
        setConnectClusters([...cClusters]);
      })
      .catch((err: React.SetStateAction<Error>) => {
        setApiError(true);
        setErrorMsg(err);
      });
	}, [setConnectClusters]);
	const onChange = (value: string, event: any) => {
    setConnectCluster(value);
	};
	
	const headerTools = (
		<>
			<div>
				<Form>
					<BasicSelectInput 
						options={connectClusters} 
						label="Kafka connect cluster"
						fieldId="kafka-connect-cluster"
						propertyChange={onChange}
					/>
				</Form>
			</div>
			<div>
				hello
			</div>
		</>
	);
	
    return (
		<PageHeader 
			logo={<Brand onClick={homeClick} 
			className="brandLogo" 
			src={BrandLogo} alt="Debezium" />} 
			headerTools={headerTools} 
		/>
    );
}
