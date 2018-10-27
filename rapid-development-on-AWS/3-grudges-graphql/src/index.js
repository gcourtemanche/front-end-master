import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';

import Amplify, { Analytics } from 'aws-amplify';
import configuration from './aws-exports';

const appSyncConfiguration = {
  aws_appsync_graphqlEndpoint:
    'https://rg3rckpib5b6zcroq63ibpsmca.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-6u4hmh4p45buvnnzdcnmqfqmnm',
};

Amplify.configure({ ...configuration, ...appSyncConfiguration });
Analytics.disable();

ReactDOM.render(<Application />, document.getElementById('root'));
