import Joi from "joi";

const commentValidation = incoming => {
  const schema = Joi.object({
    comment: Joi.string().max(500).empty().messages({
      "string.base": "Comment must be a string",
      "string.max": "Comment cannot be above 500 characters",
      "string.empty": "Sorry, Comment cannot be an empty field",
    }),
  }).messages({
    "object.unknown": "You have used an invalid key."
  }).options({ abortEarly: false });
  return schema.validate(incoming);
};

export default commentValidation;
