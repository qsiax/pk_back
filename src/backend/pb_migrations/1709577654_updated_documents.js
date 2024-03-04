/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ix54p39vrh6l5x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g1cdevdg",
    "name": "page",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ix54p39vrh6l5x")

  // remove
  collection.schema.removeField("g1cdevdg")

  return dao.saveCollection(collection)
})
