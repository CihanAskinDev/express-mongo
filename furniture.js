import db from "./mongoConnect.js"

const furnitureDb = db.collection("furniture")

export const addFurniture = async (req, res) => {
    // add furniture to our mongo db


    const newFurnitureAdded = await furnitureDb.insertOne(req.body)
    console.log(newFurnitureAdded)

    res.status(201).send(newFurnitureAdded)
}
export const getFurniture = async (req, res) => {
    // get furniture from mongo db
try {
    const allFurniture = await furnitureDb.find({}).toArray()
    console.table(allFurniture)
    res.status(201).send(allFurniture)
} catch (error) {
    res.status(404).send(error)
}
}
