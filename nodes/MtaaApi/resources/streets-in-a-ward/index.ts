import type { INodeProperties } from 'n8n-workflow';

export const streetsInAWardDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Streets In A Ward"
					]
				}
			},
			"options": [
				{
					"name": "Streets In A Ward",
					"value": "Streets In A Ward",
					"action": "Returns all streets in a ward",
					"description": "Returns all streets in a specified ward and ward postcode",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"country\"]}}/{{$parameter[\"region\"]}}/{{$parameter[\"district\"]}}/{{$parameter[\"ward\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{country}/{region}/{district}/{ward}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Streets In A Ward"
					],
					"operation": [
						"Streets In A Ward"
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
						"Streets In A Ward"
					],
					"operation": [
						"Streets In A Ward"
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
						"Streets In A Ward"
					],
					"operation": [
						"Streets In A Ward"
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
						"Streets In A Ward"
					],
					"operation": [
						"Streets In A Ward"
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
						"Streets In A Ward"
					],
					"operation": [
						"Streets In A Ward"
					]
				}
			}
		},
];
