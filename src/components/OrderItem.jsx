import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	};

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} alt={product?.title} width={100} height={100} />
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image className="pointer more-clickable-area" src={close} alt="close" width={100} height={100} onClick={() => handleRemove(product)} />
		</div>
	);
};

export default OrderItem;