'use strict';

const Contoller = require('egg').Controller

class MainController extends Contoller {

    async index() {
        this.ctx.body = "朱莉"
    }

    async checkLogin() {
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = "SELECT userName FROM admin_user WHERE userName = '"+userName +"' AND password = '"+password+"'"
        const res = await this.app.mysql.query(sql)
        if (res.length > 0) {
            let openId = new Date().getTim()
            this.ctx.session.openId = {'openId': openId}
            this.ctx.body = {'data': '登录成功', 'openId':openId}
        } else {
            this.ctx.body = {'data': '登录失败'}
        }
    }
}

module.exports = MainController