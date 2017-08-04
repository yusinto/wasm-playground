import path from 'path';
import fs from 'fs';
import Express from 'express';
import Webpack from 'webpack';
import WebpackConfig from '../../webpack.config';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebPackHotMiddleware from 'webpack-hot-middleware';

const app = Express();
const webpackCompiler = Webpack(WebpackConfig);
app.use(WebpackDevMiddleware(webpackCompiler, {
  publicPath: WebpackConfig.output.publicPath,
  noInfo: true,
  quiet: false
}));
app.use(WebPackHotMiddleware(webpackCompiler));

app.get('/:filename.wasm', (req, res) => {
  const wasmFilePath = path.resolve(__dirname, `../../dist/${req.params.filename}.wasm`);
  console.log(`Wasm request ${wasmFilePath}`);

  fs.readFile(wasmFilePath, (err, data) => {
    const errorMessage = `Error ${wasmFilePath} not found. ${JSON.stringify(err)}`;
    if (err) {
      console.log(errorMessage);
      res.status(404).send(errorMessage);
      return;
    }
    res.send(data);
  });
});
app.use('/dist', Express.static('dist', {maxAge: '1d'}));

app.use((req, res) => {
  const htmlString = `<!DOCTYPE html>
    <html>
         <head>
            <title>Hasta la vista JS!</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <div id="reactDiv"/>
            <script src="/dist/helloWorld.js"></script>
            <script src="/dist/bundle.js"></script>
          </body>
    </html>`;

  res.end(htmlString);
});

app.listen(3000, () => {
  console.log(`Started wasm-playground...`);
});

