const os = require('os')
const path = require('path')

class PassDB {
    private knex
    private storageDBFile = "mydb.sqlite"

    constructor(storagePath: string) {
        let dbfile = path.join(storagePath, this.storageDBFile)
        // let isExisted = os.
        console.log("===========")
        console.log(dbfile)
        console.log("===========")

        this.knex = require('knex')({
            client: 'sqlite3',
            connection: {
                filename: dbfile
            },
            log: {
                warn(message) {
                    console.log(message)
                },
                error(message) {
                    console.log(message)
                },
                deprecate(message) {
                    console.log(message)
                },
                debug(message) {
                    console.log(message)
                }
            }
        })
    }

    /**
     * AddPassRecord
     */
    public AddPassRecord() {
    }

    /**
     * SearchPassRecord
     */
    public SearchPassRecord(search: string) {
    }
}

export { PassDB };