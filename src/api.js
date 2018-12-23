export const FAKE_USER = {
  firstName: "Dave",
  lastName: "Ceddia",
  username: "dave",
  avatar:
    "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b?s=32"
};

const FAKE_EMAILS = [
  {
    id: 1,
    preview: "Hi shadrach, how are you doing?",
    subject: "Long time greeting",
    body:
      "Body of the email shit i forgot to add it earlier so it all looks the same cos ain't got time for this"
  },
  {
    id: 2,
    preview: "We received your application",
    subject: "Application for Fronted Engineer",
    body:
      "Body of the email shit i forgot to add it earlier so it all looks the same cos ain't got time for this"
  },
  {
    id: 3,
    preview: "Congrats shadrach, you have been offered the position",
    subject: "Job Offer for Frontend Engineer",
    body:
      "Body of the email shit i forgot to add it earlier so it all looks the same cos ain't got time for this"
  }
];

let lastIndex = 0;
export function fetchEmails() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(FAKE_EMAILS.slice(lastIndex, lastIndex + 2));
      lastIndex = lastIndex >= FAKE_EMAILS.length ? 0 : lastIndex + 2;
    }, 500);
  });
}

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "dave" && password === "secret") {
        resolve(FAKE_USER);
      } else {
        reject({ message: "Invalid username or password" });
      }
    }, 300);
  });
}
