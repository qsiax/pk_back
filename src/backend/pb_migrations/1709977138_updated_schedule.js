/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxqtvthz2p6nrm6")

  // remove
  collection.schema.removeField("xgp39swz")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxqtvthz2p6nrm6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xgp39swz",
    "name": "days",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("yocmqddg")

  return dao.saveCollection(collection)
})
