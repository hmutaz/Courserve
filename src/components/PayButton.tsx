"use client"

import { pay } from '@/actions/pay';
import { ShoppingCart } from 'lucide-react';

interface Props {
    userid: string | undefined;
    courseid: string;
    gross_amount: number;
}

const PayButton = ({userid, courseid, gross_amount}: Props) => {
    const handleClick = async () => {
        const res = await pay(userid, courseid, gross_amount)
        const url = "https://app.sandbox.midtrans.com/snap/v4/redirection/" + res
        window.open(url, '_blank')
    }

    return (
        <button onClick={handleClick} className="flex p-2 gap-4 rounded-[10px] items-center justify-center bg-black text-white hover:scale-105 duration-100">
            <ShoppingCart />
            Beli Sekarang
        </button>
    );
}

export default PayButton;