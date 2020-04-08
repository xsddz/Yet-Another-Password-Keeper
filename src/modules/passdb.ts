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
                    t.timestamp('created_at').comment('添加时间');
                    t.timestamp('updated_at').comment('更新时间');
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
     * currentDate
     * 获取当前时间的指定格式String
     * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
     * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
     * 例子：
     * currentDate("yyyy-MM-dd hh:mm:ss") ==> "2020-04-08 21:29:35"
     * @param fmt 
     */
    private currentDate(fmt: string) {
        let d = new Date()

        var o = {
            "M+": d.getMonth() + 1, //月份 
            "d+": d.getDate(), //日 
            "h+": d.getHours(), //小时 
            "m+": d.getMinutes(), //分 
            "s+": d.getSeconds(), //秒 
            "q+": Math.floor((d.getMonth() + 3) / 3), //季度 
            "S": d.getMilliseconds() //毫秒 
        };

        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));

        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));

        return fmt;
    }

    /**
     * AddPassRecord
     * @param record 
     */
    public AddPassRecord(record: {}) {
        record["created_at"] = this.currentDate("yyyy-MM-dd hh:mm:ss")
        record["updated_at"] = this.currentDate("yyyy-MM-dd hh:mm:ss")
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

    /**
     * GetPassRecordByID
     * @param id 
     */
    public GetPassRecordByID(id: number) {
        return this.knex(this.table).where('id', id);
    }

    /**
     * UpdatePassRecordByID
     * @param updateInfo 
     * @param id 
     */    
    public UpdatePassRecordByID(updateInfo: {}, id: number) {
        updateInfo["updated_at"] = this.currentDate("yyyy-MM-dd hh:mm:ss")
        return this.knex(this.table).where('id', id).update(updateInfo)
    }
}

export { PassDB };