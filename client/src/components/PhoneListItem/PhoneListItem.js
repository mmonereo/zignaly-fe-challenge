import styles from './PhoneListItem.module.css';
import {Link} from 'react-router-dom';

function PhoneListItem({phone}){
	return(
		<div className={styles.phone_list_item}>
			<div className={styles.item_img}>
				<img src={`phones-img/${phone.imageFileName}`} alt={phone.name} />
			</div>
			<div className="item-header">
				<h3>{phone.name}</h3>
			</div>
			<div>
				<Link to={`/details/${phone.id}`} state={{phone}}>
					<button className={styles.btn_details}>
						Details
					</button>
				</Link>
			</div>
		</div>
	)
}

export default PhoneListItem;