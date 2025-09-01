import { useState } from "react";
import { getImagePath } from "../../utils/imagePath";
import { TextField } from "@mui/material";
import CustomButton from "../../components/ui/customButton";

import './style.css';

const FundContacts = () => {
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const validateForm = (target: HTMLFormElement) => {
    // const name = target.name;
    // const email = target.email;
    // const phone = target.phone;
    // const message = target.message;

    const newErrors: { [key: string]: boolean } = { ...errors };

    if (target.name === 'name') newErrors.name = true;
    if (target.name === 'phone') newErrors.phone = true;
    if (target.name === 'message') newErrors.message = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm(e.target as HTMLFormElement)) {
      console.log('Форма відправлена');
    }
  };

  const handleInvalid = (e: React.FormEvent<HTMLFormElement>) => {
    validateForm(e.target as HTMLFormElement);
  };

  const handleInput = () => {
    setErrors({});
  };
  
  return (
    <div className="fund-contacts">
      <div className="fund-contacts-info">
        <div className="secondary-text">Зв'язок з нами</div>

        <h2>Контакти</h2>

        <div className="fund-contacts-info-description">
          <div className="fund-contacts-info-description-title">
            Зв'язатися з нами
          </div>

          <div className="fund-contacts-info-description-content">
            У цьому розділі ви знайдете інформацію про наші контакти. Ви завжди можете написати або зателефонувати, якщо вам потрібна допомога або ви хочете залишити пропозицію та побажання. Чекаємо від вас дзвінків та зворотного зв ‘язку.
          </div>
        </div>

        <div className="fund-contacts-info-contacts">
          <div className="fund-contacts-info-contacts-item">
            <img src={getImagePath('/icon-phone.svg')} alt="icon-phone" />
            +380-044-300-2813
          </div>

          <div className="fund-contacts-info-contacts-item">
            <img src={getImagePath('/icon-email.svg')} alt="icon-email" />
            help@eaf.fund
          </div>
        </div>
      </div>

      <div className="fund-contacts-form">
        <div className="fund-contacts-form-title">
          Форма зворотного зв'язку
        </div>

        <div className="fund-contacts-form-content">
          <form
            onSubmit={(e) => { handleSubmit(e) }}
            onInvalid={(e) => { handleInvalid(e) }}
            onInput={() => { handleInput() }}
          >
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name">Ім'я *</label>
                <TextField
                  fullWidth
                  required
                  name="name"
                  variant="outlined"
                  error={errors.name}
                  placeholder="Введіть ваше ім'я"
                  className={`form-group-input ${errors.name ? 'error' : ''}`}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  placeholder="Введіть ваш Email"
                  className="form-group-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Номер телефону *</label>
                <TextField
                  fullWidth
                  name="phone"
                  type="tel"
                  required
                  placeholder="Введіть ваш номер телефону"
                  className={`form-group-input ${errors.phone ? 'error' : ''}`}
                  error={errors.phone}
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="message">Ваше повідомлення *</label>
                <TextField
                  fullWidth
                  required
                  name="message"
                  multiline
                  rows={4}
                  placeholder="Введіть ваше повідомлення"
                  className={`form-group-input ${errors.message ? 'error' : ''}`}
                  error={errors.message}
                />
              </div>
            </div>

            {(errors.name || errors.phone || errors.message) && (
              <div className="form-group-error">
                Заповніть усі обов'язкові поля
              </div>
            )}

            <div className="form-group-submit">
              <CustomButton variant="primary" type="submit" className="submit-btn">
                Відправити
              </CustomButton>

              <div className="form-group-submit-additional-info">
                Натискаючи кнопку "Відправити", ви даєте усвідомлену <span> згоду на обробку своїх персональних даних </span> та погоджуєтеся з <span> політикою конфіденційності </span>.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FundContacts;