class Message {
  id: number;

  user: string;

  content: string;

  created_at: Date;

  constructor({ id, content, user }: Omit<Message, 'created_at'>) {
    this.id = id;
    this.content = content;
    this.user = user;
    this.created_at = new Date();
  }
}

export default Message;
