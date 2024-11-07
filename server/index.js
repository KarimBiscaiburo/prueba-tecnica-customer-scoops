import { Resend } from "resend";
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env"
// Especifico la ruta donde debe buscar el archivo .env.local
dotenv.config({ path: 'server/.env.local' });

const APY_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(APY_KEY);

// Las imagenes solo pueden ser accedidas por los servicios de envío de email a traves de paginas públicas
// No renderiza las etiquetas <main>
(async function () {
    const { data, error } = await resend.emails.send({
      from: 'Customer Scoops <onboarding@resend.dev>',
      to: ['kbiscaiburo@gmail.com'],
      subject: 'Hola Anthony',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap" rel="stylesheet">
        </head>
        <body style="width: 100%; margin: 0; padding: 0;">
        <div style="width: 800px; height: 1084px;">

            <header style="width: 100%; height: 323px;">
                <div style="margin-left: 50px; height: 100%; background: linear-gradient(283.73deg, #231331 -29.4%, #00CCBC 50.02%); border-radius: 200px 0 0 200px;">

                    <!-- Imagen de logo -->
                    <img src="https://res.cloudinary.com/karimbiscaiburo/image/upload/v1730943887/logo_uycl19.png" alt="logo customer scoops" style="width: 222px; height: 81px; display: inline; border: none; background: none; float: left; margin-left: 64px; margin-top: 121px;">

                    <!-- Contenedor de la persona -->
                    <div style="width: 345px; height: 293px; margin-right: 40px; margin-top: 30px; float: right;">
                        <img src="https://res.cloudinary.com/karimbiscaiburo/image/upload/v1730945949/email-persona_lxghbj.png" alt="fondo persona" style="width: 100%; display: block; border: none; background: none;">
                    </div>

                </div>
            </header>

            <div style="width: 634px; margin: 55px auto 10px auto;">
                <p style="color: #231331; font-size: 20px; font-family: 'K2D', sans-serif; margin: 0; padding-bottom: 20px;"><strong>Hola Anthony,</strong></p>
                <p style="color: #231331; font-size: 20px; font-family: 'K2D', sans-serif; margin: 0; padding-bottom: 20px;">En Customer Scoops nos importa mucho tu experiencia, y queremos asegurarnos de que nuestros servicios sigan cumpliendo tus expectativas. Por eso, hemos preparado unas breves preguntas para que puedas compartir tus comentarios y sugerencias.</p>
                <p style="color: #231331; font-size: 20px; font-family: 'K2D', sans-serif; margin: 0; padding-bottom: 30px;">Tu opinión es clave para ayudarnos a mejorar y adaptarnos a lo que realmente necesitas. Nos tomará solo unos minutos de tu tiempo.</p>
                <a href="https://prueba-tecnica-customer-scoops.vercel.app/" style="font-family: 'K2D', sans-serif; background-color: #231331; padding: 10px 34px; border-radius: 50px; text-decoration: none; color: #FFF; font-size: 14px; max-width: 191px;" rel="noopener noreferrer" target="_blank">Ingresa Aquí</a>
                <p style="color: #231331; font-size: 20px; font-family: 'K2D', sans-serif; margin: 0; padding-top: 30px; padding-bottom: 20px;">Agradecemos de antemano tu participación y confianza en Customer Scoops. ¡Gracias por tu tiempo y por contribuir a nuestra mejora continua!</p>
                <p style="color: #231331; font-size: 20px; font-family: 'K2D', sans-serif; margin: 0;">Saludos, <br> <strong>Karim Biscaiburo</strong> <br> Equipo de Customer Scoops</p>
            </div>

            <footer style="background-color: #231331; display: flex; width: 100%; height: 135px;">
                <img src="https://res.cloudinary.com/karimbiscaiburo/image/upload/v1730943887/logo_claro_qigwwb.png" alt="logo footer customer scoops" style="width: 115px; height: 42px; object-fit: contain; margin: 39px auto 0 auto; display: block; border: none; background: none;">
            </footer>
        </div>
        </body>
        </html>
      `,
    });
  
    if (error) {
      return console.error({ error });
    }
  
    console.log({ data });
})();