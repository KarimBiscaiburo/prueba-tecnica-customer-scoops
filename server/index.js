import { Resend } from "resend";
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env"
// Especifico la ruta donde debe buscar el archivo .env.local
dotenv.config({ path: 'server/.env.local' });

const APY_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(APY_KEY);


// Las imagenes solo pueden ser accedidas por los servicios de envío de email a traves de paginas públicas
(async function () {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['kbiscaiburo@gmail.com'],
      subject: 'Hello World',
      html: `
        
      `,
    });
  
    if (error) {
      return console.error({ error });
    }
  
    console.log({ data });
})();