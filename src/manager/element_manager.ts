import element from "../collection/element";

async function getAll() {
    try {
        const elem = await element.find()
        return elem
    } catch(e) {
        console.error(e) 
        return []
    }
}

async function create(data: any) {
    try {
        const elem = await element.create({
            name: data.name,
            color: data.color,
            type: data.type
        })
        return true
    } catch(e) {
        console.error(e)
        return false
    }
}

export default {getAll, create}