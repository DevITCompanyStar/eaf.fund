import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/ui/customButton";
import { getImagePath } from "../../utils/imagePath";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import './style.css';

const FundHelp = () => {
  const navigate = useNavigate();
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [openPartnerModal, setOpenPartnerModal] = useState(false);
  const [openVolunteerModal, setOpenVolunteerModal] = useState(false);

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
    if (target.name === 'company') newErrors.company = true;
    if (target.name === 'email') newErrors.email = true;
    if (target.name === 'website') newErrors.website = true;
    if (target.name === 'info') newErrors.info = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm(e.target as HTMLFormElement)) {
      // setIsModalOpen(true);
    }
  };


  const handleInvalid = (e: React.FormEvent<HTMLFormElement>) => {
    validateForm(e.target as HTMLFormElement);
  };

  const handleInput = () => {
    setErrors({});
  };

  return (
    <>
      <div className="fund-help">
        <div className="fund-help-title">
          <div className="secondary-text">Допомога</div>
          <h2>Підтримайте нас</h2>
          <div className="fund-help-title-description">
            Нижче Ви можете побачити кнопки, натиснув на які зможете допомогти, тим хто цього потребує. Допомога важлива різна. Ви можете допомогти коштами, можете зробити репост, можете стати частиною нашої команди чи стати нашим партнером.
          </div>
          <CustomButton variant="secondary" className="fund-help-title-button" onClick={() => setOpenVolunteerModal(true)}>+ Стати волонтером</CustomButton>
        </div>

        <div className="fund-help-buttons">
          <div className="fund-help-button-container" onClick={() => navigate('/payment')}>
            <div className="fund-help-button-container-img">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1771 6.93758C7.9937 6.93758 5.39583 9.53796 5.39583 12.767C5.39583 14.8179 6.59912 16.933 8.49772 19.1301C11.5911 22.7097 15.173 26.4504 18.5 29.5209C21.827 26.4504 25.4089 22.7097 28.5023 19.1301C30.4009 16.933 31.6042 14.8179 31.6042 12.767C31.6042 9.53796 29.0063 6.93758 25.8229 6.93758C24.4474 6.93758 23.1869 7.42004 22.1934 8.22926C21.1451 9.08314 20.5942 9.69658 20.288 10.0725C20.209 10.1695 20.1423 10.2556 20.0814 10.3353C20.0707 10.3492 20.0593 10.3642 20.0473 10.3799C19.9995 10.4426 19.943 10.5168 19.8944 10.5773C19.8421 10.6425 19.7236 10.789 19.5637 10.9226C19.4025 11.0571 19.0174 11.3329 18.4526 11.3218C17.8946 11.3108 17.5239 11.0261 17.3741 10.8947C17.2221 10.7613 17.1088 10.6165 17.0585 10.5518C16.9785 10.4488 16.9359 10.3905 16.8956 10.3355C16.8439 10.2647 16.7961 10.1994 16.6779 10.0516C16.3801 9.67931 15.8408 9.07161 14.8066 8.22926C13.8131 7.42004 12.5525 6.93758 11.1771 6.93758ZM2.3125 12.767C2.3125 7.85417 6.27179 3.85425 11.1771 3.85425C13.2894 3.85425 15.2319 4.599 16.7538 5.83861C17.5187 6.46163 18.0779 6.99718 18.4956 7.44457C18.9161 6.99933 19.4783 6.46406 20.2462 5.83861C21.7681 4.599 23.7106 3.85425 25.8229 3.85425C30.7282 3.85425 34.6875 7.85417 34.6875 12.767C34.6875 15.979 32.8437 18.822 30.8352 21.1461C27.5097 24.9943 23.6255 29.0329 20.0486 32.2836C19.17 33.0821 17.83 33.0821 16.9514 32.2836C13.3745 29.0329 9.49027 24.9943 6.16479 21.1461C4.15633 18.822 2.3125 15.979 2.3125 12.767Z" />
              </svg>
            </div>

            <div className="fund-help-button-container-text">
              <div className="fund-help-button-container-text-title">Грошова підтримка</div>
              <div className="fund-help-button-container-text-description">Ваша фінансова допомога — це реальна можливість забезпечити людей найнеобхіднішим: харчами, ліками, теплом чи безпекою. Донати дозволяють нам швидко реагувати на критичні потреби та масштабувати добрі справи.</div>
            </div>

            <div className="fund-help-button-container-arrow">
              <img src={getImagePath(`/arrow-right-angle.svg`)} alt="arrow-right-angle" />
            </div>
          </div>

          <div className="fund-help-button-container" onClick={() => setOpenInfoModal(true)}>
            <div className="fund-help-button-container-img">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8125 13.1041C20.8125 14.3812 19.7771 15.4166 18.5 15.4166C17.2228 15.4166 16.1875 14.3812 16.1875 13.1041C16.1875 11.8269 17.2228 10.7916 18.5 10.7916C19.7771 10.7916 20.8125 11.8269 20.8125 13.1041Z" fill="#1C9BE9" />
                <path d="M14.6458 26.2083V23.1249H16.9583V20.0416H15.4166V16.9583H18.5C19.3514 16.9583 20.0416 17.6485 20.0416 18.4999V23.1249H22.3541V26.2083H14.6458Z" fill="#1C9BE9" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 33.9166C9.98559 33.9166 3.08331 27.0143 3.08331 18.4999C3.08331 9.98553 9.98559 3.08325 18.5 3.08325C27.0144 3.08325 33.9166 9.98553 33.9166 18.4999C33.9166 27.0143 27.0144 33.9166 18.5 33.9166ZM18.5 30.8333C25.3115 30.8333 30.8333 25.3114 30.8333 18.4999C30.8333 11.6884 25.3115 6.16659 18.5 6.16659C11.6885 6.16659 6.16665 11.6884 6.16665 18.4999C6.16665 25.3114 11.6885 30.8333 18.5 30.8333Z" fill="#1C9BE9" />
              </svg>
            </div>

            <div className="fund-help-button-container-text">
              <div className="fund-help-button-container-text-title">Інформаційна підтримка</div>
              <div className="fund-help-button-container-text-description">Інформаційна підтримка — це сила спільноти, яка поширює важливі ініціативи, надихає, розповідає правду та привертає увагу до тих, хто її потребує.</div>
            </div>

            <div className="fund-help-button-container-arrow">
              <img src={getImagePath(`/arrow-right-angle.svg`)} alt="arrow-right-angle" />
            </div>
          </div>

          <div className="fund-help-button-container" onClick={() => setOpenPartnerModal(true)}>
            <div className="fund-help-button-container-img">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6126 7.41534C22.9862 6.12496 25.1338 5.80892 26.8142 6.65221L32.0112 9.25146H37V6.16813H32.7388L28.194 3.89417C25.382 2.48663 21.7915 3.00925 19.4975 5.17067L18.5447 6.06792L17.4655 5.08434C16.0487 3.79396 14.2142 3.08325 12.2393 3.08325C11.0507 3.08325 9.86512 3.36384 8.806 3.89263L4.25962 6.16659H0V9.24992H4.98883L10.1873 6.65067C11.7629 5.85825 13.9768 6.07254 15.3889 7.36292L16.2939 8.18771L12.2146 12.0295C10.5604 13.6822 10.2968 16.2953 11.601 18.1006C12.4027 19.2153 13.7578 20.0416 15.3689 20.0416C16.5914 20.0416 17.7646 19.5606 18.6125 18.7111L20.1635 17.2265L29.9423 24.5602L18.5 33.1165L5.13837 23.1249H0V26.2083H4.11163L18.5 36.9675L32.8884 26.2083H37V23.1249H33.1659L22.4205 15.0666L25.0228 12.5753L22.8907 10.3476L16.4573 16.5065C16.1366 16.8272 15.7003 16.9922 15.2425 16.9536C14.783 16.9166 14.3791 16.6838 14.1032 16.2984C13.6807 15.7126 13.8102 14.7953 14.3622 14.2418L21.6126 7.41534Z" fill="#1C9BE9" />
              </svg>
            </div>

            <div className="fund-help-button-container-text">
              <div className="fund-help-button-container-text-title">Партнерство та співробітництво</div>
              <div className="fund-help-button-container-text-description">Ми відкриті до співпраці з волонтерами, благодійниками, бізнесами, громадськими організаціями та ініціативними людьми.</div>
            </div>

            <div className="fund-help-button-container-arrow">
              <img src={getImagePath(`/arrow-right-angle.svg`)} alt="arrow-right-angle" />
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={openInfoModal || openPartnerModal || openVolunteerModal}
        onClose={() => { setOpenInfoModal(false), setOpenPartnerModal(false), setOpenVolunteerModal(false) }}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {openInfoModal ? (
          <div className="fund-info-modal">
            <h2>Інформаційна підтримка</h2>
            <h5>
              Нижче ви можете підтримати нас, поділившись посиланням на наш сайт в соціальних мережах. Чим більше людей дізнається про нас, тим більше людей зможуть отримати допомогу.
            </h5>
            <h3>Поділитися</h3>
            <div className="fund-info-modal-share-buttons">
              <CustomButton variant="primary" className="fund-info-modal-share-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.99969 0.0610352C15.5222 0.0610352 19.9997 4.5377 19.9997 10.061C19.9996 15.0518 16.3382 19.1891 11.5583 19.9399V12.9712H13.8825L14.3249 10.0874H11.5583V8.21631C11.5584 7.4273 11.9452 6.65969 13.1833 6.65967H14.4411V4.20459C14.4411 4.20459 13.2994 4.00932 12.2087 4.00928C9.93036 4.00928 8.4421 5.39002 8.44208 7.88916V10.0864H5.90887V12.9702H8.44208V19.939C3.66296 19.1873 -0.000226225 15.051 -0.000305176 10.061C-0.000305176 4.53864 4.47734 0.0612101 9.99969 0.0610352Z" fill="#FFFFFF" />
                </svg>

                Facebook
              </CustomButton>
              <CustomButton variant="primary" className="fund-info-modal-share-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0349 2.98961C12.6873 1.43545 15.2863 1.51583 16.8405 3.16832C17.7597 2.98749 18.6411 2.64973 19.447 2.17223C19.1403 3.12223 18.4989 3.92843 17.6423 4.44176C18.4564 4.34427 19.2506 4.1269 19.9997 3.79528C19.4489 4.61931 18.756 5.33852 17.9528 5.9193C17.9645 6.0951 17.9645 6.27211 17.9645 6.44957C17.9645 11.8721 13.8354 18.1244 6.28876 18.1244V18.1215C4.05974 18.1247 1.87624 17.4867 -0.000305176 16.2826C0.32372 16.3217 0.649734 16.3403 0.976257 16.3412C2.82459 16.3428 4.62044 15.7231 6.07294 14.5814C4.31722 14.5481 2.77655 13.4033 2.23895 11.7318C2.85388 11.8501 3.48739 11.8256 4.09149 11.6615C2.17663 11.2748 0.800555 9.59224 0.800476 7.63903V7.58727C1.37121 7.90547 2.00959 8.08178 2.66278 8.10094C0.859592 6.89687 0.30248 4.49834 1.3913 2.6234C3.47462 5.18671 6.54919 6.74467 9.84833 6.91051C9.51751 5.48554 9.96989 3.99211 11.0349 2.98961Z" fill="#FFFFFF" />
                </svg>

                Twitter
              </CustomButton>
              <CustomButton variant="primary" className="fund-info-modal-share-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5447 1.68482C12.562 1.81704 14.4627 2.67812 15.8923 4.10767C17.3219 5.53725 18.1829 7.43792 18.3152 9.45533C18.4473 11.4726 17.8418 13.4696 16.6111 15.0735C15.3803 16.6772 13.6084 17.7787 11.6257 18.1731C9.8166 18.5329 7.87682 18.4396 6.15795 17.5647L2.32299 18.7151C2.02935 18.8032 1.71066 18.7229 1.49389 18.5061C1.27715 18.2893 1.19682 17.9706 1.2849 17.677L2.43529 13.842C1.56047 12.1232 1.46704 10.1834 1.82689 8.37427C2.22132 6.39139 3.32353 4.61967 4.92748 3.38892C6.53129 2.15834 8.52748 1.5527 10.5447 1.68482ZM10.4363 3.3479C8.82243 3.24213 7.22525 3.72669 5.94213 4.71118C4.65897 5.69579 3.7772 7.11316 3.46166 8.69947C3.13441 10.3447 3.27317 11.9784 4.05541 13.3333L4.2351 13.6448L3.32592 16.6741L6.35521 15.7649L6.66674 15.9446C8.0216 16.7268 9.65536 16.8656 11.3005 16.5383C12.8867 16.2228 14.3042 15.3418 15.2888 14.0588C16.2734 12.7757 16.7579 11.1777 16.6521 9.56372C16.5463 7.95012 15.8579 6.42992 14.7146 5.28638C13.571 4.14276 12.0501 3.45373 10.4363 3.3479ZM7.08373 5.83326C7.39924 5.83339 7.68774 6.01198 7.82885 6.29419L8.66185 7.96021C8.82227 8.28103 8.75924 8.66947 8.5056 8.9231L8.07494 9.35376C8.10493 9.41259 8.13905 9.47579 8.1765 9.54322C8.40703 9.95816 8.77954 10.5173 9.33959 11.0774C9.86269 11.6005 10.3715 11.8497 10.7322 11.97C10.8037 11.9938 10.87 12.0127 10.9294 12.0276L11.5681 11.3176C11.8263 11.0307 12.2478 10.959 12.5867 11.1438L13.7322 11.7688C13.977 11.9024 14.1394 12.1492 14.1638 12.427C14.1882 12.7048 14.0719 12.9764 13.8542 13.1506L13.8523 13.1526L13.8494 13.1545L13.8415 13.1604L13.8171 13.179C13.7974 13.1941 13.7702 13.2154 13.7371 13.2395C13.6714 13.2873 13.578 13.352 13.4704 13.4182C13.3651 13.483 13.2313 13.5581 13.0857 13.6194C12.9535 13.675 12.7414 13.7502 12.4997 13.7502C12.168 13.7669 11.9921 13.7733 11.6667 13.7668C11.5562 13.7647 11.4185 13.7613 11.2624 13.7502H11.2331L11.2087 13.7493C11.1901 13.7487 11.1665 13.7472 11.1384 13.7454C11.0823 13.7416 11.0079 13.7348 10.9177 13.7219C10.7372 13.6961 10.4918 13.6467 10.2048 13.551C9.62807 13.3587 8.88747 12.9827 8.16088 12.2561C7.47098 11.5662 7.00979 10.8753 6.71947 10.3528C6.57418 10.0913 6.47067 9.87021 6.40209 9.71021C6.36785 9.63033 6.34186 9.56518 6.32396 9.51783L6.3142 9.49048C6.30103 9.46319 6.28276 9.4253 6.26146 9.37915C6.21819 9.2854 6.16013 9.15415 6.10131 9.00708C6.0432 8.8618 5.97997 8.69028 5.93041 8.51685C5.88444 8.35596 5.83373 8.13688 5.83373 7.91626C5.8338 7.6958 5.88447 7.47744 5.93041 7.31665C5.97996 7.14324 6.0432 6.9717 6.10131 6.82642C6.16011 6.67941 6.2182 6.5481 6.26146 6.45435C6.28325 6.40716 6.30194 6.36848 6.31518 6.34107L6.3308 6.30884L6.33568 6.29908L6.33666 6.29615L6.33764 6.29517C6.4788 6.01285 6.76809 5.83326 7.08373 5.83326Z" fill="#FFFFFF" />
                </svg>


                WhatsApp
              </CustomButton>
              <CustomButton variant="primary" className="fund-info-modal-share-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9022 4.16613C16.5535 4.15692 16.71 4.69765 16.6571 5.25305C16.45 7.44826 15.5496 12.7771 15.0927 15.2364C14.8993 16.278 14.5176 16.6267 14.1493 16.6603C13.3473 16.7342 12.7385 16.1268 11.9618 15.6154C10.7466 14.8145 10.0593 14.3156 8.87978 13.5333C7.51634 12.6296 8.3999 12.1326 9.17666 11.3214C9.38153 11.1074 12.9116 7.87817 12.9823 7.5841C12.9904 7.54707 12.9995 7.41074 12.9179 7.33898C12.8362 7.26723 12.7179 7.29099 12.6327 7.31066C12.5107 7.33844 10.5694 8.62891 6.80751 11.1818C6.25645 11.5624 5.75703 11.7475 5.30947 11.7384C4.81694 11.728 3.86842 11.4581 3.16298 11.2267C2.29905 10.9444 1.61055 10.7942 1.66982 10.3155C1.70089 10.0656 2.04351 9.80951 2.69716 9.54797C6.72237 7.78444 9.4069 6.62114 10.7499 6.05871C14.5855 4.45476 15.3821 4.17539 15.9022 4.16613Z" fill="#FFFFFF" />
                </svg>


                Telegram
              </CustomButton>
            </div>
          </div>
        ) : openPartnerModal ? (
          <div className="fund-partner-modal">
            <h2>Форма партнерства та співробітництва</h2>
            <form
              onSubmit={(e) => { handleSubmit(e) }}
              onInvalid={(e) => { handleInvalid(e) }}
              onInput={() => { handleInput() }}
            >
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
                <label htmlFor="company">Назва компанії *</label>
                <TextField
                  fullWidth
                  required
                  name="company"
                  variant="outlined"
                  error={errors.company}
                  placeholder="Введіть назву вашої компанії"
                  className={`form-group-input ${errors.company ? 'error' : ''}`}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <TextField
                  fullWidth
                  required
                  name="email"
                  type="email"
                  error={errors.email}
                  placeholder="Введіть ваш Email"
                  className={`form-group-input ${errors.email ? 'error' : ''}`}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Номер телефону *</label>
                <TextField
                  fullWidth
                  required
                  name="phone"
                  type="tel"
                  placeholder="Введіть ваш номер телефону"
                  className={`form-group-input ${errors.phone ? 'error' : ''}`}
                  error={errors.phone}
                />
              </div>

              <div className="form-group">
                <label htmlFor="website">Ваш сайт або соціальна мережа *</label>
                <TextField
                  fullWidth
                  name="website"
                  type="url"
                  required
                  placeholder="Введіть ваш сайт або соціальну мережу"
                  className={`form-group-input ${errors.website ? 'error' : ''}`}
                  error={errors.website}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Інформація про вас або вашу компанію *</label>
                <TextField
                  fullWidth
                  required
                  name="info"
                  multiline
                  rows={4}
                  placeholder="Розкажіть про себе або вашу компанію"
                  className={`form-group-input ${errors.info ? 'error' : ''}`}
                  error={errors.info}
                />
              </div>

              {(errors.name || errors.company || errors.email || errors.phone || errors.website || errors.info) && (
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
        ) : (
          <div className="fund-volunteer-modal">
            <h2>Бажаєте стати волонтером?</h2>
            <h3>Залиште заявку</h3>
            <form
              onSubmit={(e) => { handleSubmit(e) }}
              onInvalid={(e) => { handleInvalid(e) }}
              onInput={() => { handleInput() }}
            >
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
                <label htmlFor="name">Призвіще *</label>
                <TextField
                  fullWidth
                  required
                  name="surname"
                  variant="outlined"
                  error={errors.surname}
                  placeholder="Введіть ваше призвіще"
                  className={`form-group-input ${errors.surname ? 'error' : ''}`}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <TextField
                  fullWidth
                  required
                  name="email"
                  type="email"
                  error={errors.email}
                  placeholder="Введіть ваш Email"
                  className={`form-group-input ${errors.email ? 'error' : ''}`}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Номер телефону *</label>
                <TextField
                  fullWidth
                  required
                  name="phone"
                  type="tel"
                  placeholder="Введіть ваш номер телефону"
                  className={`form-group-input ${errors.phone ? 'error' : ''}`}
                  error={errors.phone}
                />
              </div>

              <div className="form-group">
                <label htmlFor="socialMedia">Посилання на соціальні мережі *</label>
                <TextField
                  fullWidth
                  required
                  name="socialMedia"
                  variant="outlined"
                  multiline
                  rows={3}
                  error={errors.socialMedia}
                  placeholder="Введіть посилання на вашу соціальні мережі для зв'язку"
                  className={`form-group-input ${errors.socialMedia ? 'error' : ''}`}
                />
              </div>


              {(errors.name || errors.surname || errors.socialMedia || errors.email || errors.phone) && (
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
        )}
      </Modal>
    </>
  )
}

export default FundHelp;