import joi from 'joi';

export const messagesValidation = {
    body: joi.object({
        content: joi.string().alphanum().min(3).required(),
        receiverId: joi.string().hex().length(24),
    }),
}