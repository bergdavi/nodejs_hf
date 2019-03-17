/**
 * Rendereli a megfelelő oldalt
 */
module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        res.end('Render: ' + viewName);
    };
};