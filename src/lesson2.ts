// Partial<T>

// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.

type User = {
  name: string;
  age: number;
  sex: "male" | "female" | "another";
  country: string;
};

type updatedUser = Partial<User>;

const updated: updatedUser = {
  age: 19,
};
//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

interface Configuration {
  theme: string;
  isFulledProfile: boolean;
}

const settings: Configuration = {
  theme: "light",
  isFulledProfile: false,
};

function qwe(fields: Partial<Configuration>): Configuration {
  return { ...settings, ...fields };
}

// Readonly<T>

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.

function getNumbers(numbers: ReadonlyArray<number>): number[] {
  return Array.from(numbers);
}

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

interface Config {
  something: boolean;
}

const config: Readonly<Config> = {
  something: true,
};
// 3. Pick<T, K>

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.

const user: User2 = {
  name: "Lisa",
  username: "elisarrar",
  email: "qweety@gmail.com",
  tel: "0504007700",
};

type User2 = {
  name: string;
  username: string;
  email: string;
  tel: string;
};

function smallerUser(user: User2): Pick<User2, "name" | "email"> {
  return {
    name: user.name,
    email: user.email,
  };
}

// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.

interface Response {
  data: object[];
  createAt: string;
  updateAt: string;
  page: number;
  limit: number;
}

type savedData = Pick<Response, "page" | "limit">

function newAPI(res: Response): savedData {
  return {
    page: res.page,
    limit: res.limit,
  };
}

// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.

const usersBase:Record<string, number> = {
  "Alice": 25,
  "Lisa": 18,
  "Nick": 43,
}
// Задача 2: Мапа з іменами місяців до кількості днів у них.

const monthsDB :Record<string, number>= {
  "January": 31,
  "February": 30,
  "March": 31,
  "April": 30,
}

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.

interface Userr {
  name: string
  email: string,
  password: string,
}

type securityUser = Omit<Userr, "password">

//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

type updatedAPI = Omit<Response, "createAt">;

// Робота з інтерфейсами

// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.

// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

// Робота з класами

// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.

// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.
