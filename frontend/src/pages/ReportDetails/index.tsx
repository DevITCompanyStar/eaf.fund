import { useParams } from 'react-router-dom';
import { reports } from '../../data';
import './style.css';
import { getImagePath } from '../../utils/imagePath';
import CustomButton from '../../components/ui/customButton';
import FundReports from '../../sections/fundReports';

const spreadImages = (images: string[]) => {
  const numberOfRows = [...Array(Math.ceil(images.length / 3))];
  const spreadedImages: (string | null)[][] = [];
  console.log(`numberOfRows`, numberOfRows);

  for (let i = 0; i < numberOfRows.length; i++) {
    spreadedImages[i] = [];
    for (let j = 0; j < 3; j++) {
      console.log(`image ${i * 3 + j}`, images[i * 3 + j]);
      if (images[i * 3 + j]) {
        spreadedImages[i].push(images[i * 3 + j]);
      } else {
        spreadedImages[i].push(null);
      }
    }
  }
  
  return {spreadedImages, numberOfRows};
}

const ReportDetails = () => {
  const { id } = useParams();
  const report = reports.find((report) => report.id === parseInt(id as string));
  
  const { spreadedImages, numberOfRows } = spreadImages(report?.additionalImg as string[]);
  
  return (
    <div className="report-details">
      <div className="report-details-header">
        <div className="report-details-header-title">
          <CustomButton variant="secondary" className="report-details-header-title-button">
            Звітність
          </CustomButton>
          <div className="report-details-header-title-date">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66667 0V1.33333H7.33333V0H8.66667V1.33333H11.3333C11.7015 1.33333 12 1.63181 12 2V11.3333C12 11.7015 11.7015 12 11.3333 12H0.666667C0.298477 12 0 11.7015 0 11.3333V2C0 1.63181 0.298477 1.33333 0.666667 1.33333H3.33333V0H4.66667ZM10.666 6.66667H1.33267L1.33333 10.6667H10.6667L10.666 6.66667ZM8.66667 8C9.03486 8 9.33333 8.29848 9.33333 8.66667C9.33333 9.03486 9.03486 9.33333 8.66667 9.33333C8.29848 9.33333 8 9.03486 8 8.66667C8 8.29848 8.29848 8 8.66667 8ZM3.33333 2.66667H1.33333L1.33267 5.33333H10.666L10.6667 2.66667H8.66667V4H7.33333V2.66667H4.66667V4H3.33333V2.66667Z" fill="#7B7F8E" />
            </svg>
            {report?.date}
          </div>
          <h2>
            {report?.title}
          </h2>
        </div>

        <div className="report-details-header-title-img">
          <img src={getImagePath(report?.titleImg as string)} alt={report?.title} />
        </div>
      </div>

      <div className="report-details-content">
        <div className="report-details-content-img">
          <img src={getImagePath(report?.titleImg as string)} alt={report?.title} />
        </div>

        <div className="report-details-content-description">
          {report?.description.map((description) => (
            <div className='text-m'>{description}</div>
          ))}
        </div>

        <div className="report-details-content-additional-video">
          {report?.video && (
            <video src={getImagePath(report?.video as string)} controls />
          )}
        </div>

        <div className="report-details-content-additional-img">
          {numberOfRows.map((_, indexOfRow) => (
            <div className="report-details-content-additional-img-row">
              {spreadedImages[indexOfRow].map((img) => (
                img && <img src={getImagePath(img as string)} alt={report?.title} />
              ))}
            </div>
          ))}
        </div>

        <div className="report-details-content-share-container">
          <h5>Поділитися</h5>
          <div className="report-details-content-share-container-buttons-list">
            <CustomButton variant="secondary" className="report-details-content-share-container-buttons-list-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99969 0.0610352C15.5222 0.0610352 19.9997 4.5377 19.9997 10.061C19.9996 15.0518 16.3382 19.1891 11.5583 19.9399V12.9712H13.8825L14.3249 10.0874H11.5583V8.21631C11.5584 7.4273 11.9452 6.65969 13.1833 6.65967H14.4411V4.20459C14.4411 4.20459 13.2994 4.00932 12.2087 4.00928C9.93036 4.00928 8.4421 5.39002 8.44208 7.88916V10.0864H5.90887V12.9702H8.44208V19.939C3.66296 19.1873 -0.000226225 15.051 -0.000305176 10.061C-0.000305176 4.53864 4.47734 0.0612101 9.99969 0.0610352Z" fill="#2B384C" />
              </svg>
              Facebook
            </CustomButton>

            <CustomButton variant="secondary" className="report-details-content-share-container-buttons-list-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0349 2.98961C12.6873 1.43545 15.2863 1.51583 16.8405 3.16832C17.7597 2.98749 18.6411 2.64973 19.447 2.17223C19.1403 3.12223 18.4989 3.92843 17.6423 4.44176C18.4564 4.34427 19.2506 4.1269 19.9997 3.79528C19.4489 4.61931 18.756 5.33852 17.9528 5.9193C17.9645 6.0951 17.9645 6.27211 17.9645 6.44957C17.9645 11.8721 13.8354 18.1244 6.28876 18.1244V18.1215C4.05974 18.1247 1.87624 17.4867 -0.000305176 16.2826C0.32372 16.3217 0.649734 16.3403 0.976257 16.3412C2.82459 16.3428 4.62044 15.7231 6.07294 14.5814C4.31722 14.5481 2.77655 13.4033 2.23895 11.7318C2.85388 11.8501 3.48739 11.8256 4.09149 11.6615C2.17663 11.2748 0.800555 9.59224 0.800476 7.63903V7.58727C1.37121 7.90547 2.00959 8.08178 2.66278 8.10094C0.859592 6.89687 0.30248 4.49834 1.3913 2.6234C3.47462 5.18671 6.54919 6.74467 9.84833 6.91051C9.51751 5.48554 9.96989 3.99211 11.0349 2.98961Z" fill="#2B384C" />
              </svg>
              Twitter
            </CustomButton>

            <CustomButton variant="secondary" className="report-details-content-share-container-buttons-list-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5447 1.68482C12.562 1.81704 14.4627 2.67812 15.8923 4.10767C17.3219 5.53725 18.1829 7.43792 18.3152 9.45533C18.4473 11.4726 17.8418 13.4696 16.6111 15.0735C15.3803 16.6772 13.6084 17.7787 11.6257 18.1731C9.8166 18.5329 7.87682 18.4396 6.15795 17.5647L2.32299 18.7151C2.02935 18.8032 1.71066 18.7229 1.49389 18.5061C1.27715 18.2893 1.19682 17.9706 1.2849 17.677L2.43529 13.842C1.56047 12.1232 1.46704 10.1834 1.82689 8.37427C2.22132 6.39139 3.32353 4.61967 4.92748 3.38892C6.53129 2.15834 8.52748 1.5527 10.5447 1.68482ZM10.4363 3.3479C8.82243 3.24213 7.22525 3.72669 5.94213 4.71118C4.65897 5.69579 3.7772 7.11316 3.46166 8.69947C3.13441 10.3447 3.27317 11.9784 4.05541 13.3333L4.2351 13.6448L3.32592 16.6741L6.35521 15.7649L6.66674 15.9446C8.0216 16.7268 9.65536 16.8656 11.3005 16.5383C12.8867 16.2228 14.3042 15.3418 15.2888 14.0588C16.2734 12.7757 16.7579 11.1777 16.6521 9.56372C16.5463 7.95012 15.8579 6.42992 14.7146 5.28638C13.571 4.14276 12.0501 3.45373 10.4363 3.3479ZM7.08373 5.83326C7.39924 5.83339 7.68774 6.01198 7.82885 6.29419L8.66185 7.96021C8.82227 8.28103 8.75924 8.66947 8.5056 8.9231L8.07494 9.35376C8.10493 9.41259 8.13905 9.47579 8.1765 9.54322C8.40703 9.95816 8.77954 10.5173 9.33959 11.0774C9.86269 11.6005 10.3715 11.8497 10.7322 11.97C10.8037 11.9938 10.87 12.0127 10.9294 12.0276L11.5681 11.3176C11.8263 11.0307 12.2478 10.959 12.5867 11.1438L13.7322 11.7688C13.977 11.9024 14.1394 12.1492 14.1638 12.427C14.1882 12.7048 14.0719 12.9764 13.8542 13.1506L13.8523 13.1526L13.8494 13.1545L13.8415 13.1604L13.8171 13.179C13.7974 13.1941 13.7702 13.2154 13.7371 13.2395C13.6714 13.2873 13.578 13.352 13.4704 13.4182C13.3651 13.483 13.2313 13.5581 13.0857 13.6194C12.9535 13.675 12.7414 13.7502 12.4997 13.7502C12.168 13.7669 11.9921 13.7733 11.6667 13.7668C11.5562 13.7647 11.4185 13.7613 11.2624 13.7502H11.2331L11.2087 13.7493C11.1901 13.7487 11.1665 13.7472 11.1384 13.7454C11.0823 13.7416 11.0079 13.7348 10.9177 13.7219C10.7372 13.6961 10.4918 13.6467 10.2048 13.551C9.62807 13.3587 8.88747 12.9827 8.16088 12.2561C7.47098 11.5662 7.00979 10.8753 6.71947 10.3528C6.57418 10.0913 6.47067 9.87021 6.40209 9.71021C6.36785 9.63033 6.34186 9.56518 6.32396 9.51783L6.3142 9.49048C6.30103 9.46319 6.28276 9.4253 6.26146 9.37915C6.21819 9.2854 6.16013 9.15415 6.10131 9.00708C6.0432 8.8618 5.97997 8.69028 5.93041 8.51685C5.88444 8.35596 5.83373 8.13688 5.83373 7.91626C5.8338 7.6958 5.88447 7.47744 5.93041 7.31665C5.97996 7.14324 6.0432 6.9717 6.10131 6.82642C6.16011 6.67941 6.2182 6.5481 6.26146 6.45435C6.28325 6.40716 6.30194 6.36848 6.31518 6.34107L6.3308 6.30884L6.33568 6.29908L6.33666 6.29615L6.33764 6.29517C6.4788 6.01285 6.76809 5.83326 7.08373 5.83326Z" fill="#2B384C" />
              </svg>
              WhatsApp
            </CustomButton>

            <CustomButton variant="secondary" className="report-details-content-share-container-buttons-list-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9022 4.16613C16.5535 4.15692 16.71 4.69765 16.6571 5.25305C16.45 7.44826 15.5496 12.7771 15.0927 15.2364C14.8993 16.278 14.5176 16.6267 14.1493 16.6603C13.3473 16.7342 12.7385 16.1268 11.9618 15.6154C10.7466 14.8145 10.0593 14.3156 8.87978 13.5333C7.51634 12.6296 8.3999 12.1326 9.17666 11.3214C9.38153 11.1074 12.9116 7.87817 12.9823 7.5841C12.9904 7.54707 12.9995 7.41074 12.9179 7.33898C12.8362 7.26723 12.7179 7.29099 12.6327 7.31066C12.5107 7.33844 10.5694 8.62891 6.80751 11.1818C6.25645 11.5624 5.75703 11.7475 5.30947 11.7384C4.81694 11.728 3.86842 11.4581 3.16298 11.2267C2.29905 10.9444 1.61055 10.7942 1.66982 10.3155C1.70089 10.0656 2.04351 9.80951 2.69716 9.54797C6.72237 7.78444 9.4069 6.62114 10.7499 6.05871C14.5855 4.45476 15.3821 4.17539 15.9022 4.16613Z" fill="#2B384C" />
              </svg>
              Telegram
            </CustomButton>
          </div>
        </div>
      </div>

      <FundReports isOthers={true} />
    </div>
  );
};

export default ReportDetails;