import styles from './PhoneListContainer.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPhones, selectAllPhones } from '../../features/phones/phonesSlice';
import { useEffect } from 'react';
import PhoneListItem from '../PhoneListItem/PhoneListItem';
import Spinner from '../Spinner/Spinner';


function PhoneListContainer(){

	const phones = useSelector(selectAllPhones);
	const loading = useSelector(state => state.phones.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPhones());
	}, [dispatch]);

	if (loading) return <Spinner />;

	return(
		<>
			<h2>Phones</h2>
			<div className={styles.phone_list_container}>
				{phones.map(phone => <PhoneListItem key={phone.id} phone={phone} />)}
			</div>
		</>
	);
}

export default PhoneListContainer;