const isDevMode = process.env.NODE_ENV === 'development';

const withCacheLoader = isDevMode
  ? ['cache-loader', 'babel-loader', 'ts-loader']
  : ['babel-loader', 'ts-loader'];

module.exports = [
  {
    test: /\.(js)$/,
    include: /src/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true
      }
    }
  }, {
    test: /\.(t|j)sx?$/,
    exclude: /node_modules/,
    use: withCacheLoader,
  }, {
    test: /\.(html)$/,
    exclude: [/node_modules/],
    use: {
      loader: 'html-loader',
      options: {
        minimize: true,
      },
    }
  },
    {
    test: /\.(svg|png|jpg|gif)$/,
    exclude: [/node_modules/],
    use: {
      loader: 'file-loader',
      options: {
        name: "[name].[ext]",
        outputPath: "./assets/images"
      }
    }
  }, {

    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.s(a|c)ss$/,
    use: [
      {        
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
    ]
  }

];