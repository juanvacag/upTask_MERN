import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {
    //console.log('DATOS', datos)
    const {nombre, email, token} = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      //informacion del email de registro
      const info = await transport.sendMail({
        from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "Uptask - Comprueba tu cuenta",
        text: "Conprueba tu cuenta en UPTask",
        html:`<p>Hola: ${nombre}. Comprueba tu cuenta en UpTask</p>
        <p>Tu cuenta ya está casi lista, sólo debes confirmarla en el siguiente enlace:</p>
        <a 
          href="${process.env.FRONTEND_URL}/confirmar/${token}" style=text-decoration:none
          >Comprobar cuenta</a>
        <p>Si no creaste estaa cuenta, por favor ignora este mensaje</p>
        `
    })

};

export const emailOlvidePassword = async (datos) => {
  const {nombre, email, token} = datos

  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    //informacion del email de olvide password
    const info = await transport.sendMail({
      from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
      to: email,
      subject: "Uptask - Reestablece tu Password",
      text: "Reestablece tu Password",
      html:`<p>Hola: ${nombre}. Has solicitado reestablecer tu password</p>
      <p>Sigue el siguiente enlace para generar un nuevo password:</p>
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}" style=text-decoration:none>Reestablecer Password</a>
      <p>Si no solicitaste este email, puedes ignorar el mensaje</p>
      `
  })

};