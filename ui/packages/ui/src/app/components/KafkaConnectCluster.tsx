import { Services } from "@debezium/ui-services";
import { Form } from '@patternfly/react-core';
import * as React from 'react';
import { AppLayoutContext } from 'src/app/Layout/AppLayoutContext';
import { fetch_retry } from "src/app/shared";
import { BasicSelectInput } from '../components';

export const KafkaConnectCluster: React.FC = () => {
	
	const [connectCluster, setConnectCluster] = React.useState<string>("");
	const [connectClusters, setConnectClusters] = React.useState<string[]>([""]);
	
	const [loading, setLoading] = React.useState(true);
	const [apiError, setApiError] = React.useState<boolean>(false);
	const [errorMsg, setErrorMsg] = React.useState<Error>(new Error());
	
  const appLayoutContext = React.useContext(AppLayoutContext);
  console.log(appLayoutContext)

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
	
    return (
      <div className="kafka-connect">
        <div className="kafka-connect__cluster">
          <Form>
            <BasicSelectInput 
              options={connectClusters} 
              label="Kafka connect cluster"
              fieldId="kafka-connect-cluster"
              propertyChange={onChange}
            />
        </Form>
      </div>
    </div>
    );
}
