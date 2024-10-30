"use client"

import Link from "next/link";
import { buttonVariants } from "./ui/button";

type PaymentLinksProps = {
    href: string;
    paymentLink?:string;
    text: string;
}

const PaymentLinks = ({href, paymentLink, text}: PaymentLinksProps) => {
  return (
    <Link href={href} className={buttonVariants()} onClick={() => {
        if(paymentLink) {
            localStorage.setItem("stripePaymentLink", paymentLink)
        }
    }} >
        {text}
    </Link>
  )
}

export default PaymentLinks