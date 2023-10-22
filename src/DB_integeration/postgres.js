// should do : npm install pg-promise

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:4854@localhost:5432/bbs_express')

// db.one('SELECT $1 AS value', 123)
//   .then((data) => {
//     console.log('DATA:', data.value)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   })

// myself
async function select_articles_all() {
    const result_value = await db.any(
        'SELECT * FROM article'
    )
    .then((result) => {
        console.log(`returned data: ${result}`)
        return result
    })
    .catch((e) => {
        console.log(`error: ${e}`)
    })
    return result_value
}

async function select_articles_with_pageination(page_num) {
    const result_value = await db.query(
        'SELECT * FROM article LIMIT 10 ROWS OFFSET ($1) ROWS', 
        [page_num]
    )
    .then((result) => {
        console.log(`returned data: ${result.value}`)
        return result.value
    })
    .catch((e) => {
        console.log(`error: ${e}`)
    })

    return result_value
}

async function select_article_by_id(id) {
    const result_value = await db.query('SELECT * FROM article WHERE (id=$1)', [id])
    .then((result) => {
        console.log(`returned data: ${result.value}`)
        return result.value
    })
    .catch((e) => {
        console.log(`error: ${e}`)
    })

    return result_value
}


module.exports = {
    select_articles_with_pageination,
    select_article_by_id,
    select_articles_all
}
