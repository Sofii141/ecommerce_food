import productSchema from '../model/Product.js'

export const uploadProduct = async (req, res) => {
    try {
        console.log(req.body);
        res.send({message: 'Upload succesfully'});

        const product = productSchema(req.body);
        const productSave = await product.save(); 

        console.log(productSave);

    } catch (error) {
        console.log(error);
    }
};


export const getProducts = async (req, res) => {
    const products = await productSchema.find({});
    res.send(products);
};