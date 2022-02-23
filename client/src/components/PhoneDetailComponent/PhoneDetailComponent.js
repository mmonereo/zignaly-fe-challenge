import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

function PhoneDetailComponent() {

	const phoneId = useParams().id;

	const phone = useSelector((state) => state.phones.data.find(phone => phone.id === +phoneId));

	return (
		<div className="phone-detail-component">
			<div className="phone-detail-img">
				<img src={`phones-img/${phone.imageFileName}`} alt={phone.name} />
			</div>
			{phone?.name}
		</div>
	);
}

export default PhoneDetailComponent;