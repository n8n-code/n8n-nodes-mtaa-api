import type { INodeProperties } from 'n8n-workflow';

export const wardsInADistrictDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Wards In A District"
					]
				}
			},
			"options": [
				{
					"name": "Wards In A District",
					"value": "Wards In A District",
					"action": "Returns all wards in a district",
					"description": "Returns all wards in a  specified district and district postcode",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"country\"]}}/{{$parameter[\"region\"]}}/{{$parameter[\"district\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{country}/{region}/{district}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wards In A District"
					],
					"operation": [
						"Wards In A District"
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
						"Wards In A District"
					],
					"operation": [
						"Wards In A District"
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
						"Wards In A District"
					],
					"operation": [
						"Wards In A District"
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
						"Wards In A District"
					],
					"operation": [
						"Wards In A District"
					]
				}
			}
		},
];
