module.exports={
    entry:['./index.js'],
    output:{
        filename:'index.bundle.js',
        libraryTarget:'umd'
    },
      externals: {
        "jquery": "jQuery"
    }
};

