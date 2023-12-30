import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

class PaymentScreen extends Component {
    handlePayment = () => {
        const options = {
            description: 'Sample Payment',
            image: 'https://zeevector.com/wp-content/uploads/Google-Pay-Symbol.png',
            currency: 'INR',
            key: 'rzp_test_MsmTvxTjeZV6B4',
            amount: '10000',
            name: 'Your Company Name',
            prefill: {
                email: 'test@example.com',
                contact: '9876543210',
                name: 'John Doe',
            },
            theme: { color: '#F37254' },
        };

        RazorpayCheckout.open(options)
            .then((data) => {
                // Handle success
                console.log(`Payment success: ${data.razorpay_payment_id}`);
            })
            .catch((error) => {
                // Handle error
                console.log(`Payment error: ${error.code} | ${error.description}`);
            });
    };

    render() {
        return (
            <TouchableOpacity onPress={this.handlePayment}>
                <Text>Pay Now</Text>
            </TouchableOpacity>
        );
    }
}

export default PaymentScreen;
