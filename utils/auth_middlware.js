const jwt  = require('jsonwebtoken');
const db = require('../models');

exports.verify_token = async (req, res, next) => {
    let token = req.cookies?.jwt;

    if (!token) {
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.split(' ')[1];
        }
    }

    if (!token) {
        return res.status(401).json({
            status: 'fail',
            message: 'Veuillez vous connecter'
        });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const user = await db.user.findOne({ where: { id: verified.id } });

        if (!user) {
            return res.status(401).json({
                status: 'fail',
                message: 'Veuillez vous connecter'
            });
        }

        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Veuillez vous connecter'
        });
    }
}


