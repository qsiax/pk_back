/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxqtvthz2p6nrm6")

  // remove
  collection.schema.removeField("xgp39swz")

  return dao.saveCollection(collection)
})
