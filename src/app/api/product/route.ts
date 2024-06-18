import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: "Nike Air Max 97",
        price: 2389000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3703a3c3-64f0-45be-a06b-b177cc63fda7/air-max-97-shoes-EBZrb8.png"
    },
    {
        id: 2,
        name: "Nike Court Vision Low",
        price: 1199000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ff3766b5-59dd-4b9e-b755-751a3785d64d/court-vision-low-shoes-nRP2tZ.png"
    },
    {
        id: 3,
        name: "Nike P-6000",
        price: 1429000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24677ace-081d-4ae4-9ec7-6887c682a40e/p-6000-shoes-QcQbpx.png"
    },
    {
        id: 4,
        name: "Nike P-6000 Copy",
        price: 1429000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24677ace-081d-4ae4-9ec7-6887c682a40e/p-6000-shoes-QcQbpx.png"
    },
    {
        id: 5,
        name: "Nike P-6000 Copy 2",
        price: 1429000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24677ace-081d-4ae4-9ec7-6887c682a40e/p-6000-shoes-QcQbpx.png"
    }
]

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if (detailProduct) {
            return NextResponse.json({ status: 200, message: "Success", data: detailProduct })
        }
        return NextResponse.json({ status: 404, message: "Not Found", data: {} })
    }

    return NextResponse.json({ status: 200, message: "Success", data })
}