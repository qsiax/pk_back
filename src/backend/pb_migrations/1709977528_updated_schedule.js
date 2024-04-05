/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxqtvthz2p6nrm6")

  // remove
  collection.schema.removeField("yocmqddg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jlvi5qvy",
    "name": "days",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxqtvthz2p6nrm6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yocmqddg",
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

  // remove
  collection.schema.removeField("jlvi5qvy")

  return dao.saveCollection(collection)
})
