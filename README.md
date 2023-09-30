# Development team :

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ViktorSvertoka)
  Viktor Svertoka **Team Lead & Scrum Master**

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/EuJinnLucaShow)
  Yevhenii Lukashov **Full Stack Developer**

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Alex-XAG)
  Oleksii Khomyakov **Full Stack Developer**

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dmitriy1boiko)
  Dmytro Boiko **Full Stack Developer**

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sergiy-Yevchihen)
  Sergiy Yevchihen **Full Stack Developer**

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/samusdimitriy)
  Dimitriy Samus **Full Stack Developer**

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/brugiiii)
  Eduard Bruhosh **Full Stack Developer**

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SergeyFullstack)
  Serhii Kozchenko **Full Stack Developer**

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/OleksiyMunenko)
  Oleksii Mynenko **Full Stack Developer**

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Valentyna89)
  Valentyna Kirbaba **Full Stack Developer**

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Okayolha)
  Olha Herasymchuk **Full Stack Developer**

![Presentation](./public/presentation.gif)

# Examples of writing commits on a project

## We use the following types of commits:

- Feat(HTML) Added new functionality

- Fix(JS) Error correction

- Perf(JPEG) Changes to improve performance

- Refactor(PNG) Code edits without fixing bugs or adding new features

- Revert(JS) Rollback to previous commits

- Style(SCSS) Code style edits

- Docs(README) Documentation update

Choose from the list the description of the commit that fits your task, in
brackets we write the file in which we worked, and in the body of the commit we
write what we did (changed) etc.

---

- `Look at Figma layout`
  [**Layout Figma**](https://www.figma.com/file/FHAaMcWwZCDbzWPlowFhEf/Power-Pulse?type=design&node-id=0-1&mode=design)

---

# Авторизація бек

API Base URL https://power-pulse-back-end.onrender.com

Create a New User POST /api/auth/register Створення нового користувача.

Запит: { "name": "Ім'я користувача", "email": "example@example.com", "password":
"пароль" }

Відповідь: Успішний запит повертає статус 201 Created та інформацію про
створеного користувача.

Login User POST /api/auth/login Аутентифікація користувача.

Запит: { "email": "example@example.com", "password": "пароль" }

Відповідь: Успішний запит повертає статус 200 OK та інформацію про
аутентифікованого користувача.

Log Out User POST /api/auth/logout Вихід користувача.

Авторизація: Токен, виданий поточному користувачу, передається у заголовку
запиту.

Get Information About the Current User GET /api/auth/current Отримання
інформації про поточного користувача.

Авторизація: Токен, виданий поточному користувачу, передається у заголовку
запиту.

Verify the User's Email POST /api/auth/verify Підтвердження електронної пошти
користувача.

Запит: { "email": "example@example.com" }

Update User Avatars PATCH /api/auth/avatars Оновлення аватара користувача.

Авторизація: Токен, виданий поточному користувачу, передається у заголовку
запиту.

Запит: Тіло запиту має містити зображення аватара користувача у вигляді файлу

---

1. Встановіть базові залежності проекту командою `npm install`.
2. Запустіть режим розробки, виконавши команду `npm run dev`.
