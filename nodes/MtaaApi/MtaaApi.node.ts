import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { tanzaniaRegionsDescription } from './resources/tanzania-regions';
import { districtsInRegionDescription } from './resources/districts-in-region';
import { wardsInADistrictDescription } from './resources/wards-in-a-district';
import { streetsInAWardDescription } from './resources/streets-in-a-ward';
import { neighborhoodInAStreetDescription } from './resources/neighborhood-in-a-street';

export class MtaaApi implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Mtaa API',
                name: 'N8nDevMtaaApi',
                icon: { light: 'file:./mtaa-api.svg', dark: 'file:./mtaa-api.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'REST API for Tanzania\'s location data, from regions to streets.',
                defaults: { name: 'Mtaa API' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevMtaaApiApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Tanzania Regions",
					"value": "Tanzania Regions",
					"description": ""
				},
				{
					"name": "Districts In Region",
					"value": "Districts In Region",
					"description": ""
				},
				{
					"name": "Wards In A District",
					"value": "Wards In A District",
					"description": ""
				},
				{
					"name": "Streets In A Ward",
					"value": "Streets In A Ward",
					"description": ""
				},
				{
					"name": "Neighborhood In A Street",
					"value": "Neighborhood In A Street",
					"description": ""
				}
			],
			"default": ""
		},
		...tanzaniaRegionsDescription,
		...districtsInRegionDescription,
		...wardsInADistrictDescription,
		...streetsInAWardDescription,
		...neighborhoodInAStreetDescription
                ],
        };
}
