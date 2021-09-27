//Promesas : Es un objeto que representa una operación a futuro con su estado y valor

//const promesa = fetch()

//Estado : Todas las promesas tienen un estado, que puede ser: pending - fulfilled - rejected
//Valor/Resultado : Si la promesa termina, el valor/resultado es el valor que se obtiene(puede ser un error tambien)
/* 
const promesa_uno = new Promise((res,rej)=>{
    const a = 1
    const b = 2
    const suma = a + b
    if(suma > 2){
        res(suma)
    }else{
        rej('Error')
    }
})

//Callback Hell / Pyramid of Doom
promesa_uno
.then((resultado)=>{
    const promesa_dos = new Promise((res,rej)=>{
        res(resultado+1)
    })
    return promesa_dos
})
.then((resultado)=>{
    const promesa_dos = new Promise((res,rej)=>{
        res(resultado+1)
    })
    return promesa_dos
})
.then((resultado)=>{
    console.log(resultado)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('Finalizado')
}) */

/* promesa.then((resultado)=>{
    console.log(resultado)
})

promesa.catch((error)=>{
    console.log(error)
})

promesa.finally(()=>{}) */

//Sincronico : Se ejecuta en ese mismo momento y bloquea el stack durante toda su ejecucion(bloqueante)
//Asincronico : Se ejecuta en diferido y no bloquea el stack(no bloqueante) Son implementados por : Trigger(Eventos) - Timers - Requests

//Bucle de eventos (Event Loop) 