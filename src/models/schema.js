export const schema = {
    "models": {
        "ParipicoCircle": {
            "name": "ParipicoCircle",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "section": {
                    "name": "section",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "child": {
                    "name": "child",
                    "isArray": true,
                    "type": {
                        "nonModel": "ParipicoCircleSectionChild"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ParipicoCircles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "ParipicoCircleSectionChild": {
            "name": "ParipicoCircleSectionChild",
            "fields": {
                "circle_id": {
                    "name": "circle_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "circle_name": {
                    "name": "circle_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.2",
    "version": "8c9a69d17d28b08c002c29396592aae0"
};