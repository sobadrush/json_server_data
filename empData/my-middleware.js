/**
 * 加入 middleware，回應前增加 response-header
 */
module.exports = (req, res, next) => {
    res.header('X-Hello', 'World'); // 會被加在 response-header
    next();
};