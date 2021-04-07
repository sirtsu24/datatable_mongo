const Data = require('../models/dataModels');

exports.getAddData = (req, res) =>{
    res.render('data.ejs', {
        path: '/data',
        editing: false
    });
};


exports.getData = (req, res) => {
    Data.fetchAll()
    .then(dataSet => {
        res.render('index.ejs', {
                dataSet: dataSet,
                pageTitle: 'Data',
                path: '/'
            }
        );
    })
    .catch(error => {
        console.log('Failed to fetch all for admin controller');
    });
    
};

exports.postData = (req, res) => {
    const dataSet = new Data (req.body.name, req.body.position, req.body.office, req.body.age, req.body.date, req.body.salary);

    dataSet.save();
    res.redirect('/');
};
