import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class MtaaApiApi implements ICredentialType {
        name = 'N8nDevMtaaApiApi';

        displayName = 'Mtaa API';

        icon: Icon = { light: 'file:../nodes/MtaaApi/mtaa-api.svg', dark: 'file:../nodes/MtaaApi/mtaa-api.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://mtaa-api.herokuapp.com/api',
                        required: true,
                        placeholder: 'https://mtaa-api.herokuapp.com/api',
                        description: 'The base URL of your Mtaa API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
