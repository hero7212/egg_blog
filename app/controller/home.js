'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api接口11'
  }
  async list() {
		const { ctx } = this;
		ctx.body = 'hi, list';
	}
}

module.exports = HomeController;
