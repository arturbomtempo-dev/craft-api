"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const indexController = async (req, res) => {
    const duo = 'Artur Bomtempo e Letícia França';
    const idClass = '3D1';
    const subject = 'Framework';
    const school = 'Colégio Cotemig';
    res.status(200).json({
        duo: duo,
        class: idClass,
        subject: subject,
        school: school
    });
};
exports.indexController = indexController;
