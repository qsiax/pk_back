/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sq1w5rgc08boyvd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gxvnw4mw",
    "name": "item_id",
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
  const collection = dao.findCollectionByNameOrId("sq1w5rgc08boyvd")

  // remove
  collection.schema.removeField("gxvnw4mw")

  return dao.saveCollection(collection)
})
