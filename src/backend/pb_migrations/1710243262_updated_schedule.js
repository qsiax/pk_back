/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxqtvthz2p6nrm6")

  // remove
  collection.schema.removeField("zovxkr3p")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxqtvthz2p6nrm6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zovxkr3p",
    "name": "days",
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
})
