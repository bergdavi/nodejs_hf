/**
 * Az adatbázisból kiolvassa az összes tárgyat, valamint, hogy a tárgyakat a felhasználó tanítja / hallgatja-e
*/
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getSubjectsMW");
        res.locals.subjects = [
            {
                id: 0,
                name: "Adatb",
                day: 1,
                start: "8:00",
                end: "10:00",
                teacher: "Mézga Géza",
                own: true
            },
            {
                id: 1,
                name: "SzoftTech",
                day: 2,
                start: "12:00",
                end: "14:00",
                teacher: "Minta Aladát",
                own: true
            },
            {
                id: 2,
                name: "Prog",
                day: 4,
                start: "9:30",
                end: "11:30",
                teacher: "Micimackó",
                own: false
            }
        ];
        res.locals.user.subjects = [];
        res.locals.subjects.forEach(subject => {
            if(subject.own) {
                res.locals.user.subjects.push(subject);
            }
        });
        return next();
    };
};