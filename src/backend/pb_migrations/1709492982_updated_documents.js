/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ix54p39vrh6l5x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "axrluxry",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 2000,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lj6l2v9e",
    "name": "category",
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
  collection.schema.removeField("axrluxry")

  // remove
  collection.schema.removeField("lj6l2v9e")

  return dao.saveCollection(collection)
})
