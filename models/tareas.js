import chalk from "chalk";
import { Tarea } from "./tarea.js";

export class Tareas{

    _listado={};
    get listadoArray(){
        const listado=[];
        Object.keys(this._listado).forEach(key => {
            const tarea=this._listado[key];
            listado.push(tarea);
            
        });
        return listado;
    }
    constructor(){
        this._listado={};
    }
    borrarTarea(id=''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }
    crearTarea(desc=''){
        const tarea=new Tarea(desc);
        this._listado[tarea.id]=tarea;
    }
    cargarTareas(tareas=[]){
        const list=[];
        tareas.forEach(resul=>{
            this._listado[resul.id]=resul;
        })

    }
    listadoCompleto(){
        let homework='';
        Object.keys(this._listado).forEach((key,index)=>{
            if(this._listado[key].completadoEn){
                homework+=`${chalk.green(index+1)}. ${this._listado[key].desc} :: ${chalk.cyan('completado')}\n`;
            }
            else{
                
                homework+=`${chalk.green(index+1)}. ${this._listado[key].desc} :: ${chalk.red('pendiente')}\n`;
            }
           

        });
        return homework;


    }
    listarPendienteCompletado(completada=true){
        let contador=0;
        let tareax='';
        Object.keys(this._listado).forEach((key,index)=>{
            if(completada){
                
                if(this._listado[key].completadoEn){
                    contador+=1;
                    tareax+=`${chalk.green(contador)}. ${this._listado[key].desc} :: ${chalk.cyan(this._listado[key].completadoEn)}\n`;
                }
                

            }
            else{
                
                if(!this._listado[key].completadoEn){
                    contador+=1;
                    tareax+=`${chalk.green(contador)}. ${this._listado[key].desc} :: ${chalk.red('pendiente')}\n`;
                }
                
                

            }
           
           
           

        });
        return tareax;


    }
    toggleCompletados(ids=[]){
        //console.log(ids);
        //console.log(this._listado);
        ids.forEach((id)=>{
            const tarea=this._listado[id];
           // console.log('ga', tarea);
            if(!tarea.completadoEn){
                tarea.completadoEn=new Date().toISOString();
            }
            else{
                
            }
        });
        this.listadoArray.forEach(tarea=>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn=null;
                
            }
        })
        
    }
}