/**
 * List prompt example
 */

import chalk from "chalk";
import inquirer from "inquirer";


export const inquirerMenu=async()=>{
    /**
 * List prompt example
 */

console.clear();
console.log(chalk.yellow('==================='));
console.log(chalk.bgMagenta('SELECCIONE UNA OPCION'));
console.log(chalk.yellow('===================='));

 const {opciones}=await inquirer
  .prompt([
    {
      type: 'list',
      name: 'opciones',
      message: 'Que opcion escojera',
      choices: [
        {
            value:'1',
            name:'1. Crear tarea'
        },
        {
            value: '2',
            name:'2. Listar tareas'
        },
        {
            value:'3',
            name:'3. Listar tareas completadas'
        },
        {
            value:'4',
            name:'4. Listar tareas pendientes'
        },
        {
            value:'5',
            name:'5. Completar tareas'
        },
        {
            value:'6',
            name:'6. Borrar tareas'

        },
        {
            value:'0',
            name:'0.Salir'

        }
        
      ]
    }
    
  ]);
  return opciones;
  
}

export const listadoTareaBorrar=async(tareas=[])=>{
    const choices=tareas.map((tarea,i)=>{
        const idx=i+1;
        return {
            value:tarea.id,
            name: `${chalk.green(idx)} ${tarea.desc}`
        }
    });
    choices.unshift({
        value:'0',
        name:`${chalk.green('0')} ancelar`,

    })
    const preguntas=[{
        type:'list',
        name:'id',
        message:'borrar',
        choices:choices
    }]
    const {id}=await inquirer.prompt(preguntas);
    return id;


}
export const pausa=async()=>{
    await inquirer.prompt([
        {
            type:'input',
            name:'pause',
            message:'Presione enter para continuar'
        }
    ])
}
export const leerInput=async(mensaje='')=>{
    const question=[
        {
            type:'input',
            name:'desc',
            message:mensaje,
             validate(value){
                if(value.length===0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]
    const {desc}=await inquirer.prompt(question);
    return desc;
}

export const  confirmar=async(message)=>{
    const question=[
        {
            type:'confirm',
            name:'ok',
            message:message
        }
    ];

    const {ok}=await inquirer.prompt(question);
    return ok;

}
export const mostrarTareasCheck=async(tareas=[])=>{
    const choices=tareas.map((tarea,i)=>{
        const idx=i+1;
        return {
            value:tarea.id,
            name: `${chalk.green(idx)} ${tarea.desc}`,
            checked:(tarea.completadoEn)? true:false,
        }
    });
    
    const preguntas=[{
        type:'checkbox',
        name:'ids',
        message:'Seleccione',
        choices:choices
    }];
    const {ids}=await inquirer.prompt(preguntas);
    return ids;


}