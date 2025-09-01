import FundContacts from '../../sections/fundContacts';
import FundMap from '../../sections/fundMap';

import './style.css';

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <FundContacts />
      <FundMap />
    </div>
  );
};

export default ContactsPage; 