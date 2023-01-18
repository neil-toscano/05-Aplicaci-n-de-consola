
import { guardarData, leerDB } from "./helpers/guardarArchivo.js";
import { confirmar, inquirerMenu, leerInput, listadoTareaBorrar, mostrarTareasCheck, pausa } from "./helpers/inquirer.js";
import { Tarea } from "./models/tarea.js";
import { Tareas } from "./models/tareas.js";
//import colors from 'colors';
const main=async()=>{
    console.log('Hola mundo');
    
    let opt='';
    const tareas=new Tareas();
    const tareasDB= leerDB();
    
    if(tareasDB){
        tareas.cargarTareas(tareasDB);
    }
    await pausa();
    do {
        opt=await inquirerMenu();
        switch (opt) {
            case '1':
                const desc=await leerInput('Descripcion');
                tareas.crearTarea(desc);
                console.log(desc);
                await guardarData(tareas.listadoArray);
                break;
            case '2':
                //console.log(tareas.listadoArray);
                console.log(tareas.listadoCompleto());
                break;
            case '3':
                console.log(tareas.listarPendienteCompletado(true));
                break;
                
            case '4':
                console.log(tareas.listarPendienteCompletado(false));
                break;
            case '5':
                const idx=await mostrarTareasCheck(tareas.listadoArray);
                tareas.toggleCompletados(idx);
                //console.log(idx);
                break
            case '6':
                const id=await listadoTareaBorrar(tareas.listadoArray);
                if(id=='0'){

                }
                else{
                    const respu=await confirmar("Esta seguro de querer borrar?");
                if(respu){
                    tareas.borrarTarea(id);
                    console.log('TArea borrado!!');
                }

                }
                
                break;

            default:
                break;
        }
        
        
        //const tarea=new Tarea('Comprar comida');
        //console.log(tarea);
        //console.log('Hello'.green);
        await guardarData(tareas.listadoArray);
        await pausa();
    } while (opt!='0');
}
main();

