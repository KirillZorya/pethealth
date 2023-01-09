import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          main_text: "Welcome to PetHealth!",
          user: "User",
          temperature: "Temperature",
          sleep: "Sleep",
          pulse: "Pulse",
          color: "Color",
          breed: "Breed",
          pet: "Pet",
          home: "Home",
          email:"Email",
          password: "Password",
          submit: "Submit",
          firstname: "First name",
          lastname:"Last name",
          lang:"Language",
          delete: "Delete",
          add: "Add",
          info: "Info",
          save: "Save",
          edit: "Edit",
          update: "Update",
          statistics: "Statistics",
          statistics_sleep: "Statistics (sleep)",
          statistics_pulse: "Statistics (pulse)",
          statistics_temp: "Statistics (temperature)",
          onEdit: "Action was completed successfully!",
          description:"Description",
          value: "Value",
          english: "English",
          ukr: "Ukrainian",
          breed_db: "Breed",
          col_name: "Name",
          nickname: "Nickname",
          kind: "Kind",
          sex: "Sex",
          breed_id: "Breed ID",
          sterilization: "Sterilization",
          birthdate: "Birthdate",
          color_id: "Color ID",
          owner_id: "Owner ID",
          pet_id: "Pet ID",
          created: "Created",
          username: "Username",
          usertype: "User Type"
        }
      },
      ua: {
        translations: {
          main_text: "Ласкаво просимо до PetHealth!",
          user: "Користувач",
          temperature: "Температура",
          sleep: "Сон",
          pulse: "Пульс",
          color: "Забарвлення",
          breed: "Порода",
          pet: "Тварина",
          home: "Головна",
          email:"Електронна пошта",
          password: "Пароль",
          submit: "Підтвердити",
          firstname: "Ім'я",
          lastname:"Прізвище",
          lang:"Мова",
          delete: "Видалити",
          add: "Додати",
          info: "Інформація",
          save: "Зберегти",
          edit: "Редагувати",
          update: "Оновити",
          statistics: "Статистика",
          statistics_sleep: "Статистика сну",
          statistics_pulse: "Статистика пульсу",
          statistics_temp: "Статистика температури",
          onEdit: "Дія успішна!",
          description:"Опис",
          value: "Значення",
          english: "Англійська",
          ukr: "Українська",
          breed_db: "Порода",
          col_name: "Назва",
          nickname: "Кличка",
          kind: "Вид",
          sex: "Стать",
          breed_id: "ID породи",
          sterilization: "Стерилізація",
          birthdate: "Дата народження",
          color_id: "ID забарвлення",
          owner_id: "ID власника",
          pet_id: "ID тварини",
          created: "Створено",
          username: "Логін",
          usertype: "Тип користувача"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;