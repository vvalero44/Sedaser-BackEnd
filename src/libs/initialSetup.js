/*
En este documento se crean nuevos roles en caso de que no exitan en la base de datos
*/
//========================================================================================
//IMPORTACIONES
import Role from "../models/Role";
import User from "../models/User";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount(); //=> Cuenta la cantidad de docmentos que se encuentran en la coleccion

    if (count > 0) return; //=> En el caso de que exista algun documento, No hace nada, en caso contrario, crea los 3 docuemntos de a bajo

    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (err) {
    console.error(err);
  }
};

export const createNativeUsers = async () => {
  try {
    const count = await User.estimatedDocumentCount(); //=> Cuenta la cantidad de docmentos que se encuentran en la coleccion

    if (count > 0) return; //=> En el caso de que exista algun documento, No hace nada, en caso contrario, crea los 3 docuemntos de a bajo

    const values = await Promise.all([
      new User({
        username: "NativeUser",
        email: "NativeUser@gmail.com",
        password: await User.encryptPassword("NativeUser"),
        roles: "62727ea2570fd369b2d499a0",
      }).save(),
      new User({
        username: "NativeAdmin",
        email: "NativeAdmin@gmail.com",
        password: await User.encryptPassword("NativeAdmin"),
        roles: "62727ea2570fd369b2d499a2",
      }).save(),
      new User({
        username: "NativeModerator",
        email: "NativeModerator@gmail.com",
        password: await User.encryptPassword("NativeModerator"),
        roles: "62727ea2570fd369b2d499a1",
      }).save(),
    ]);

    console.log(values);
  } catch (err) {
    console.error(err);
  }
};
