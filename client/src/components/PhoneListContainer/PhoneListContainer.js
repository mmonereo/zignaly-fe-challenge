import { useSelector, useDispatch } from 'react-redux';
import { getPhones, selectAllPhones } from '../../features/phones/phonesSlice';
import { useEffect } from 'react';
import PhoneListItem from '../PhoneListItem/PhoneListItem';


function PhoneListContainer(){

	const phones = useSelector(selectAllPhones);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPhones());
	}, [dispatch]);

	if (phones.loading) return <div>Loading...</div>;

	return(
		<div className="phone-list-container">
			<h2>Phones</h2>
			{phones.map(phone => <PhoneListItem key={phone.id} phone={phone} />)}
		</div>
	);
}

export default PhoneListContainer;