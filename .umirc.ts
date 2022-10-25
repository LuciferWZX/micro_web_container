import {defineConfig} from "umi";
import routes from "./src/config/route";

export default defineConfig({
  npmClient: 'pnpm',
  routes:routes,
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
  ],
  initialState: {},
  history:{
    type:'hash'
  },
  model:{},
  outputPath:'electron/renderer',
  alias:{
    '@web':'/src',
    '@app':'/electron',
  },
});
