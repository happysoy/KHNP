import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { RHFSwitch } from 'src/components/hook-form';

const PAYMENT_OPTIONS = [
  {
    value: 'paypal',
    title: 'Pay with Paypal',
    description: 'You will be redirected to PayPal website to complete your purchase securely.',
    icons: ['https://minimal-assets-api-dev.vercel.app/assets/icons/ic_paypal.svg'],
  },
  {
    value: 'credit_card',
    title: 'Credit / Debit Card',
    description: 'We support Mastercard, Visa, Discover and Stripe.',
    icons: [
      'https://minimal-assets-api-dev.vercel.app/assets/icons/ic_mastercard.svg',
      'https://minimal-assets-api-dev.vercel.app/assets/icons/ic_visa.svg',
    ],
  },
  {
    value: 'cash',
    title: 'Cash on CheckoutDelivery',
    description: 'Pay with cash when your order is delivered.',
    icons: [],
  },
];

const OptionStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2.5),
  justifyContent: 'space-between',
  transition: theme.transitions.create('all'),
  border: `solid 1px ${theme.palette.divider}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
}));

export default function VerificationMethod() {
  const { control } = useFormContext();

  return (
    <Controller
      name="verification"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <RadioGroup row {...field}>
            <Stack>
              <FormControlLabel control={<RHFSwitch name="yaho" label="yaho" />} />
            </Stack>
          </RadioGroup>
        </>
      )}
    />
  );
}
