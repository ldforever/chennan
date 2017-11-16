var path=require('path');
var htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:{
        main:'./src/script/main.js',
         a:'./src/script/a.js',
         b:'./src/script/b.js',
         c:'./src/script/c.js'
},
    
    output:{
       // path:__dirname +"/dist/js", //webpack2的写法
       //path: path.resolve(__dirname, './dist/js'),
        filename:"js/[name]-[chunkhash]-bundle.js",
        path:__dirname +"/dist",//切记使用绝对路径
        publicPath:"http://cdn.com/"
    },

    plugins: [
        // new htmlWebpackPlugin({
        //     filename:"index.html",
        //   template:"index.html",
        //   inject:false,
        //   title:"hahahahha",
        //   date: new Date(),
        //   minify:{
        //     removeComments:true,
        //     collapseWhitespace:true
        //   },
          
        // }),
        new htmlWebpackPlugin({
            filename:"a.html",
          template:"index.html",
          title:"this is A html",
          inject:'body',
          chunks:["main","a"]
        }),
        new htmlWebpackPlugin({
            filename:"b.html",
          template:"index.html",
          title:"this is B html",
          inject:'body',
          chunks:["b"]
        }),
        new htmlWebpackPlugin({
            filename:"c.html",
          template:"index.html",
          title:"this is C html",
          inject:'body',
          chunks:["c"]
        }),
      ]
}

    



