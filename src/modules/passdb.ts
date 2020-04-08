const fs = require('fs')
const path = require('path')

class PassDB {
    private knex;
    private storageDBFile: string = 'mydb.sqlite';
    private table: string = 'passwd';

    constructor(storagePath: string) {
        let dbfile = this.checkDBFile(storagePath)
        this.checkDBSchema(require('knex')({
            client: 'sqlite3',
            connection: {
                filename: dbfile
            },
            log: {
                warn(message) {
                    console.log(message);
                },
                error(message) {
                    console.log(message);
                },
                deprecate(message) {
                    console.log(message);
                },
                debug(message) {
                    console.log(message);
                }
            }
        }))
    }

    /**
     * 检查db存储schema，否则初始化新的db存储
     * @param knex 
     */
    private checkDBSchema(knex) {
        this.knex = knex;

        let table = this.table
        knex.schema.hasTable(table).then(function(exists) {
            if (!exists) {
                console.log('======not exist table: ' + table);
                return knex.schema.createTable(table, function (t) {
                    t.increments('id').primary();
                    t.string('title').comment('标题');
                    t.string('site_or_app').comment('网址或app');
                    t.string('login_name').comment('登录用户名');
                    t.string('login_pass').comment('登录密码');
                    t.text('remarks').comment('备注');
                    t.specificType('created_at', 'timestamp').defaultTo(knex.fn.now()).comment('添加时间');
                    t.specificType('updated_at', 'timestamp').defaultTo(knex.fn.now()).comment('更新时间');
                }).then(console.log('======created table: ' + table));
            }
        });
    }

    /**
     * 检查db存储文件是否存在，否则创建它
     * @param storagePath db文件存储路径
     */
    private checkDBFile(storagePath: string) {
        let dbfile = path.join(storagePath, this.storageDBFile);

        if (!fs.existsSync(storagePath)) {
            fs.mkdirSync(storagePath, { recursive: true })
        }

        if (!fs.existsSync(dbfile)) {
            fs.closeSync(fs.openSync(dbfile, 'w'));
        }

        return dbfile;
    }

    /**
     * AddPassRecord
     */
    public AddPassRecord(record: {}) {
        return this.knex(this.table).insert(record);
    }

    /**
     * SearchPassRecord
     * @param search 搜索词
     */
    public SearchPassRecord(search: string) {
        let op = this.knex(this.table);
        if (search.length > 0) {
            op = op.where('title', 'like', '%' + search + '%');
        }
        
        return op.orderBy('updated_at', 'desc');
    }
}

export { PassDB };