module.exports = {
    getAll (req, res)
 {
    const db = req.app.get('db')
    db.getAll().then(result => {
        res.status(200).send(result)

    }).catch(err => {
        res.status(500).send(`Failed to get inventory`)
    })
},

getById (req, res){
    const db = req.app.get('db')
    let {id} = req.params
    db.getById(id).then(result => {
        res.status(200).send(result)
    }).catch(err => {
        res.status(500).send('Failed to get inventory')
    })
},
create (req, res) {
    const db = req.app.get('db')
    let {name, price, img} = req.body
    console.log(req.body)
    db.create([name, price, img]).then(result => {
        console.log(result)
        res.status(200).send(result)
    }).catch(err => {
        res.status(500).send('Failed to create data')
    })
},

delete(req, res){
    const db=req.app.get('db')
    let{id} = req.params
    console.log(id)
    db.delete(id).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        res.status(500).send('Failed to delete')
    })
},

update (req, res){
    const db=req.app.get('db')
    let {name, price, img} = req.body
    let {id} = req.params

    db.update([id, name, +price, img]).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        res.status(500).send('failed to update')
    })
}


}