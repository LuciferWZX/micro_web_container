import {defineConfig} from "umi";
import routes from "./src/config/route";

export default defineConfig({
  npmClient: 'pnpm',
  routes:routes,
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/qiankun',
  ],
  initialState: {},
  scripts:[
      `window.is_mvc = true;`
  ],
  history:{
    type:'hash'
  },
  model:{},
  qiankun: {
    master: {},
  },
  outputPath:'electron/renderer',
  alias:{
    '@web':'/src',
    '@app':'/electron',
  },
});
