/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l6ftfut6cpnclvz",
    "created": "2024-03-20 11:43:50.134Z",
    "updated": "2024-03-20 11:43:50.134Z",
    "name": "group",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nlasdsbi",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l6ftfut6cpnclvz");

  return dao.deleteCollection(collection);
})
