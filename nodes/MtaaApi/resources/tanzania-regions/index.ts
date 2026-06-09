import type { INodeProperties } from 'n8n-workflow';

export const tanzaniaRegionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tanzania Regions"
					]
				}
			},
			"options": [
				{
					"name": "Tanzania Regions",
					"value": "Tanzania Regions",
					"action": "Returns all regions present in Tanzania",
					"description": "Fetches all regions present in Tanzania and then return a response as json",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"country\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{country}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tanzania Regions"
					],
					"operation": [
						"Tanzania Regions"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"required": true,
			"description": "Country name in lowercase eg (Tanzania)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tanzania Regions"
					],
					"operation": [
						"Tanzania Regions"
					]
				}
			}
		},
];
