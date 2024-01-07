export class ChatSession {
  private messages: { role: 'system' | 'user' | 'assistant'; name: string; content: string }[];
  public currentSystemMessage: string
  constructor() {
      this.messages = [];
      this.currentSystemMessage=""
  }

  // Add a new message to the session
  addMessage(role: 'system' | 'user' | 'assistant', name: string, content: string): void {
      this.messages.push({ role, name, content });
  }

  // Get all messages in the session
  getMessages(): { role: 'system' | 'user' | 'assistant'; name: string; content: string }[] {
      return this.messages;
  }

  // Clear all messages in the session
  clearSession(): void {
      this.messages = [];
  }
}
