
const { Op } = require("sequelize");

const handleQuery = async (model, req, res, query_params, additional_where = {}) => {
    try {
       
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startIndex = (page - 1) * limit;
        

        
        const filters = {...req.query} || {};
        if (req.query.name) {
            filters.name = { [Op.like]: `%${req.query.name}%` };
        }
        if (req.query.email) {
            filters.email = { [Op.like]: `%${req.query.email}%` };
        }

        delete filters.page;
        delete filters.limit;
        delete filters.sortField;
        delete filters.sortOrder;


        const sortField = req.query.sortField || 'createdAt';
        const sortOrder = req.query.sortOrder || 'desc';

        const count_total = await model?.count({ where: {...filters, ...additional_where}, ...query_params });

        const results = await model.findAndCountAll({
            where: {...filters, ...additional_where},
            order: [[sortField, sortOrder]],
            offset: startIndex,
            limit: limit,
            ...query_params
        });

        const totalPages = Math.ceil(count_total / limit);

        return res.status(200).json({
            status: 'success',
            total_results: count_total,
            results: results.rows.length,
            totalPages: totalPages,
            currentPage: page,
            limit,
            data: {
                [`${model.name.toLowerCase()}s`]: results.rows
            }
        });
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

module.exports = handleQuery;