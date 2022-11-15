import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: Todo[] = []
  listFinished: Todo[] = [];

  closed = 0;

  constructor(private service: TodoService, private router: Router) { } /*agora podemos usar no FINDALL*/

  ngOnInit(): void {
    this.findAll();

  }

  /*NÃO VOU MAIS USAR ESSE MÉTODO
  countClosed() : void{
    for (let todo of this.list){
      if(todo.finalizado){
        this.closed ++;
      }
    }
  }*/

  findAll(): void {

    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(todo => {
        if (todo.finalizado) {
          this.listFinished.push(todo);
        } else {
          this.list.push(todo);
        }
      })
      this.closed = this.listFinished.length;
    });

  }

  finalizar(item: Todo): void{
    item.finalizado = true;
    this.service.update(item).subscribe(() => {
      this.service.message("Task Finalizada Com Sucesso!");
        this.list = this.list.filter(todo=> todo.id !== item.id);
        this.closed++;
    });
  }

  delete(id: any): void{
    /*chama o metodo delete da camada service*/
    this.service.delete(id).subscribe((resposta) => {
      if(resposta === null){
        /*chama o metodo message da camada service*/
        this.service.message("Task Deletada Com Sucesso!");
        this.list = this.list.filter(todo=> todo.id !== id)
      }
    });
  }
  navegarParaFinalizados(): void{
    this.router.navigate(['finalizados']);
  }

}
