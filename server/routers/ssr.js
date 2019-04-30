const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
const VUeServerRender = require('vue-server-renderer')

const serverRender = require('./server-render')
const clientMainfest = require('../../dist/vue-ssr-client-manifest.json')
const renderer = VUeServerRender.createBundleRenderer(
  path.join(__dirname, '../../server-build/vue-ssr-server-bundle.json'),
  {
    inject: false,
    clientMainfest
  }
)

const template = fs.readFileSync(
  path.join(__dirname, '../server.template.ejs'),
  'utf-8'
)

const pageRouter = new Router()

pageRouter.get('*', async (ctx) => {
  await serverRender(ctx, renderer, template)
})

module.exports = pageRouter
