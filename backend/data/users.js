import bcrypt from 'bcryptjs'

const users =
[
    {
    name: 'Admin User',
    email: 'example@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
{
    name: 'john Wick',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('123456', 10),
},
{
    name: 'Jane Wick',
    email: 'jane@gmail.com',
    password: bcrypt.hashSync('123456', 10),
},
]


export default users