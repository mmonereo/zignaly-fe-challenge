import styles from './PhoneDetailComponent.module.css';
import {useLocation} from 'react-router-dom';

function PhoneDetailComponent() {

	const {phone} = useLocation().state;

	const { name, manufacturer, description, price, color, screen, processor, imageFileName, ram } = phone;

	return (
		<div className={styles.details_container}>
			<div className={styles.details_card}>
				<div>
					<h1>{name}</h1>
					<h2>By {manufacturer}</h2>
				</div>
				<div className={styles.details_info}>
					<div className={styles.details_img}>
						<img src={`/phones-img/${imageFileName}`} alt={name} />
					</div>
					<div className={styles.details_features}>
						<div className="phone-details-description">
							<p>{description}</p>
						</div>
						<ul>
							<li> <span>Price:</span> {price}€</li>
							<li> <span>Color:</span> {color}</li>
							<li> <span>Screen:</span> {screen}</li>
							<li> <span>Processor:</span> {processor}</li>
							<li> <span>RAM:</span> {ram}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PhoneDetailComponent;