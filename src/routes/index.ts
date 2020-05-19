import { Router } from 'express';

import MessageRepository from '../repositories/MessageRepository';

const routes = Router();

const messageRepository = new MessageRepository();

routes.get('/', (request, response) => {
  try {
    const messages = messageRepository.allFormated();
    return response.json({ messages });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.post('/', (request, response) => {
  const { user, content } = request.body;
  const newMessage = messageRepository.create({ user, content });

  return response.json(newMessage);
});

export default routes;
