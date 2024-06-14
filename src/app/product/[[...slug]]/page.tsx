type DetailProductPageProps = { params: { slug: string[] } };

export default function DetailProductPage(props: DetailProductPageProps) {
    const { params } = props;
    console.log(params)
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1>
            {params.slug && 
                <>
                    <p>Category : {params.slug[0]}</p>
                    <p>Gender : {params.slug[1]}</p>
                    <p>Id : {params.slug[2]}</p>
                </>
            }
        </div>
    )
}