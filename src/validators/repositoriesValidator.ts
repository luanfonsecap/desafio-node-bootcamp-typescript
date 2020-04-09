import { Segments, Joi } from "celebrate";

export default {
  store: {
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      url: Joi.string().required(),
      techs: Joi.array().items(Joi.string()).required(),
    }),
  },

  update: {
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      url: Joi.string().required(),
      techs: Joi.array().items(Joi.string()).required(),
    }),
  },
};
