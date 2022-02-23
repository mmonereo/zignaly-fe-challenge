import {Link} from 'react-router-dom';

function PhoneListItem({phone}){
	return(
		<div className="phone-list-item">
			<div className="item-img">
				<img src={`phones-img/${phone.imageFileName}`} alt={phone.name} />
			</div>
			<div className="item-header">
				<h3>{phone.name}</h3>
			</div>
			<div className="item-details-btn">
				<Link to={`/details/${phone.id}`}>
					<button>Details</button>
				</Link>
			</div>
		</div>
	)
}

export default PhoneListItem;