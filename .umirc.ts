export default {
  npmClient: 'pnpm',
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
};
