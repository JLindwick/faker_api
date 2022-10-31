
import express from "express";
import { faker } from '@faker-js/faker';
const app = express();
const port = 8000;

const createProduct = () => {  
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};

const createUser = () => {  
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};
    
const createCompany = () => {
    const newCompany ={
        _id: faker.datatype.uuid(),
        companyName: faker.company.name(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
    return newCompany;
}
const createCompanyUser = () => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany()
    const newCompanyUser =
        {
            user:newFakeUser,
            company:newFakeCompany
        }
    return newCompanyUser;
}
app.get("/api/product/new", (req, res) => {
    const newFakeProduct = createProduct();
    res.json({ newFakeProduct })

});
app.get("/api/user/new", (req, res) => {
    const newFakeUser = createUser();
    res.json({ newFakeUser })

});
app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    res.json({ newFakeCompany })

});
app.get("/api/user/company", (req, res) => {
    const newFakeCompanyUser = createCompanyUser();
    res.json({ newFakeCompanyUser })

});



app.listen( port, () => console.log(`Listening on port: ${port}`) );