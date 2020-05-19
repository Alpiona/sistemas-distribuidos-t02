import { format } from 'date-fns';

import Message from '../models/Message';

interface CreateMessageDTO {
  user: string;
  content: string;
}

interface MessageFormatedDTO {
  user: string;
  content: string;
  created_at: string;
}

class MessageRepository {
  private messages: Message[];

  constructor() {
    this.messages = [];
  }

  public all(): Message[] {
    return this.messages;
  }

  public allFormated(): MessageFormatedDTO[] {
    const formatedMessages = this.messages.map(message => {
      return {
        user: message.user,
        content: message.content,
        created_at: format(message.created_at, 'dd/MM/yyyy HH:mm:ss'),
      };
    });

    return formatedMessages;
  }

  public create({ user, content }: CreateMessageDTO): Message {
    const id = this.messages.length;
    const message = new Message({ id, content, user });

    this.messages.push(message);

    return message;
  }
}

export default MessageRepository;
