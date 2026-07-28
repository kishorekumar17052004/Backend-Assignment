const Products = []

export const postProducts = async(req,res)=>{
    try {
        const data = req.body
        Products.push(...(Array.isArray(data) ? data : [data]))

        res.status(201).json({
            message:"Products Create Successfully ",
            Products : Products
        })


    } catch (error) {
        res.status(500).json({message:"NO user register"})
    }
}

export const getProducts = async(req,res)=>{
    try {
        res.status(200).json({
            message:"All Products",
            Products : Products

        })
    } catch (error) {
        res.status(500).json({message:"NO products"})
    }
}
