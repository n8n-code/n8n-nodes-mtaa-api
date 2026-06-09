import type { INodeProperties } from 'n8n-workflow';

export const neighborhoodInAStreetDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Neighborhood In A Street"
					]
				}
			},
			"options": [
				{
					"name": "Neighborhood In A Street",
					"value": "Neighborhood In A Street",
					"action": "Returns all neighborhood in a street",
					"description": "Returns all neighborhood in a specified street",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"country\"]}}/{{$parameter[\"region\"]}}/{{$parameter[\"district\"]}}/{{$parameter[\"ward\"]}}/{{$parameter[\"street\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{country}/{region}/{district}/{ward}/{street}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Neighborhood In A Street"
					],
					"operation": [
						"Neighborhood In A Street"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"required": true,
			"description": "Country name in lowercase eg( tanzania)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Neighborhood In A Street"
					],
					"operation": [
						"Neighborhood In A Street"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"required": true,
			"description": "Name of the region eg (Mbeya)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Neighborhood In A Street"
					],
					"operation": [
						"Neighborhood In A Street"
					]
				}
			}
		},
		{
			"displayName": "District",
			"name": "district",
			"required": true,
			"description": "Name of the District eg (Rungwe)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Neighborhood In A Street"
					],
					"operation": [
						"Neighborhood In A Street"
					]
				}
			}
		},
		{
			"displayName": "Ward",
			"name": "ward",
			"required": true,
			"description": "Name of the Ward eg (Kiwira)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Neighborhood In A Street"
					],
					"operation": [
						"Neighborhood In A Street"
					]
				}
			}
		},
		{
			"displayName": "Street",
			"name": "street",
			"required": true,
			"description": "Name of the Street eg (Ilundo)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Neighborhood In A Street"
					],
					"operation": [
						"Neighborhood In A Street"
					]
				}
			}
		},
];
