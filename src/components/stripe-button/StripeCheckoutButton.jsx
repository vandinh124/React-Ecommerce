import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    //stripe wants price in cents
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51H08IjDsqlFMrfDKxOCa93e4nYdK4B5SZyQnrffUHcgkvEAGNQ0DrRUFQxpy80lbUzJDPYC7wNhYBBDozwUMbeSg0033tCIsKR'

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeButton;