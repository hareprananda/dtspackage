const ttypescript = require('ttypescript');
const typescript = require('rollup-plugin-typescript2');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {

    // if (options.format === 'esm') {
    //   config = { ...config, preserveModules: true }

    //   config.output = {
    //     ...config.output,
    //     dir: 'dist/',
    //     entryFileNames: '[name].esm.js',
    //   }

    //   delete config.output.file
    // }

    const rpt2Plugin = config.plugins.find(p => p.name === 'rpt2');
    const rpt2PluginIndex = config.plugins.indexOf(rpt2Plugin);

    const tsconfigPath = options.tsconfig || 'tsconfig.json';

    // borrowed from https://github.com/facebook/create-react-app/pull/7248
    const tsconfigJSON = ttypescript.readConfigFile(
      tsconfigPath,
      ttypescript.sys.readFile
    ).config;

    const tsCompilerOptions = ttypescript.parseJsonConfigFileContent(
      tsconfigJSON,
      ttypescript.sys,
      './'
    ).options;

    const customRPT2Plugin = typescript({
      typescript: ttypescript,
      tsconfig: options.tsconfig,
      tsconfigDefaults: {
        exclude: [
          // all TS test files, regardless whether co-located or in test/ etc
          '**/*.spec.ts',
          '**/*.test.ts',
          '**/*.spec.tsx',
          '**/*.test.tsx',
          // TS defaults below
          'node_modules',
          'bower_components',
          'jspm_packages',
          'dist',
        ],
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          jsx: 'react',
        },
      },
      tsconfigOverride: {
        compilerOptions: {
          // TS -> esnext, then leave the rest to babel-preset-env
          target: 'esnext',
          // don't output declarations more than once
          ...(!options.writeMeta
            ? { declaration: false, declarationMap: false }
            : {}),
        },
      },
      check: !options.transpileOnly && options.writeMeta,
      useTsconfigDeclarationDir: Boolean(
        tsCompilerOptions && tsCompilerOptions.declarationDir
      ),
    });

    config.plugins.splice(rpt2PluginIndex, 1, customRPT2Plugin);
    return config;
  },
};
