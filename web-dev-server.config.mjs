import { fromRollup } from '@web/dev-server-rollup';
import rollupBabel from '@rollup/plugin-babel';

const babel = fromRollup(rollupBabel.default);

export default({
  open: '/demo/',
  watch: true,

  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },

  plugins: [
    babel({
      plugins: [
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
      ],
      
    }),
  ],
});
