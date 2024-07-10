const jordanAvatarSrc = 'https://s3-alpha-sig.figma.com/img/b7e3/de67/dbaacba016fae5214a7d0a1db5ca9bde?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oORrOVfEOChjz1sY0olsnB8R~R~q8uC4rnQQ8k~VS2HuvhaFRqAAimj1JP2OyPnn3vBGnNe9UrFlNyTHFY~K3O60lHwWAhgQqhuhUEafE5k3zgShf-cccZmzETSwPuj-1tdEwFDh~fAwxsGcGar3zHO4qQXOpTp6D0r4bZTEd8cyFZ3pl-6epmZyETecN8ObAxz33ZcxbEoqtskyqY8G9KqlhfNF0cljhy9oEmGciQmKr2BCIHu8Nc9TMGrKcymBynTtwH5GU9Ng4RzcvU57YijtVXte-O1iiO~~zPlFQh16mSjsbGZI6RDFEOslajkuF87IFf0PYEKLLvcvYwwSyw__';
const laraAvatarSrc = 'https://s3-alpha-sig.figma.com/img/f10c/33d2/ef86401a9bdda048341ebaff469eb5a1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UN7c2ORiWGgCc6ZJeA38KUP90VaiBvgI0rD8amkOrjVp3FYRSOmwQBH2bKFw3-YKBL5e4DKMDjRGEUw~tjqTBWyAgmjy~lNy-bPtzVsoghk2qsKWD17vpn996SsLzLjtkn3GnnS2DT6j32T-XMz1eceAvnUMYT3GWzom~1sKbEOzfFPwUHlbAs~CLo66H~vkpgKm4SJ~pKMjGJRJF3JJmEfumy8nOh7qoBU6e7hNUrmYTYoHoTUaTx3l-Lt-wW2EeOlJD8HyleKimCMhvZT2TTOWKOcEAgDknyISA4qt6MDfwr9wy~A0kwWyOtI7FiTMrL8SxM-cyY4FhoPNSPvbnQ__';
const sarahAvatarSrc = 'https://s3-alpha-sig.figma.com/img/79a1/b4e4/8c8621dca1c985c0bb05211f4f2ac470?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BKFjn~mHWZORvuYOtl1Zzy7ulrW9hnEd9cn9iLibztI0zkRTavF74yzjlXiQRCgDZlmcWU2IM2M5zP2RwKuaIEw3DX4hZow0BNBIL6Tx9mD0geCdxKx4ZFydoQmnFWjesxNFsTEIdHjDtPWF-yqFN1CCdqlCpoyzS6GO7CHjhJTMXuVyqImfjkLTym7Z~bQyErKYc7yqfp3Yw-Auom3UZaGKhXgie5niRmBMWGtvW~P6Fp~AGQ7HIuTfwSdyT~0XdhFQdk1AnQNGy-06tE53dHV-mYSS6NAbWyZFEe5LkWqT0FPQ-yVp2jCkHwD3gBWaleD1cb4sUkg-uxgSw1-BVg__';
const ireneAvatarSrc = 'https://i.postimg.cc/QCZ8vQwh/IMG-4911.jpg';
export interface Message {
  author: string;
  time: string;
  date: string;
  content: string;
  avatar: string;
}

export const messages: Message[] = [
  {
    author: "Irene",
    time: "2:10 PM",
    date: "2024-07-08",
    content: "Только для верстальщика фраза 'пошло-поехало' не означает ничего хорошего))))))",
    avatar: ireneAvatarSrc,
  },
  {
    author: "Jordan",
    time: "2:13 PM",
    date: "2024-07-08",
    content:
      "We received a lot of UI feedback from the client again.",
    avatar: jordanAvatarSrc,
  },
  {
    author: "Lara",
    time: "2:30 PM",
    date: "2024-07-08",
    content:
      "We need to think about how we can improve our current process. The way we receive feedback from the client is mostly on UI and not the experience. Let’s make time for a meeting to resolve this issue.",
    avatar: laraAvatarSrc,
  },
  {
    author: "Irene",
    time: "3:00 PM",
    date: "2024-07-08",
    content: "Только предствьте, какими крутыми программистами вы бы стали, если бы прочитали все, что сохранили в закладках))))",
    avatar: ireneAvatarSrc,
  },
  {
    author: "Jordan",
    time: "4:30 PM",
    date: "2024-07-08",
    content:
      "The client wants an update on the progress of the work. We can create a prototype to show them tomorrow.",
    avatar: jordanAvatarSrc,
  },
  {
    author: "Sarah",
    time: "4:45 PM",
    date: "2024-07-08",
    content: "I agree. Let’s talk tomorrow.",
    avatar: sarahAvatarSrc,
  },
  {
    author: "Jordan",
    time: "8:30 AM",
    date: "2024-07-09",
    content: "Please send the project file when you get the chance. Thanks",
    avatar: jordanAvatarSrc,
  },
];
