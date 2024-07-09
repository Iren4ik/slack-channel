export interface Message {
  author: string;
  time: string;
  date: string;
  content: string;
  avatar: string;
}

export const messages: Message[] = [
  {
    author: "Lara",
    time: "2:30 PM",
    date: "2024-07-08",
    content:
      "We need to think about how we can improve our current process. The way we receive feedback from the client is mostly on UI and not the experience. Let’s make time for a meeting to resolve this issue.",
    avatar: "images/lara.jpg",
  },
  {
    author: "Jordan",
    time: "4:30 PM",
    date: "2024-07-08",
    content:
      "The client wants an update on the progress of the work. We can create a prototype to show them tomorrow.",
    avatar: "images/jordan.jpg",
  },
  {
    author: "Sarah",
    time: "4:45 PM",
    date: "2024-07-08",
    content: "I agree. Let’s talk tomorrow.",
    avatar: "images/sarah.jpg",
  },
  {
    author: "Jordan",
    time: "8:30 AM",
    date: "2024-07-09",
    content: "Please send the project file when you get the chance. Thanks",
    avatar: "images/jordan.jpg",
  },
];
