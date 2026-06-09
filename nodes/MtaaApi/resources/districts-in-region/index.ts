import type { INodeProperties } from 'n8n-workflow';

export const districtsInRegionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Districts In Region"
					]
				}
			},
			"options": [
				{
					"name": "Districts In A Region",
					"value": "Districts In A Region",
					"action": "Returns all districts in region",
					"description": "Returns a post code and all districts in a specified region",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"country\"]}}/{{$parameter[\"region\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{country}/{region}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Districts In Region"
					],
					"operation": [
						"Districts In A Region"
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
						"Districts In Region"
					],
					"operation": [
						"Districts In A Region"
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
						"Districts In Region"
					],
					"operation": [
						"Districts In A Region"
					]
				}
			}
		},
];
