// const getPlanet = () => {
//     setTimeout(() => {
//         const mars = {
//             name: 'Mars',
//             distanceFromSun: {
//               value: 227900000,
//               measurementUnit: 'kilometers',
//             },
//           };
//           console.log('Returned planet: ', mars);
//     }, 4000);
    
//   };
  
//   getPlanet(); // Imprime Marte depois de 4 segundos

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
    const temperaturaAtual = getMarsTemperature();
    setTimeout(() => {
        console.log(`A temperatura de Marte é: ${temperaturaAtual} graus celsius`);
    }, messageDelay());
};
// crie a função sendMarsTemperature abaixo

sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo