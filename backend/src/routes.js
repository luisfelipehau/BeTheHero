const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const NGOController = require('./controllers/NGOController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ngos', NGOController.index);
routes.post('/ngos', celebrate({
                [Segments.BODY]: Joi.object().keys({
                    name: Joi.string().required(),
                    email: Joi.string().required().email(),
                    /*whatsapp: Joi.number().required().min(10).max(11),*/
                    whatsapp: Joi.string().required().min(10),
                    city: Joi.string().required(),
                    uf: Joi.string().required().length(2),
                })
            }), NGOController.create);

routes.post('/session', SessionController.create);

routes.get('/profile', celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required(),
            }).unknown(),
            }), ProfileController.index);


routes.get('/incidents', celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number(),
            }),
            }), IncidentController.index);

routes.post('/incidents', IncidentController.create);


routes.delete('/incidents/:id', celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            })
            }), IncidentController.delete);


module.exports = routes;
