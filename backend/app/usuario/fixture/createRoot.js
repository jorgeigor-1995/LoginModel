const Model = require('./../model');
const to = require('./../../../core/to');

require('../../../connection');

(async function start(){
    console.log('cadastrar user root');
    const email = 'root@backmodel.com.br';
    let rootExists = await Model.findOne({email});
    if( rootExists) {
        console.log('user root ja existe');
    } else {
        var model = new Model({
            login: email,
            email,
            password: 'mudar123',
            name: 'Root',
        });

        const [err, data] = await to(model.save());

        if (!err && data) {
            console.log('user root cadastrado com sucesso')
        } else {
            console.log('ocorreu um erro ao cadastrar o root');
        }
    }
})();
